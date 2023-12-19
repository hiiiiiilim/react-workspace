import React,{useState} from "react";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";

function ImageChange(){
    //초기 이미지 경로는  ../img/image1.jpg 로 설정되어있는 image1으로 초기 이미지 설정
    const [imageSrc, setImageSrc] = useState(image1);
    const [isClick, setIsClick] = useState(false);
    //이미지를 클릭할 때 마다 이미지가 변경될 수 있도록 클릭함수 만들기
    const handleClick = () =>{
        if(imageSrc === image1){
            setImageSrc(image2);
        }else if(imageSrc === image2){
            setImageSrc(image3);
        }else{
            setImageSrc(image1);
        }
    }
    return(
        <div>
            <img src={imageSrc} onClick={handleClick}></img>
        </div>
    )
}

export default ImageChange;

{/*
    == : 동등 연산자로 자동으로 형 변환을 수행하기 때문에 데이터 타입이 다를 경우에도 변환을 일부 시도하기도 합니다.
    ===: 일치 연산자로 값과 데이터 타입이 모두 같아야지 true를 반환합니다.
*/}