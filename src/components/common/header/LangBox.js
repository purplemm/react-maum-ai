function LangBox(){
    return (
        <li>
            <a className="btn_ico lang" href="#none"><span>언어</span></a>
            <div className="lstBox">
                <ul className="lst">
                    <li className="lang_li"><a href="?lang=ko">한국어</a></li>
                    <li className="lang_li"><a href="?lang=en" target="_self" title="English">English</a></li>
                </ul>
            </div>
        </li>
    )
}

export default LangBox;