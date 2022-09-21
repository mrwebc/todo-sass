import TodoBody from "./TodoBody";
import TodoHead from "./TodoHead";

const TodoContainer = ()=>{
    return(
        <div className="container">
            <TodoHead />
            <TodoBody />
        </div>
    );
}

export default TodoContainer;