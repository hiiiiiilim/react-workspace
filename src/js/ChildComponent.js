import React from "react";
//function과 const로 작성한 함수는 큰 차이가 없음
//보통 const로 작성한 함수는 함수 표현식이라고 부름 (function Expresstion)
//const는 주로 간단하게 함수를 표현할 때 많이 사용
//function으로 작성한 함수는 함수 선언식이라고 부름 (function Declaration)

function ChildComponent(props){
    return <div>{props.message}</div>
}

export default ChildComponent;