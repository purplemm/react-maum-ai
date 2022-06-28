import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeClass } from "../store/store";
import { imgTrialTooltip } from "../assets/images/CommImg";

function Login(){
    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeClass("login"));
    }, []);

    return (
        <Fragment>
            <div id="container" className={ state.containerClass }>
                <div className="content">
                    <form className="loginWrap" method="get" action="">
                        <fieldset>
                            <legend>Login</legend>
                            <div className="loginBox">
                                <span>
                                    <input type="text" name="ipt_id" id="ipt_id" className="ipt_txt" title="User Name" placeholder="이메일" />
                                </span>
                                <span>
                                    <input type="password" name="ipt_pw" id="ipt_pw" className="ipt_txt" title="Password" placeholder="비밀번호" />
                                </span>
                                <span className="checks">
                                    <input type="checkbox" name="ipt_check" id="ipt_check" className="ipt_check" />
                                    {/* <label for="ipt_check"><em className="far fa-check-circle"></em> 로그인 상태 유지</label> */}
                                    {/* [D] 에러일 경우 .txt_error 스크립트로 구현  */}
                                    <span className="txt_error">가입하지 않은 이메일이거나, 잘못된 비밀번호 입니다.</span>
                                </span>
                                <span>
                                    <a href="#none" title="로그인" className="homebtn">로그인</a>
                                </span>
                                <div className="btn">
                                    <Link to="/join/agreeTerms" className="btn_signupt">회원가입</Link><span>&nbsp;| &nbsp;</span>
                                    <a href="#none" className="btn_forgot">비밀번호 찾기</a>
                                    <div className="tooltip">
                                        <div className="tooltip_box">
                                            <img src={ imgTrialTooltip } alt="tooltip Img" />
                                            지금 회원가입 하면, <span>1달 무료!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="or">SNS 간편 로그인 / 회원가입</span>
                        </fieldset>
                    </form>
                    <div className="btn_box">
                        <a href="#none" title="구글로그인" className="google_login"> 구글 로그인</a>
                        <a href="#none" title="페이스북로그인" className="facebook_login">페이스북 로그인</a>
                    </div>
                </div>
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

export default Login;