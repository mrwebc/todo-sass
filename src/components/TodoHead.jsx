import TodoInsert from "./TodoInsert";

const TodoHead = ({fnAdd})=>{
    return (
        <header>
            <h1>일정관리</h1>
            <TodoInsert fnAdd={fnAdd} />
        </header>
    );
}

export default TodoHead