import React, {useState} from "react";

function ToggleButton(){
    //스크립트 공간
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    }
    return(
        <div>
            {/*만약에 버튼이 true 이면 글자로 on이라는 글자가 표시될 수 잇도록 삼항연산자를 이용해서 표기
                삼항연산자란 어떤값  ? true이면 나타낼 상태 : falues이면 나타낼 상태
            */}
            <p>버튼 상태 : {isOn ? 'On' : 'Off'}</p>
            <button onClick={toggle}>버튼 상태 변경하기</button>
        </div>
    )
}

export default ToggleButton;