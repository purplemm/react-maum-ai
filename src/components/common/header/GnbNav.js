import { Link } from "react-router-dom";

function GnbNav(){
    return (
        <div className="gnb">
            <ul className="nav">
                <li><Link to="/price">μκΈμλ΄</Link></li>
            </ul>
        </div>
    )
}

export default GnbNav;