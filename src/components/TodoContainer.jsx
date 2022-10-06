import { useRef } from "react";
import { useState } from "react";
import TodoBody from "./TodoBody";
import TodoHead from "./TodoHead";

const TodoContainer = ()=>{

    const [todos, setTodos] = useState([
        {id:1, title:'오늘은 리액트를 공부할 거에요~!', done:true},
        {id:2, title:'내일도 리액트를 공부할 거에요~!', done:false},
        {id:3, title:'모레도 리액트를 공부할 거에요~!', done:false},
    ]);

    const nexdId = useRef(4);

    const fnAdd = (plan)=>{
        console.log('fnAdd 함수 호출됨');
        console.log('전달된 plan은 ',plan)

        //새로운 일정
        const newPlan = {id:nexdId.current++, title:plan, done:false}

        setTodos([
            ...todos,
            newPlan
        ]);
    }


    const fnChk = (id)=>{
        console.log('fnChk 함수 호출됨');

        //새로운 상태배열 만들어서
        const newTodos = todos.map(todo=>{
            return (todo.id===id) ? {...todo, done:!todo.done} : todo
        })

        //업데이트 함수에 넣어준다.
        setTodos(newTodos);
    }

    const fnDel = id => {
        console.log('삭제할 원소의 id는',id);

        //id에 해당하는 원소를 제외한 나머지로 이루어진 새로운 배열
        const newTodos = todos.filter(todo=>todo.id !== id);

        setTodos(newTodos);
    }

    return(
        <div className="container">
            <TodoHead fnAdd={fnAdd} />
            <TodoBody todos={todos} fnChk={fnChk} fnDel={fnDel} />
        </div>
    );
}

export default TodoContainer;