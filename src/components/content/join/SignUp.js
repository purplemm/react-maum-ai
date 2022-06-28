function SignUp(){
    return (
        <div className="content">
            <div className="signUpWrap">
                <div className="signUpBox">
                    <form id="memberForm" name="memberForm" method="post">
                        <fieldset>
                            <legend>sign up form</legend>
                            <div className="input_box">
                                <div className="input_txt">
                                    <div className="email_box">
                                        <label htmlFor="email">이메일</label>
                                        <input type="email" name="Email" id="email" />
                                        <button type="button" id="email_auth">이메일 인증</button>
                                        <span className="email" id="email_noti">이미 사용중인 이메일입니다.</span>
                                    </div>
                                    <div className="code_box">
                                        <label htmlFor="code"></label>
                                        <input type="number" name="code" id="code" placeholder="인증 코드 입력" />
                                        <em className="count">30분 0초</em>
                                        <button type="button" id="email_code">확인</button>
                                        <span className="email" id="code_noti">인증이 성공했습니다.</span>
                                    </div>
                                </div>
                                <div className="input_txt">
                                    <label htmlFor="password">비밀번호</label>
                                    <input type="password" name="password" id="password" />
                                    <span className="noti">* 8~12자 영문, 숫자 포함</span>
                                </div>
                                <div className="input_txt">
                                    <label htmlFor="passwordCheck">비밀번호 재확인</label>
                                    <input type="password" name="passwordCheck" id="passwordCheck" />
                                    <span className="error password">비밀번호가 일치하지 않습니다.</span>
                                </div>
                                <div className="input_txt">
                                    <label htmlFor="name">이름</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div className="input_txt">
                                    <label htmlFor="phone">연락처</label>
                                    <input type="tel" name="companyEmail" id="phone" />
                                </div>
                                <div className="input_txt">
                                    <label htmlFor="companyEmail">회사/소속</label>
                                    <input type="text" name="companyEmail" id="companyEmail" />
                                </div>
                            </div>
                            <div className="select_form">
                                <span>가입 경로</span>
                                <div className="selectarea">
                                      <span className="checks">
                                            <input type="checkbox" name="registerPath" id="1" className="ipt_check" value="포털 검색" />
                                            <label htmlFor="1"><em className="far fa-check-circle"></em> 포털 검색</label>
                                     </span>
                                    <span className="checks">
                                            <input type="checkbox" name="registerPath" id="2" className="ipt_check" value="세미나, 전시회" />
                                            <label htmlFor="2"><em className="far fa-check-circle"></em> 세미나, 전시회</label>
                                     </span>
                                    <span className="checks">
                                            <input type="checkbox" name="registerPath" id="3" className="ipt_check" value="영업사원" />
                                            <label htmlFor="3"><em className="far fa-check-circle"></em> 영업사원</label>
                                     </span>
                                </div>
                                <div className="selectarea">
                                    <span className="checks">
                                            <input type="checkbox" name="registerPath" id="4" className="ipt_check" value="광고, 홍보물" />
                                            <label htmlFor="4"><em className="far fa-check-circle"></em> 광고, 홍보물</label>
                                     </span>
                                    <span className="checks">
                                            <input type="checkbox" name="registerPath" id="5" className="ipt_check" value="관련 기사" />
                                            <label htmlFor="5"><em className="far fa-check-circle"></em> 관련 기사</label>
                                     </span>
                                </div>
                            </div>
                            <input type="hidden" />
                        </fieldset>
                    </form>
                    <a href="#none" className="signupBtn" title="가입하기" target="_self">가입하기</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp;