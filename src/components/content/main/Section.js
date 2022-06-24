import { Fragment } from "react";
import sectionInfo from "../../../data/main/sectionInfo";

function Section(){
    // const sectionInfo = sectionInfo.map(section => {
    //     return (

    //     )
    // });

    return (
        <Fragment>
            {
                sectionInfo.map(function(section, i){
                    return (
                        <div key={ i } id={ section.stnId } className="section" data-anchor={ section.anchor }>
                            <div className="content">
                                <div className="titArea">
                                    <p className="main_tit">{ section.mainTit }</p>
                                    <p className="sub_tit pc">artificial intelligence human</p>
                                    <p className="sub_tit mobile">AI human</p>
                                </div>
                                <div className="descArea">
                                    <p className="svc_name">인공인간의 시대</p>
                                    <p className="svc_desc mobile">당신을 위한 다양한 인공인간 서비스를 만나보세요.</p>
                                </div>
                            </div>
                            <div className="svcBox">
                                <ul className="svc_nav">
                                    <li><a href="https://human.maum.ai/event/kr" target="_blank" rel="noreferrer"><span>인공인간 제작 의뢰</span></a></li>
                                    <li><a href="https://store.maum.ai/" target="_blank" rel="noreferrer"><span>인공인간 영상 제작</span></a></li>
                                    <li><a href="https://maum.ai/home/estimate/krAhb2" target="_blank" rel="noreferrer"><span>인공인간 디바이스</span></a></li>
                                    <li><a href="https://fast-aicc.maum.ai/login?lang=ko" target="_blank" rel="noreferrer"><span>인공인간 챗봇 학습 플랫폼</span></a></li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
            
        </Fragment>
    )
}

export default Section;