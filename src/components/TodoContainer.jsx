import { useRef } from "react";
import { useState } from "react";
import TodoBody from "./TodoBody";
import TodoHead from "./TodoHead";

const TodoContainer = ()=>{

    const [todos, setTodos] = useState([
        {id:1, title:'리액트 컴포지션 연습', done:false},
        {id:2, title:'프로필 사이트 제작하기', done:false},
        {id:3, title:'자바스크립트를 활용한 프로젝트', done:false},
        {id:4, title:'웹표준을 준수한 시멘틱 페이지', done:false},
        {id:5, title:'포트폴리오 팀프로젝트', done:false},
        {id:6, title:'리액트를 활용한 데이터 핸들링', done:false},
        {id:7, title:'다른 사람이 말하는 나 컨텐츠 작성', done:false}
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