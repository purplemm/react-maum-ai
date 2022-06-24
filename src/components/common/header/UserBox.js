import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { icoUserGrey } from "../../../assets/images/headerImg";

function UserBox(){
    const [login, setLogin] = useState(true);

    return (
        <Fragment>
            {
                login
                ? (
                    <li>
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
                    <li>
                        <a href="#none" className="btn_sign">로그인</a>
                    </li>
                )
            }
        </Fragment>
    )
}

export default UserBox;