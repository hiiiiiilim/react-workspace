import React,{useState} from "react";

function IndexExample(){
                                    //빈글자를 나타낼때 '', ""상관없이 사용할 수 있음
    const [inputText, setInputText] = useState('');
    //e.target.value
    //e 사용자가 입력하거나 선택했을 때 어떤 값을 입력하고 선택했는지를 담기위한 객체에 속함
    //target 사용자가 작성하거나 입력한 html 입력란을 나타냄, 버튼 틀
    //value 사용자가 입력한 값을 가져옴, 버튼 안에 들어있는 값
    //target.value select 나 체크박스 button input 등 어디서든 쓸 수 있음
    const handleChange = (e) => {
        setInputText(e.target.value);
    }
        return(
        <div>
            <input type="text" 
                value={inputText} 
                onChange={handleChange}/>
            <p>내가 작성한 글: {inputText}</p>
       </div>
    )
}

export default IndexExample;