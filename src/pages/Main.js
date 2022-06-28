import { useEffect } from "react";
import { imgKor, imgEng, icoHeadsetLine, icoEmailLine, icoAdrsLine } from "../assets/images/MainImg";
import $ from 'jquery';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import { useSelector, useDispatch } from "react-redux";
import { changeTitle, changeClass } from "../store/store";
import Footer from "../components/common/Footer";

function Main(){
    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeClass("main"));

        $(function(){
            // 각 수치 롤링 애니메이션
            function numberCounter(targetFigure, targetNum, targetText){
                this.count = 0; this.diff = 0;
                this.targetNum = targetNum;
                this.targetText = targetText;
                this.target_count = parseInt(targetNum);
                this.targetFigure = document.querySelector(targetFigure);
                this.timer = null;
                this.counter();
            };

            function sectionFigureAni(){
                numberCounter.prototype.counter = function(){
                    var self = this;

                    var typeNum = /[0-9]/;
                    var typeKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

                    this.diff = this.target_count - this.count;

                    if(this.diff > 0){
                        self.count += Math.ceil(this.diff / 5);
                    }

                    this.targetFigure.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

                    if((typeKor.test(this.targetText)) && (typeNum.test(this.targetText))){
                        if(this.count < this.target_count){
                            this.timer = setTimeout(function(){self.counter();}, 20);
                        }else{
                            clearTimeout(this.timer);
                            this.targetFigure.innerHTML =  this.targetText;
                        }
                    }else if((typeKor.test(this.targetText))){
                        if(this.count < this.target_count){
                            this.timer = setTimeout(function(){self.counter();}, 20);
                        }else{
                            clearTimeout(this.timer);
                            this.targetFigure.innerHTML =  this.targetText;
                        }
                    }
                    else if((typeNum.test(this.targetNum))){
                        if(this.count < this.target_count){
                            this.timer = setTimeout(function(){self.counter();}, 20);
                        }else{
                            clearTimeout(this.timer);
                        }
                    }
                };
            }
            sectionFigureAni();
            $("#container").fullpage({
                menu : '#stn_menu',
                anchors : ['stn_aiHaaS', 'stn_aiHuman', 'stn_aicc', 'stn_smartX', 'stn_minutes', 'stn_cloudAPI', 'stn_maumDATA', 'stn_contact', 'stn_footer'],
                navigation : false,
                keyboardScrolling : true,
                animateAnchor : true,
                scrollOverflowReset : true,
                recordHistory : false,
                responsiveWidth : 768,
                afterLoad : function(anchorLink, index) {
                    if(index === 1){
                    }else if(index === 2){
                    }else if(index === 3){
                        new numberCounter('.aicc_fgr01', 768000);
                        new numberCounter('.aicc_fgr02', 3600000);
                        new numberCounter('.aicc_fgr03', 10000, '1억');
                        new numberCounter('.aicc_fgr04', 1000, '1천만');
                        new numberCounter('.aicc_fgr05', 2300000);
                    }else if(index === 4){
                        new numberCounter('.smartX_fgr01', 5000, '수천개');
                        new numberCounter('.smartX_fgr02', 10000, '백만대');
                        new numberCounter('.smartX_fgr03', 20000, '2만여개');
                        new numberCounter('.smartX_fgr04', 2000);
                        new numberCounter('.smartX_fgr05', 5000, '수천개');
                        new numberCounter('.smartX_fgr06', 10000, '백만대');
                        new numberCounter('.smartX_fgr07', 20000, '2만여개');
                        new numberCounter('.smartX_fgr08', 2000);
                    }else if(index === 5){
                        new numberCounter('.minutes_fgr01', 400000);
                        new numberCounter('.minutes_fgr02', 276000);
                        new numberCounter('.minutes_fgr03', 29000);
                    }else if(index === 6){
                        new numberCounter('.cloudApi_fgr01', 10000);
                        new numberCounter('.cloudApi_fgr02', 100000, '수십만');
                        new numberCounter('.cloudApi_fgr03', 4500000);
                        new numberCounter('.cloudApi_fgr04', 3600000);
                        new numberCounter('.cloudApi_fgr05', 1000);
                        new numberCounter('.cloudApi_fgr06', 10000);
                        new numberCounter('.cloudApi_fgr07', 100000, '수십만');
                        new numberCounter('.cloudApi_fgr08', 4500000);
                        new numberCounter('.cloudApi_fgr09', 3600000);
                        new numberCounter('.cloudApi_fgr10', 1000);
                    }else if(index === 7){
                        new numberCounter('.maumData_fgr01', 4700000);
                        new numberCounter('.maumData_fgr02', 1787);
                        new numberCounter('.maumData_fgr03', 1356);
                    }
                }
            });
        });

        return () => {
            dispatch(changeTitle(""));
        }
    }, []);

    return (
        <div id="container" className={ state.containerClass }>
            {/* #aiHaaS */}
            <div id="aiHaaS" className="section" data-anchor="stn_aiHaaS">
                <div className="frame-box">
                    {/* <iframe id="maumHuman" src="https://human-cloud-hp.maum.ai/" allow="microphone *"></iframe> */}
                </div>
            </div>
            {/* //#aiHaaS */}

            {/* #aiHuman */}
            <div id="aiHuman" className="section" data-anchor="stn_aiHuman">
                <div className="content">
                    <div className="titArea">
                        <p className="main_tit">AI Human</p>
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
            {/* //#aiHuman */}

            {/* #AICC */}
            <div id="AICC" className="section" data-anchor="stn_aicc">
                <div className="content">
                    <div className="titArea">
                        <p className="main_tit">AICC</p>
                        <p className="sub_tit">AI Contact center</p>
                    </div>

                    <div className="descArea">
                        <p className="svc_name">인공지능 콜 센터</p>
                        <p className="svc_desc">운영 비용 부담을 덜고,<br className="pc" /> 고객상담 커버율을 높여주는 서비스</p>
                    </div>

                    <div className="figure_wrap swiper-container">
                        <ul className="figure_list swiper-wrapper">
                            <li className="swiper-slide">
                                <dl className="item">
                                    <dt>음성봇 성공 콜수</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure aicc_fgr01">768,000</strong>
                                        <span>콜</span>
                                    </dd>
                                </dl>
                                <dl className="item">
                                    <dt>은행 챗봇 거래 처리수</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure aicc_fgr02">3,600,000</strong>
                                        <span>건</span>
                                    </dd>
                                </dl>
                            </li>
                            <li className="swiper-slide">
                                <dl className="item">
                                    <dt>마케팅 콜 검사(TMQA) 계약수</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure aicc_fgr05">2,300,000</strong>
                                        <span>건</span>
                                    </dd>
                                </dl>
                            </li>
                            <li className="swiper-slide">
                                <dl className="item">
                                    <dt>고객의 소리(VOC) 분석 콜수</dt>
                                    <dd>
                                        <div>
                                            <img src={ imgKor } alt="Korean flag" />
                                            <span>연간</span>
                                            <strong className="figure aicc_fgr03">1억</strong>
                                            <span>콜</span>
                                        </div>
                                        <div>
                                            <img src={ imgEng } alt="American flag" />
                                            <span>연간</span>
                                            <strong className="figure aicc_fgr04">1천만</strong>
                                            <span>콜</span>
                                        </div>
                                    </dd>
                                </dl>
                            </li>
                        </ul>

                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>

                    <div className="btnBox">
                        <a href="https://fast-aicc.maum.ai/intro" target="_blank" title="새창으로 열기" className="btn_link" rel="noreferrer">바로가기</a>
                    </div>
                </div>
            </div>
            {/* //#AICC */}

            {/* #smartX */}
            <div id="smartX" className="section" data-anchor="stn_smartX">
                <div className="content">
                    <div className="titArea">
                        <p className="main_tit">smart x</p>
                        <p className="sub_tit">edge ai</p>
                    </div>

                    <div className="descArea">
                        <p className="svc_name">Smart Factory, City, Video, Edge AI</p>
                        <p className="svc_desc">인공지능 기반 영상 분석 기술이 융합된<br className="pc" /> Edge AI 서비스</p>
                    </div>

                    <div className="figure_wrap pc">
                        <ul className="figure_list">
                            <li>
                                <dl className="item">
                                    <dt>Smart Factory</dt>
                                    <dd>
                                        <span>센서</span>
                                        <strong className="figure smartX_fgr01">수천개</strong>
                                        <span>데이터 기반으로<br /> 예측 및 최적화</span>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="item">
                                    <dt>Smart City</dt>
                                    <dd>
                                        <span>하루</span>
                                        <strong className="figure smartX_fgr02">백만대</strong>
                                        <span>서울시 차량<br /> 번호판 인식 처리</span>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="item">
                                    <dt>Smart 영상분석</dt>
                                    <dd>
                                        <span>하루</span>
                                        <strong className="figure smartX_fgr03">2만여개</strong>
                                        <span>광고 분석<br /> 서비스 제공</span>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="item">
                                    <dt>Edge AI 이상행동</dt>
                                    <dd>
                                        <span>하루</span>
                                        <strong className="figure smartX_fgr04 smartX_fgr04">2,000</strong>
                                        <span>건 이상징후 탐지<br /> 실신/침입/배회 이상행동 판독</span>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>

                    <div className="figure_wrap mobile swiper-container">
                        <ul className="figure_list swiper-wrapper">
                            <li className="swiper-slide">
                                <dl className="item">
                                    <dt>Smart Factory</dt>
                                    <dd>
                                        <span>센서</span>
                                        <strong className="figure smartX_fgr05">수천개</strong>
                                        <span>데이터 기반으로<br /> 예측 및 최적화</span>
                                    </dd>
                                </dl>
                                <dl className="item">
                                    <dt>Smart City</dt>
                                    <dd>
                                        <span>하루</span>
                                        <strong className="figure smartX_fgr06">백만대</strong>
                                        <span>서울시 차량<br /> 번호판 인식 처리</span>
                                    </dd>
                                </dl>
                            </li>
                            <li className="swiper-slide">
                                <dl className="item">
                                    <dt>Smart 영상분석</dt>
                                    <dd>
                                        <span>하루</span>
                                        <strong className="figure smartX_fgr07">2만여개</strong>
                                        <span>광고 분석<br className="mobile" /> 서비스 제공</span>
                                    </dd>
                                </dl>
                                <dl className="item">
                                    <dt>Edge AI 이상행동</dt>
                                    <dd>
                                        <span>하루</span>
                                        <strong className="figure smartX_fgr08">2,000</strong>
                                        <span>건 이상징후 탐지<br /> 실신/침입/배회</span>
                                    </dd>
                                </dl>
                            </li>
                        </ul>

                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>

                    <div className="btnBox">
                        <a href="https://edge.maum.ai/" target="_blank" title="새창으로 열기" className="btn_link" rel="noreferrer">바로가기</a>
                    </div>
                </div>
            </div>
            {/* //#smartX */}

            {/* #minutes */}
            <div id="minutes" className="section" data-anchor="stn_minutes">
                <div className="content">
                    <div className="titArea">
                        <p className="main_tit">maum회의록</p>
                        <p className="sub_tit">maum minutes</p>
                    </div>

                    <div className="descArea">
                        <p className="svc_name">인공지능 회의록</p>
                        <p className="svc_desc">실시간으로 회의 내용을 정리해 주는<br className="pc" /> AI 회의록 서비스</p>
                    </div>

                    <div className="figure_wrap swiper-container">
                        <ul className="figure_list swiper-wrapper">
                            <li className="swiper-slide">
                                <dl className="item ">
                                    <dt>클라우드형 회의록</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure minutes_fgr01">400,000</strong>
                                        <span>분 사용</span>
                                    </dd>
                                </dl>
                                <dl className="item">
                                    <dt>구축형 회의록 시스템</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure minutes_fgr02">276,000</strong>
                                        <span>시간 사용</span>
                                    </dd>
                                </dl>
                            </li>

                            <li className="swiper-slide">
                                <dl className="item">
                                    <dt>온디바이스형 회의록</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure minutes_fgr03">29,000</strong>
                                        <span>시간 사용</span>
                                    </dd>
                                </dl>
                            </li>
                        </ul>

                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    <div className="btnBox">
                        <a href="https://minutes.maum.ai/" target="_blank" title="새창으로 열기" className="btn_link" rel="noreferrer">바로가기</a>
                    </div>
                </div>
            </div>
            {/* //#minutes */}

            {/* #cloudAPI */}
            <div id="cloudAPI" className="section" data-anchor="stn_cloudAPI">
                <div className="content">
                    <div className="titArea">
                        <p className="main_tit">Cloud api</p>
                        <p className="sub_tit">Cloud api</p>
                    </div>

                    <div className="descArea">
                        <p className="svc_name">인공지능 API 서비스</p>
                        <p className="svc_desc">음성, 시각, 언어 등 40여 개의 인공지능 엔진을 제공하는<br className="pc" /> 구독형 API</p>
                    </div>

                    <div className="figure_wrap pc">
                        <ul className="figure_list">
                            <li>
                                <dl className="item">
                                    <dt>대교 소리동화 컨텐츠</dt>
                                    <dd>
                                        <strong className="figure cloudApi_fgr01">10,000</strong>
                                        <span>회 제공</span>
                                    </dd>
                                </dl>
                                <dl className="item">
                                    <dt>TTS 사용량</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure cloudApi_fgr02">수십만</strong>
                                        <span>건</span>
                                        <span>EJN, 아키핀,<br /> 투스라이프,<br /> 알에프탭, KBS</span>
                                    </dd>
                                </dl>
                                <dl className="item">
                                    <dt>영어발음/회화 평가 제공량</dt>
                                    <dd>
                                        <strong className="figure cloudApi_fgr03">4,500,000</strong>
                                        <span>회</span>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="item">
                                    <dt>챗봇 대화량</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure cloudApi_fgr04">3,600,000</strong>
                                        <span>건</span>
                                    </dd>
                                </dl>
                                <dl className="item">
                                    <dt>AI 엔진 API 구독자 수</dt>
                                    <dd>
                                        <strong className="figure cloudApi_fgr05">1,000</strong>
                                        <span>명</span>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>

                    <div className="figure_wrap mobile swiper-container">
                        <ul className="figure_list swiper-wrapper">
                            <li className="swiper-slide">
                                <dl className="item">
                                    <dt>대교 소리동화 컨텐츠</dt>
                                    <dd>
                                        <strong className="figure cloudApi_fgr06">10,000</strong>
                                        <span>회 제공</span>
                                    </dd>
                                </dl>
                                <dl className="item">
                                    <dt>TTS 사용량</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure cloudApi_fgr07">수십만</strong>
                                        <span>건</span>
                                        <span>EJN, 아키핀,<br /> 투스라이프,<br /> 알에프탭, KBS</span>
                                    </dd>
                                </dl>
                            </li>
                            <li className="swiper-slide">
                                <dl className="item">
                                    <dt>영어발음/회화 평가 제공량</dt>
                                    <dd>
                                        <strong className="figure cloudApi_fgr08">4,500,000</strong>
                                        <span>회</span>
                                    </dd>
                                </dl>
                                <dl className="item">
                                    <dt>챗봇 대화량</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure cloudApi_fgr09">3,600,000</strong>
                                        <span>건</span>
                                    </dd>
                                </dl>
                            </li>
                            <li className="swiper-slide">
                                <dl className="item">
                                    <dt>AI 엔진 API 구독자 수</dt>
                                    <dd>
                                        <strong className="figure cloudApi_fgr10">1,000</strong>
                                        <span>명</span>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                        
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>

                    <div className="btnBox">
                        <a href="https://maum.ai/home/cloudApiServiceMain" target="_blank" title="새창으로 열기" className="btn_link" rel="noreferrer">바로가기</a>
                    </div>
                </div>
            </div>
            {/* //#cloudAPI */}

            {/* #maumDATA */}
            <div id="maumDATA" className="section" data-anchor="stn_maumDATA">
                <div className="content">
                    <div className="titArea">
                        <p className="main_tit">maum data</p>
                        <p className="sub_tit">AI data service</p>
                    </div>

                    <div className="descArea">
                        <p className="svc_name">인공지능 데이터 서비스</p>
                        <p className="svc_desc">AI 데이터 가공 서비스와 맞춤형<br className="pc" /> 데이터 가공 툴 개발 서비스</p>
                    </div>

                    <div className="figure_wrap swiper-container">
                        <ul className="figure_list swiper-wrapper">
                            <li className="swiper-slide">
                                <dl className="item">
                                    <dt>AI 데이터 라벨링 작업건수</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure maumData_fgr01">4,700,000</strong>
                                        <span>건</span>
                                    </dd>
                                </dl>
                                <dl className="item">
                                    <dt>AI 데이터 라벨링 프로젝트 건수</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure maumData_fgr02">1,787</strong>
                                        <span>건</span>
                                    </dd>
                                </dl>
                            </li>
                            <li className="swiper-slide swiper-slide-next">
                                <dl className="item">
                                    <dt>AI 데이터 라벨링 클라우드 작업자 수</dt>
                                    <dd>
                                        <span>연간</span>
                                        <strong className="figure maumData_fgr03">1,356</strong>
                                        <span>명</span>
                                    </dd>
                                </dl>
                            </li>
                        </ul>

                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>

                    <div className="btnBox">
                        <a href="https://data.maum.ai/" target="_blank" title="새창으로 열기" className="btn_link" rel="noreferrer">바로가기</a>
                    </div>
                </div>
            </div>
            {/* //#maumDATA */}

            {/* #contact */}
            <div id="contact" className="section" data-anchor="stn_contact">
                <div className="content">
                    <div className="titArea">
                        <p className="main_tit">contact us</p>
                        <p className="sub_tit">Get in touch</p>
                    </div>

                    <div className="descArea">
                        <p className="svc_name">문의하기</p>
                        <p className="svc_desc">서비스 의견 및 인공지능 도입에 대해<br className="pc" /> 궁금한 내용을 문의 주시면 자세히 안내해 드리겠습니다.</p>
                    </div>

                    <div className="inquiry_box">
                        <div className="inner">
                            <div className="dual">
                                <div className="my_info">
                                    <label htmlFor="name">이름</label>
                                    <input type="text" id="name" placeholder="이름 (필수)" autoComplete="off" />
                                </div>
                                <div className="my_info">
                                    <label htmlFor="company">회사명</label>
                                    <input type="text" id="company" placeholder="마인즈랩 (필수)" autoComplete="off" />
                                </div>
                            </div>
                            <div className="dual">
                                <div className="my_info">
                                    <label htmlFor="phone">연락처</label>
                                    <input type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" id="phone" placeholder="01012345678 (필수)" autoComplete="off" />
                                </div>
                                <div className="my_info email_info">
                                    <label htmlFor="mail">이메일</label>
                                    <input type="email" id="mail" placeholder="hello@mindslab.ai (필수)" autoComplete="off" />
                                </div>
                            </div>
                            <div className="my_info my_txt">
                                <label htmlFor="txt">문의</label>
                                <textarea id="txt" placeholder="문의 내용을 입력해 주세요. (필수)"></textarea>
                            </div>
                            <div className="submit_agree">
                                <div className="input_box">
                                    <input type="checkbox" id="personal_info" />
                                    <label htmlFor="personal_info">(필수)개인정보 수집동의</label>
                                </div>
                                <div className="agree_contents">
                                    <p>수집하는 개인정보 항목: 이름, 회사명, 연락처, 이메일 주소<br /> 작성해주시는 개인 정보는 문의 접수 및 고객 불만 해결을 위해 1년간 보관됩니다. 본 동의를 거부할 수 있으나, 미동의 시 문의 접수가 불가능합니다.</p>
                                </div>
                            </div>

                            <div className="btn_box">
                                <button className="btn_send btn_primary large">문의하기</button>
                            </div>
                        </div>

                        <ul className="contact_info_list">
                            <li>
                                <a href="tel:+8216613222">
                                    <img src={ icoHeadsetLine } alt="headset icon" />
                                    <span>1661-3222</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@mindslab.ai">
                                    <img src={ icoEmailLine } alt="email icon" />
                                    <span>hello@mindslab.ai</span>
                                </a>
                            </li>
                            <li>
                                <img src={ icoAdrsLine } alt="address icon" />
                                <span>경기도 성남시 분당구 대왕판교로 644번길 49 다산타워 5층</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* //#contact */}

            {/* #footer */}
            {
                state.containerClass === "main"
                ? <Footer />
                : null
            }
            {/* //#footer */}
        </div>
    )
}

export default Main;