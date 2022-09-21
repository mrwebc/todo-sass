import TodoInsert from "./TodoInsert";

const TodoHead = (pros)=>{
    return (
        <header>
            <h1>일정관리</h1>
            <TodoInsert />
        </header>
    );
}

export default TodoHead