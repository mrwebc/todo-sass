const TodoItem = (props)=>{
    return (
        <li>
            <h2 className="tit">오늘은 리액트를 공부할 거에요~! ({props.num})</h2>
            <label htmlFor="done" className="sr-only">완료</label>
            <input type="checkbox" id="done" className="done" />
            <button className="del">삭제</button>
        </li>
    );
}

export default TodoItem;