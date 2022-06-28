import { Link } from "react-router-dom";

function AsideNav(){
    return (
        <div className="maum_aside logged_in">
            {/* .aside_top */}
            <div className="aside_top">
                <Link to="/login" className="btn_sign login_pop_m">로그인</Link>
            </div>
            {/* //.aside_top */}

            {/* .aside_mid */}
            <div className="aside_mid">
                <ul className="m_nav">    
                    <li className="userNav">
                        <h2>
                            <a href="#none">boramm@mindslab.ai</a>
                        </h2>
                        <ul className="m_lst">
                            <li>
                                <h3><Link to="/user/profile">프로필</Link></h3>
                                <h3><Link to="/user/apiAccount">API 정보</Link></h3>
                                <h3><Link to="/user/paymentInfo">결제정보</Link></h3>
                            </li>
                        </ul>
                    </li>
                    <li className="aiHuman">
                        <h2><a href="#none">AI Human</a></h2>
                        <ul className="m_lst">
                            <li>
                                <h3><a href="https://human.maum.ai/event/kr">인공인간 제작 의뢰</a></h3>
                            </li>
                            <li>
                                <h3><a href="https://store.maum.ai/">인공인간 영상 제작</a></h3>
                            </li>
                            <li>
                                <h3><a href="https://maum.ai/home/estimate/krAhb2">인공인간 디바이스 구매</a></h3>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2><a href="https://fast-aicc.maum.ai/intro">AICC</a></h2>
                    </li>
                    <li>
                        <h2><a href="https://edge.maum.ai/">SMART-X</a></h2>
                    </li>
                    <li>
                        <h2><a href="https://minutes.maum.ai/">MAUM 회의록</a></h2>
                    </li>
                    <li>
                        <h2><a href="/home/cloudApiServiceMain">CLOUD API</a></h2>
                    </li>
                    <li>
                        <h2><a href="https://data.maum.ai/">MAUM DATA</a></h2>
                    </li>
                    <li>
                        <h2><Link to="/price">요금안내</Link></h2>
                    </li>
                    <li>
                        <h2><Link to="/" className="move_inquiry">문의하기</Link></h2>
                    </li>
                        <li>
                            <h2><a href="#none">로그아웃</a></h2>
                        </li>
                </ul>
            </div>
            {/* //.aside_mid */}

            {/* .aside_btm */}
            <div className="aside_btm">    
                <ul>
                    <li className=""><span><a href="#none">한국어</a></span></li>
                    <li className=""><span><a href="#none">English</a></span></li>
                </ul>
            </div>
            {/* //.aside_btm */}
        </div>
    )
}

export default AsideNav;