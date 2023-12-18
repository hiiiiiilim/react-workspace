import React,{useState} from "react";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";

function ImageChange(){
    //초기 이미지 경로는  ../img/image1.jpg 로 설정되어있는 image1으로 초기 이미지 설정
    const [imageSrc, setImageSrc] = useState(image1);
    const [isClick, setIsClick] = useState(false);
    //이미지를 클릭할 때 마다 이미지가 변경될 수 있도록 클릭함수 만들기
    const handleClick = () =>{
        if(isClick){
            setImageSrc(image2);
            setIsClick(false);
        }else{
            setImageSrc(image1);
            setIsClick(true);//set을 사용해서 값을 변경함
        }
    }
    return(
        <div>
            <img src={imageSrc} onClick={handleClick}></img>
        </div>
    )
}

export default ImageChange;