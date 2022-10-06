const TodoItem = ({todo, fnChk, fnDel})=>{

    const {id, title, done} = todo;

    return (
        <li>
            <h2 className={`tit ${done&&'done'}`}>{title}</h2>
            <label htmlFor="done" className="sr-only">완료</label>

            <input type="checkbox" onChange={evt=>{
                // console.log(evt.target.checked);
                // console.log(`id = ${id}`)
                fnChk(id);
            }} id="done" className="done" checked={done} />

            <button onClick={e=>{
                fnDel(id);
            }} className="del">삭제</button>
        </li>
    );
}

export default TodoItem;