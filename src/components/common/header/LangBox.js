import { useState, useEffect } from "react";

function LangBox(){
    const [isActive, setIsActive] = useState(false);

    function etcToggleClass(){
        setIsActive(!isActive);
    }

    useEffect(() => {
        const etcNav = document.querySelectorAll(".etc .nav li");
        return () => {
            etcNav.classList.remove("active");
        }
    }, []);

    return (
        <li onClick={ etcToggleClass } className={ isActive ? "active" : "" }>
            <a className="btn_ico lang" href="#none"><span>언어</span></a>
            <div className="lstBox">
                <ul className="lst">
                    <li className="lang_li"><a href="?lang=ko">한국어</a></li>
                    <li className="lang_li"><a href="?lang=en" target="_self" title="English">English</a></li>
                </ul>
            </div>
        </li>
    )
}

export default LangBox;