function AppBox({ isActive }){
    return (
        <li className={ isActive ? "active" : "" }>
            <a className="btn_ico app" href="#none"><span>웹 앱 및 서비스</span></a>
            <div className="appBox">
                <div className="tit">웹 앱 및 서비스</div>
                <ul className="lst">
                    <li>
                        <a href="https://aihuman.maum.ai" target="_blank" title="AI HaaS" rel="noreferrer">
                            <span className="ico"></span>
                            <em>AI HaaS</em>
                        </a>
                    </li>
                    <li>
                        <a href="http://studio.maum.ai/login" target="_blank" title="M Studio" rel="noreferrer">
                            <span className="ico"></span>
                            <em>M Studio</em>
                        </a>
                    </li>
                    <li>
                        <a href="https://builder.maum.ai/?lang=ko" target="_blank" title="AI Human Builder" rel="noreferrer">
                            <span className="ico"></span>
                            <em>AI Human Builder</em>
                        </a>
                    </li>
                    <li>
                        <a href="https://store.maum.ai" target="_blank" title="maum AI store" rel="noreferrer">
                            <span className="ico"></span>
                            <em>maum AI store</em>
                        </a>
                    </li>
                    <li>
                        <a href="https://fast-aicc.maum.ai/login?lang=ko" target="_blank" title="FAST 대화형 AI" rel="noreferrer">
                            <span className="ico"></span>
                            <em>FAST 대화형 AI</em>
                        </a>
                    </li>
                    <li>
                        <a href="https://minutes.maum.ai/" target="_blank" title="maum 회의록" rel="noreferrer">
                            <span className="ico"></span>
                            <em>maum 회의록</em>
                        </a>
                    </li>
                    <li>
                        <a href="https://maum.ai/main/krMainHome" target="_blank" title="Cloud API" rel="noreferrer">
                            <span className="ico"></span>
                            <em>Cloud API</em>
                        </a>
                    </li>
                    <li>
                        <a href="https://data.maum.ai/?lang=ko" target="_blank" title="maum DATA" rel="noreferrer">
                            <span className="ico"></span>
                            <em>maum DATA</em>
                        </a>
                    </li>
                    <li>
                        <a href="https://edge.maum.ai/" target="_blank" title="AI Edge" rel="noreferrer">
                            <span className="ico"></span>
                            <em>AI Edge</em>
                        </a>
                    </li>
                    <li>
                        <a href="https://ava.maum.ai/login" target="_blank" title="AVA" rel="noreferrer">
                            <span className="ico"></span>
                            <em>AVA</em>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default AppBox;