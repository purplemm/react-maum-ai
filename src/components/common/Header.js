import { useEffect } from "react";
import GnbNav from "./header/GnbNav";
import UserBox from "./header/UserBox";
import LangBox from "./header/LangBox";
import AppBox from "./header/AppBox";
import MobileHamBtn from "./header/MobileHamBtn";
import { useSelector } from "react-redux";

function Header(){
    let state = useSelector((state) => state);
    
    useEffect(() => {
        // 가로 스크롤 시 header fix
        // document.addEventListener("scroll", function() {
        //     let maumHeader = document.getElementById("header");
        //     let scrollX =  window.scrollX;    
        //     maumHeader.style.left = "-" + scrollX + "px";
        // });
    }, []);

    return (
        <div id="header" className={ state.headerClass }>
            <div className="contBox">
                <h1 className="logo">
                    <a href="/" title="maum.ai">
                        <span className="hide">maum.ai</span>
                    </a>
                </h1>
                <div className="sta">
                    <GnbNav />
                    <div className="etc">
                        <ul className="nav">
                            <UserBox />
                            <LangBox />
                            <AppBox />
                        </ul>
                    </div>
                    <MobileHamBtn />
                </div>
            </div>
        </div>
    )
}

export default Header;