import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { icoUserGrey } from "../../../assets/images/CommImg";

function UserBox({ isActive }){
    const [login, setLogin] = useState(false);

    return (
        <Fragment>
            {
                login
                ? (
                    <li className={ isActive ? "active" : "" }>
                        <a className="btn_ico user" href="#none"><span>사용자</span></a>

                        <div className="lstBox">
                            <ul className="lst">
                                <li className="userInfo">
                                    <span className="thumb"><img src={ icoUserGrey } alt="사용자" /></span>
                                    <span className="info">
                                        <em className="userName">노보람</em>
                                        <em className="loginID">boramm@mindslab.ai</em>
                                    </span>
                                </li>
                                <li><Link to="/employees">직원용</Link></li>
                                <li><Link to="/user/profile">프로필</Link></li>
                                <li><Link to="/user/apiAccount">API 정보</Link></li>
                                <li><Link to="/user/paymentInfo">결제정보</Link></li>
                                <li><a href="#none" title="로그아웃">로그아웃</a></li>
                            </ul>
                        </div>
                    </li>
                )
                : (
                    <li><Link to="/login" className="btn_sign">로그인</Link></li>
                )
            }
        </Fragment>
    )
}

export default UserBox;