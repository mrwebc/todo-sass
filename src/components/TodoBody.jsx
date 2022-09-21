import TodoItem from "./TodoItem";

const TodoBody = ()=>{
    return (
        <section>
            <ul>
                <TodoItem num={1} />
                <TodoItem num={2} />
                <TodoItem num={3} />
                <TodoItem num={4} />
                <TodoItem num={5} />
                <TodoItem num={6} />
                <TodoItem num={7} />
                <TodoItem num={8} />
                <TodoItem num={9} />
                <TodoItem num={10} />
                <TodoItem num={11} />
            </ul>
        </section>
    );
};

export default TodoBody;