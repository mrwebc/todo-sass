import { useRef } from "react";
import { useState } from "react";

const TodoInsert = ({fnAdd})=>{

    const [plan, setPlan] = useState('');

    const fnPlan = (evt)=>{
        setPlan(evt.target.value)
    }

    const $input = useRef(null);

    return (
        <form onSubmit={evt=>{
            evt.preventDefault();
            fnAdd(plan);

            setPlan('');
            $input.current.focus();
        }}>
            <label className="sr-only" htmlFor="new">새일정</label>

            <input ref={$input} type="text" id="new" value={plan} onChange={fnPlan} autoFocus placeholder="새일정을 입력하세요" autoComplete="off" />
            
            <button>추가</button>
        </form>
    );
}

export default TodoInsert;