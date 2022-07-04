import { Link, useNavigate } from "react-router-dom";
import terms from "../../../data/terms";
import conditions from "../../../data/conditions";

function AgreeTerms(){
    const navigate = useNavigate();

    return (
        <div className="content">
            <div className="agreeWrap">
                <div className="agreeBox">
                     <span className="checks">
                            <input type="checkbox" name="ipt_check" id="check1" className="ipt_check" />
                            <label htmlFor="check1"><em className="far fa-check-circle"></em> 이용약관 동의 <strong> (필수)</strong></label>
                     </span>
                    <div className="scroll_box">{ terms.content }</div>
                    <span className="checks">
                            <input type="checkbox" name="ipt_check" id="check2" className="ipt_check" />
                            <label htmlFor="check2"><em className="far fa-check-circle"></em> 개인정보 수집 및 이용에 대한 안내 <strong> (필수)</strong></label>
                     </span>
                    <div className="scroll_box">{ conditions.content }</div>
                    <span className="checks">
                            <input type="checkbox" name="ipt_check" id="check3" className="ipt_check" />
                            <label htmlFor="check3"><em className="far fa-check-circle"></em> 이벤트 등 프로모션 알림 메일 수신 (선택)</label>
                     </span>
                    <a href="#none" title="뒤로" target="_self" onClick={ navigate(-1) }>뒤로</a>
                    <Link to="/join/signUp" className="agree_btn">확인</Link>
                </div>
            </div>
        </div>
    )
}

export default AgreeTerms;