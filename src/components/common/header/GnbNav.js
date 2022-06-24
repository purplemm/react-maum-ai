import { Link } from "react-router-dom";

function GnbNav(){
    return (
        <div className="gnb">
            <ul className="nav">
                <li><Link to="/price">요금안내</Link></li>
            </ul>
        </div>
    )
}

export default GnbNav;