import { icoPhone20, icoEmail20, icoFacebook40, icoYoutube40, icoBlog40 } from "../../assets/images/CommImg";

function Footer(){
    return (
        <div id="footerLanding" className="section" data-anchor="stn_footer">
            <div className="ft_top">
                <div className="footer_inner">
                    <div className="col links fl">
                        <a href="https://mindslab.ai:8080/kr/company" target="_blank" title="회사소개" rel="noreferrer">회사소개</a>
                        <a href="https://maum.ai/home/krTermsMain" target="_blank" title="이용약관" rel="noreferrer">이용약관</a>
                        <a href="https://maum.ai/home/krTermsMain#conditions" target="_blank" title="개인정보처리방침" rel="noreferrer">개인정보처리방침</a>
                    </div>

                    <div className="col contact">
                        <a href="tel:16613222">
                            <img src={ icoPhone20 } alt="전화 걸기" />
                            <span>1661-3222</span>
                        </a>
                        <br />
                        <a href="mailto:hello@mindslab.ai">
                            <img src={ icoEmail20 } alt="메일 보내기" />
                            <span>hello@mindslab.ai</span>
                        </a>
                    </div>

                    <div className="col sns fr">
                        <a href="https://www.facebook.com/mindsinsight" target="_blank" title="페이스북 바로가기" rel="noreferrer">
                            <img src={ icoFacebook40 } alt="페이스북 아이콘" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC8ocQaJFp-adzGtwcBuS3iQ?view_as=subscriber" target="_blank" title="유튜브 바로가기" rel="noreferrer">
                            <img src={ icoYoutube40 } alt="유튜브 아이콘" />
                        </a>
                        <a href="https://post.naver.com/my.nhn?memberNo=45704243" target="_blank" title="네이버 블로그 바로가기" rel="noreferrer">
                            <img src={ icoBlog40 } alt="네이버블로그 아이콘" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="ft_btm">
                <div className="footer_inner">
                    <div className="col company fl">
                        <address>
                            <span>대표 유태준 |</span>
                            <span>사업자 등록번호 314-86-55446 |</span>
                            <span>통신판매업신고번호 2019-대전유성-0094</span><br />
                            <span>(주) 마인즈랩 경기도 성남시 분당구 대왕판교로644번길 49 다산타워 5층</span><br />
                            <span>상담시간 : 09:00 ~ 18:00 (점심시간 12:30 ~ 13:30)</span>
                        </address>
                        <p className="copyright">Copyright © 2022 MINDsLab. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;