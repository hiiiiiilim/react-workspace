import React, {useState} from "react";
import h from "../img/h.png";
function Addcount(){

    //useState를 활용해서 값 증가하는 함수를 완성할 것
    const [count, setCount]=useState(0);
    const inceament = () => {
        setCount(count + 1) 
      }
      return(
        <div>
          <h1>숫자:{count}</h1>
          <img src={h} style={{width:300}}/><br/>
          <button onClick={inceament}>증가시키는 버튼</button>
        </div>
      )
}

function Count(){
    return(
        <div>
            <Addcount />
        </div>
    )
}

export default Count;