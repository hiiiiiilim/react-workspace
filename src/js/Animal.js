import React, {useState, useEffect} from "react";
//객체 = 컴포넌트가 function, class로 묶어 재사용할 수 있도록 만들어준 함수나 클래스0
function AnimalSound(){
    //스크립트와 관련된 내용작성
    const [animal, setAnimal]=useState('cat');

    useEffect(() => {
        //console.log 안에 함수나 변수명을 사용하고자한다면 
        // '' "" 대신에 ``을 사용
        //연결될 때 바로 실행이 되는 부분
        console.log(`${animal}:야옹`)

        //함수연결이 정리될때 실행이되는 함수
        return () =>{
            console.log(`${animal}`);
        };
        //[animal] 이라는 값이 변경될때마다 useEffect안에 작성한 내부 코드를 다시 실행하겠다.
        // []추후에는 animal하나만 들어있는 것이 아니라 여러변수들이 들어잇을 수 있으므로 배열로 묶어주는 것
    }, [animal]); //animal이 바뀔때 마다 실행

    const handleSound = (newanimal)=>{
        setAnimal(newanimal);
    }

    return(
        <div>
            <h1>동물 소리 앱</h1>
            <p>{animal} 소리는</p>
            <button onClick={() => handleSound('cat')}>cat</button>
            <button onClick={() => handleSound('dog')}>dog</button>
            <button onClick={() => handleSound('bird')}>bird</button>
        </div>
    )
}

export default AnimalSound;