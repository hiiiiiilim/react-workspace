//js에서는 글자값인지 숫자값인지 중요하지않음, 재사용이가능한지, 재할당이 가능한지가 중요

//var: 재할당, 재선언 가능
//let: 재선언은 하지 못하지만 재할당은 가능
//const:
const msg ="hihi";

function App() {
  return (
    <div>
      <h1>안녕 리엑트</h1>
      <h2>{msg}</h2>
      <p>이것은 React JS입니다.</p>
    </div>
  );
}

export default App;
//export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
//기본적으로 내보낼 항목을 지정하는 역할을 함
//다른 js에서 App.js에 있는 function App을 사용할 수 있도록 내보내기도 하지만
//app.js에서 기본으로 사용할 항목을 지정하기도 함