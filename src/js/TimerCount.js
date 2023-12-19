import React, {useState, useEffect} from "react";

function Timer(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `남은 티켓${count}`
    })

    const increament = () => setCount(count + 1);

    return(
        <div>
            <p>{count}</p>
            <button onClick={increament}></button>
            {/*<button onClick={() => setCount(count + 1)}*/}
        </div>
    )
}
export default Timer;