import React, {useState} from "react";

function ObjectExample(){
    const [person, setPerson] = useState({name: 'kh', age:20});
    const updateAge = () => {
        //...person : 현재 person 객체 속성을 펼쳐서 새로운 객체로 만들어주는 역할을 함
        //객체 속성들은 그대로 복사가 되서 만들어짐
        // '20' : 문자열과 숫자를 더하는 것으로 인식 ex) 20+1=201
        //age : person.age + 1 age속성에 person.age+1한 값으로 age 값을 저장하겠다.
        //...person, age , 의 역할은 복사된 객체에서 값이 변화하거나 추가해야할 내용이 있으면 , 뒤에 값과 속성을 추가함
        setPerson({...person, age : person.age + 1});
    }

    return(
        <div>
            <p>Name : {person.name}</p>
            <p>Age : {person.age}</p>
            <button onClick={updateAge}>나이올리기</button>
        </div>
    )
}

export default ObjectExample;