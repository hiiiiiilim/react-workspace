import React, {useState} from "react";
//useState : 상태를 관리하기 위해 사용되는 함수
//사용법 : 배열형식으로 사용을 하며, 첫번째 배열은 현재 상태값
//두번째 배열은 상태 업데이트 하는 값
//const [const,setCount]=useState(0);

//js에서는 글자값인지 숫자값인지 중요하지않음, 재사용이가능한지, 재할당이 가능한지가 중요


//var: 재할당, 재선언 가능
//밑에서 안된 에러예제 모두 가능, 잘 사용하지 않음
//let: 재선언은 하지 못하지만 재할당은 가능
let count = 0;
count = 1;
//let count = 2; //불가
//const: 재선언 재할당 둘다 불가 / 한 번 선언하면 다시 값을 변경하거나 수정할 수 없음
const msg ="hihi";
//msg ="aa"; msg에 다른 값을 넣고 싶어서 추가로 값변경을 하려하면 에러가 발생

function HiComponent(){
  return (
    <div>
      <h1>{msg}</h1>
      <p>이것은 hi 컴포넌트입니다.</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>안녕 리엑트</h1>
      <h2>{msg}</h2>
      <Counter />
      <HiComponent/>
      <p>이것은 React JS입니다.</p>
    </div>
  );
}

function Counter(){
  //자바스크립트 코드 작성하는 공간
  const [count,setCount]=useState(0);
  const inceament = () => {
    setCount(count + 1)
  }
  return( //html 태그 코드는 return 안에 작성해줌
    <div>
      <h1>Count:{count}</h1>
      <button onClick={inceament}>증가시키는 버튼</button>
    </div>
    //onClick 순수자바스크립트에서는 onclick으로 작성했지만 리엑트자바스크립트에서는 onClick
    //C를 대문자로 활용하는 카멜케이스를 사용함
    
  )
}

export default App;
//export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
//기본적으로 내보낼 항목을 지정하는 역할을 함
//다른 js에서 App.js에 있는 function App을 사용할 수 있도록 내보내기도 하지만
//app.js에서 기본으로 사용할 항목을 지정하기도 함