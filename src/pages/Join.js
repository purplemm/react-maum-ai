import { Fragment, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { changeTitle, changeClass } from "../store/store";

function Join(){
    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeClass("join"));
        dispatch(changeTitle("회원가입"));

        return () => {
            dispatch(changeTitle(""));
        }
    }, []);

    return (
        <Fragment>
            <div id="container" className={ state.containerClass }>
                <Outlet></Outlet>
            </div>
            <div>
                <footer>
                    <div className="footer">
                        <a href="https://maum.ai/home/krTermsMain" target="_blank" rel="noreferrer">이용약관 </a> ㅣ
                        <a href="https://maum.ai/home/krTermsMain#conditions" target="_blank" rel="noreferrer"> 개인정보처리방침 </a> ㅣ
                        <a href="https://maum.ai/#stn_contact" target="_blank" rel="noreferrer"> 고객센터 </a>
                        <span>ㅣ</span>
                        <div className="lang">
                            <span className="lang_select">한국어 <em className="fas fa-chevron-up"></em></span>
                            <ul>
                                <li className="active">한국어</li>
                                <li><a href="https://maum.ai/?lang=en" target="_blank" rel="noreferrer">English</a></li>
                            </ul>
                        </div>
                    </div>
                    <p>Copyright © 2020 주식회사 마인즈랩. All rights reserved.</p>
                    <div className="m_lang">한국어 <a href="#none" title="English">English</a>
                    </div>
                </footer>    
            </div>
        </Fragment>
    )
}

export default Join;