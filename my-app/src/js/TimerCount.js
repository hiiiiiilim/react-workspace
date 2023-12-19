import React, {useState, useEffect} from "react";

function Timer(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `남은 티켓${count}`
    })

    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )
}
export default Timer;