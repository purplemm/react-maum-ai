import { useState } from "react";
import { useDispatch } from "react-redux";
import { asideOpen } from "../../../store/store";

function MobileHamBtn(){
    let dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);

    function handleAside(){
        setIsActive(!isActive);

        const maumBody = document.getElementsByTagName("body")[0];
        if(isActive === false){
            dispatch(asideOpen("maum_aside_open"));
            maumBody.style.overflow = "hidden";
        }else{
            dispatch(asideOpen(""));
            maumBody.style.overflow = "visible";
        }
    }

    return (
        <button type="button" className={ isActive === true ? "btn_ham mobile active" : "btn_ham mobile" } title="모바일 메뉴 버튼" onClick={ handleAside }>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default MobileHamBtn;