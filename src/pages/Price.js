import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeClass } from "../store/store";
import { imgFreeTrial, icoWonGrn, icoWonB, icoQuestion, icoChkGrn, icoNullG } from "../assets/images/PriceImg";
import $ from "jquery";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.min.css";
SwiperCore.use([Pagination]);

function Price(){
    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeClass("price"));

        $(function(){
            // 상품 상세 비교 hover 효과
            $('.cont_dropdown > div > div').on('mouseenter', function(){
                let thisContIndex = $(this).parents('.cont').index();
                let thisIndex = $(this).parent('.drop_tit').index();

                $('.rate_list').find('.cont').eq(thisContIndex - 1).find('.drop_tit').eq(thisIndex).find('div').addClass('hover');
                $('.rate_list').find('.cont').eq(thisContIndex + 1).find('.drop_tit').eq(thisIndex).find('div').addClass('hover');
            });

            $('.cont_dropdown > div > div').on('mouseleave', function(){
                $('.cont_dropdown > div > div').removeClass('hover');
            });
        });
    }, []);

    return (
        <div id="container" className={ state.containerClass }>
            {/* .contents */}
            <div className="contents">
                {/* .price_cont */}
                <div className="price_cont">
                    {/* .price */}
                    <div className="stn price">
                        <div className="cont">
                            <div className="topBox">
                                <p className="stn_tit">maum.ai 요금 안내</p>
                                <p className="stn_desc">당신의 마음까지 생각한 maum.ai 상품을 만나보세요.<br /> 
                                자주 묻는 질문 <a href="#none" className="btn_go_faq">바로가기</a></p>
                            </div>

                            <div className="btmBox">
                                <Swiper className="maum_price_wrap swiper-container" tag="div" wrapperTag="ul"
                                    centeredSlides = {true}
                                    slidesPerGroup = {1}
                                    slidesPerView = {1}
                                    spaceBetween = {20}
                                    allowTouchMove = {true}
                                    observer = {true}
                                    observeParents = {true}
                                    pagination = {{
                                        el: '.swiper-pagination',
                                        clickable: true,
                                    }}
                                    breakpoints = {{
                                        768: {
                                            centeredSlides: false,
                                            slidesPerGroup: 1,
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                            allowTouchMove: false,
                                        }
                                    }}
                                >
                                    <div className="swiper-pagination"></div>
                                    <SwiperSlide className="business swiper-slide" tag="li">
                                        <dl>
                                            <dt>
                                                <span className="ft_point">개인 <i className="ico-dot"></i> 기업용</span>
                                            </dt>
                                            <dd>
                                                <div className="contBox">
                                                    <p className="price">
                                                        <img src={ icoWonGrn } alt="won icon" />
                                                        <strong className="ft_point">99,000<span>원</span></strong>/월
                                                        <img src={ imgFreeTrial } alt="1개월 무료" />
                                                    </p>
                                                    <p className="desc">인공지능 API 서비스부터 인공지능 콜센터 서비스까지<br /> <span className="ft_point">다양한 인공지능 서비스가 필요한 분들을 위한 상품!</span></p>
                                                    <a href="https://sso.maum.ai/maum/oauthLoginMain?response_type=code&client_id=maum.ai&redirect_uri=https%3A%2F%2Fmaum.ai%2F" className="btn_link ft_point">시작하기</a>
                                                </div>
                                                <div className="contBox">
                                                    <p className="tit">제공 서비스</p>
                                                    <ul>
                                                        <li>
                                                            인공지능 API 서비스(Cloud API)
                                                            <span className="detail_desc">
                                                                <img src={ icoQuestion } alt="question mark" />
                                                                <span className="descBox">인공지능 API 서비스란? 음성, 시각, 언어 등 40여 개의 인공지능 엔진을 제공하는 서비스입니다.</span>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            인공지능 회의록 (maum 클라우드 회의록)
                                                            <span className="detail_desc">
                                                                <img src={ icoQuestion } alt="question mark" />
                                                                <span className="descBox">녹음한 음성 파일을 업로드하면 1초 만에 회의록을 작성해 주는 서비스입니다. 계정 - 단일 계정, 사용량 - 100시간 / 일</span>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            인공지능 콜센터 (AICC)
                                                            <span className="detail_desc">
                                                                <img src={ icoQuestion } alt="question mark" />
                                                                <span className="descBox">뛰어난 음성 인식과 챗봇 기술을 기반으로 한 고객 질의 대응 및 간단한 업무를 수행하는 CS 서비스입니다.</span>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </dd>
                                        </dl>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide className="enterprise swiper-slide" tag="li">
                                        <dl>
                                            <dt>
                                                <span className="ft_point">기업 맞춤용</span>
                                            </dt>
                                            <dd>
                                                <div className="contBox">
                                                    <p className="price">
                                                        <img src={ icoWonB } alt="won icon" />
                                                        <strong className="ft_point">개별 협의</strong>
                                                    </p>
                                                    <p className="desc">전문 컨설턴트의 지원과 업무 확장에 필요한 사이트 구축까지<br /> 인공지능 사업을 하고 싶은 <span className="ft_point">기업에 특화된 상품!</span></p>
                                                    <a href="https://maum.ai/#stn_contact" className="btn_link ft_point">문의하기</a>
                                                </div>
                                                <div className="contBox">
                                                    <p className="tit">제공 서비스</p>
                                                    <ul>
                                                        <li>
                                                            전문 AI 컨설턴트 밀착 상담 및 지원
                                                            <p>전문 AI 컨설턴트가 상담을 통해 기업의 니즈를 파악하여 기업에 맞는 기능들을 제공합니다.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </dd>
                                        </dl>
                                    </SwiperSlide>
                                </Swiper>


                                {/* <div className="maum_price_wrap swiper-container">
                                    <div className="swiper-pagination"></div>
                                    <ul className="price_list swiper-wrapper">
                                        <li className="business swiper-slide">
                                            <dl>
                                                <dt>
                                                    <span className="ft_point">개인 <i className="ico-dot"></i> 기업용</span>
                                                </dt>
                                                <dd>
                                                    <div className="contBox">
                                                        <p className="price">
                                                            <img src={ icoWonGrn } alt="won icon" />
                                                            <strong className="ft_point">99,000<span>원</span></strong>/월
                                                            <img src={ imgFreeTrial } alt="1개월 무료" />
                                                        </p>
                                                        <p className="desc">인공지능 API 서비스부터 인공지능 콜센터 서비스까지<br /> <span className="ft_point">다양한 인공지능 서비스가 필요한 분들을 위한 상품!</span></p>
                                                        <a href="https://sso.maum.ai/maum/oauthLoginMain?response_type=code&client_id=maum.ai&redirect_uri=https%3A%2F%2Fmaum.ai%2F" className="btn_link ft_point">시작하기</a>
                                                    </div>
                                                    <div className="contBox">
                                                        <p className="tit">제공 서비스</p>
                                                        <ul>
                                                            <li>
                                                                인공지능 API 서비스(Cloud API)
                                                                <span className="detail_desc">
                                                                    <img src={ icoQuestion } alt="question mark" />
                                                                    <span className="descBox">인공지능 API 서비스란? 음성, 시각, 언어 등 40여 개의 인공지능 엔진을 제공하는 서비스입니다.</span>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                인공지능 회의록 (maum 클라우드 회의록)
                                                                <span className="detail_desc">
                                                                    <img src={ icoQuestion } alt="question mark" />
                                                                    <span className="descBox">녹음한 음성 파일을 업로드하면 1초 만에 회의록을 작성해 주는 서비스입니다. 계정 - 단일 계정, 사용량 - 100시간 / 일</span>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                인공지능 콜센터 (AICC)
                                                                <span className="detail_desc">
                                                                    <img src={ icoQuestion } alt="question mark" />
                                                                    <span className="descBox">뛰어난 음성 인식과 챗봇 기술을 기반으로 한 고객 질의 대응 및 간단한 업무를 수행하는 CS 서비스입니다.</span>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </li>
                                        
                                        <li className="enterprise swiper-slide">
                                            <dl>
                                                <dt>
                                                    <span className="ft_point">기업 맞춤용</span>
                                                </dt>
                                                <dd>
                                                    <div className="contBox">
                                                        <p className="price">
                                                            <img src={ icoWonB } alt="won icon" />
                                                            <strong className="ft_point">개별 협의</strong>
                                                        </p>
                                                        <p className="desc">전문 컨설턴트의 지원과 업무 확장에 필요한 사이트 구축까지<br /> 인공지능 사업을 하고 싶은 <span className="ft_point">기업에 특화된 상품!</span></p>
                                                        <a href="https://maum.ai/#stn_contact" className="btn_link ft_point">문의하기</a>
                                                    </div>
                                                    <div className="contBox">
                                                        <p className="tit">제공 서비스</p>
                                                        <ul>
                                                            <li>
                                                                전문 AI 컨설턴트 밀착 상담 및 지원
                                                                <p>전문 AI 컨설턴트가 상담을 통해 기업의 니즈를 파악하여 기업에 맞는 기능들을 제공합니다.</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </li>
                                    </ul>
                                </div> */}

                                <ul className="desc_list">
                                    <li>개인 <i className="ico-dot"></i> 기업용 상품에서 인공지능 API 서비스의 월 사용량이 정해져 있습니다. 가입한 이후 첫 달부터 적용됩니다.</li>
                                    <li><a id="api_month">API 월 사용량</a>을 꼭 확인해 주세요.</li>
                                    <li>개인 <i className="ico-dot"></i> 기업용 상품의 요금은 1인 기준입니다.</li>
                                </ul>

                                <div className="minutes_price_wrap">
                                    <p className="tit">회의록 B2B Enterprise 요금 안내</p>
                                    <ul className="price_list">
                                        <li>
                                            <p className="sub_tit">On-Device 회의록</p>
                                            <p className="sub_desc"><span>4,950만원</span>(vat 포함) / <span>4,500만원</span>(vat 미포함) / <span>10 채널</span>(노트북, 마이크 포함)<br /> 회의록 장비가 제공되며 다수가 참석해도 실시간 화자 분리가 되는 회의록</p>
                                        </li>
                                        <li>
                                            <p className="sub_tit">On-site 회의록</p>
                                            <p className="sub_desc"><span>협의</span> (고객용 별도 모델 생성, 인식률 90% 보장)<br /> 회의록 언어 및 환경별 엔진 모델을 활용하여 맞춤형제작 가능한 구축형 회의록</p>
                                        </li>
                                    </ul>
                                    <a href="https://minutes.maum.ai/#contact" className="btn_link">요금 안내 문의하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //.price */}

                    {/* .compare */}
                    <div className="stn compare">
                        <div className="cont">
                            <p className="stn_tit">상품 상세 비교</p>
                            <p className="stn_desc">각 요금제의 기능을 비교해 보세요. <br /> 자주 묻는 질문 <a href="#none" className="btn_go_faq">바로가기</a></p>

                            <div className="compareBox">
                                <div className="rate_tit_mobile">
                                    <button type="button" className="active">개인 • 기업용</button>
                                    <button type="button">기업 맞춤용</button>
                                </div>

                                <ul className="rate_list">
                                    <li className="active">
                                        <div className="rate_tit">
                                            <div className="text_hide">빈칸</div>
                                            <div>개인 • 기업용</div>
                                        </div>
                                        <div className="cont">
                                            <div className="cont_tit active">
                                                <div>업무 확장을 위한 기능</div>
                                                <div className="text_hide">빈칸</div>
                                            </div>
                                            <div className="cont_dropdown">
                                                <div className="drop_tit">
                                                    <div>
                                                        30+AI 알고리즘 활용법 안내
                                                        <span className="detail_desc">
                                                        <img src={ icoQuestion } alt="question mark" />
                                                        <span className="descBox">각 인공지능 엔진의 활용법을 제공하여 다양하게 활용하실 수 있습니다.</span>
                                                    </span>
                                                        <small>(음성, 시각, 언어, 분석, 대화 분야)</small>
                                                    </div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>
                                                        REST API Id, Key 및 문서 제공
                                                        <span className="detail_desc">
                                                        <img src={ icoQuestion } alt="question mark" />
                                                        <span className="descBox">마인즈랩에서 선지급된 Id와 Key를 발급받아 다양한 환경의 웹 서버에서 활용이 가능한 가이드를 제공합니다.</span>
                                                    </span>
                                                    </div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>결과 파일 내려받기</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>AI 보이스 폰트 제작</div>
                                                    <div><img src={ icoNullG } alt="불가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>학습 데이터 판매 지원</div>
                                                    <div><img src={ icoNullG } alt="불가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>맞춤형 모델 학습 지원</div>
                                                    <div><img src={ icoNullG } alt="불가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>B2B형 개별 사이트 구축</div>
                                                    <div><img src={ icoNullG } alt="불가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>다수 계정 연결</div>
                                                    <div><img src={ icoNullG } alt="불가능" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cont">
                                            <div className="cont_tit">
                                                <div>관리를 위한 기능</div>
                                                <div className="text_hide">빈칸</div>
                                            </div>
                                            <div className="cont_dropdown">
                                                <div className="drop_tit">
                                                    <div>월별 사용량 측정</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>파일 보관 서비스</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>기술 지원</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rate_tit">
                                            <div className="text_hide">빈칸</div>
                                            <div>기업 맞춤용</div>
                                        </div>
                                        <div className="cont">
                                            <div className="cont_tit active">
                                                <div>업무 확장을 위한 기능</div>
                                                <div className="text_hide">빈칸</div>
                                            </div>
                                            <div className="cont_dropdown">
                                                <div className="drop_tit">
                                                    <div>
                                                        30+AI 알고리즘 활용법 안내
                                                        <span className="detail_desc">
                                                        <img src={ icoQuestion } alt="question mark" />
                                                        <span className="descBox">각 인공지능 엔진의 활용법을 제공하여 다양하게 활용하실 수 있습니다.</span>
                                                    </span>
                                                        <small>(음성, 시각, 언어, 분석, 대화 분야)</small>
                                                    </div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>
                                                        REST API Id, Key 및 문서 제공
                                                        <span className="detail_desc">
                                                        <img src={ icoQuestion } alt="question mark" />
                                                        <span className="descBox">마인즈랩에서 선지급된 Id와 Key를 발급받아 다양한 환경의 웹 서버에서 활용이 가능한 가이드를 제공합니다.</span>
                                                    </span>
                                                    </div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>결과 파일 내려받기</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>AI 보이스 폰트 제작</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>학습 데이터 판매 지원</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>맞춤형 모델 학습 지원</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>B2B형 개별 사이트 구축</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>다수 계정 연결</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cont">
                                            <div className="cont_tit">
                                                <div>관리를 위한 기능</div>
                                                <div className="text_hide">빈칸</div>
                                            </div>
                                            <div className="cont_dropdown">
                                                <div className="drop_tit">
                                                    <div>월별 사용량 측정</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>파일 보관 서비스</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                                <div className="drop_tit">
                                                    <div>기술 지원</div>
                                                    <div><img src={ icoChkGrn } alt="가능" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* //.compare */}

                    {/* .faq */}
                    <div className="stn faq">
                        <div className="cont">
                            <p className="stn_tit">자주 묻는 질문</p>

                            <div className="faqBox">
                                <div className="faq_type">
                                    <a href="#none" className="active">구독형 서비스</a>
                                    <a href="#none">회의록 서비스</a>
                                </div>

                                <div className="faq_cont">
                                    <ul className="faq_lst active">
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. 월 99,000원으로 어떤 서비스를 사용할 수 있나요?</dt>
                                                <dd className="faq_cont">A. 인공지능 API 서비스, 인공지능 회의록, 인공지능 콜센터를 사용하실 수 있습니다.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. 한 달 무료 이용 후 자동으로 해지되나요?</dt>
                                                <dd className="faq_cont">A. 결제 정보를 등록하지 않을 경우 자동으로 한 달 뒤에 해지됩니다.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. 해지된 후 다시 구독하고 싶으면 어떻게 해야 하나요?</dt>
                                                <dd className="faq_cont">A. maum.ai 로그인 &gt; 결제정보에서 카드 등록을 하시면 됩니다.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. 월 결제가 아닌 연 단위 결제가 가능한가요?</dt>
                                                <dd className="faq_cont">A. 연 단위 결제로 가능합니다. 다만, 카드 결제가 아닌 연 구독료 금액으로 입금해 주시면 연 단위로 사용할 수 있도록 해드립니다.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. 월 99,000원에 에이바(AVA) 서비스도 포함인가요?</dt>
                                                <dd className="faq_cont">A. 에이바(AVA) 서비스는 포함되지 않습니다.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. 다음 결제일 전에 해지해도 결제일까지는 사용할 수 있나요?</dt>
                                                <dd className="faq_cont">A. 이미 유료 결제가 된 경우 다음 결제일 전날까지 사용 가능합니다.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. 법인 카드로도 등록이 가능한가요?</dt>
                                                <dd className="faq_cont">A. 결제정보에서 카드 등록 시 법인 카드 정보를 입력하시면 됩니다.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. 결제 영수증 발행이 가능한가요?</dt>
                                                <dd className="faq_cont">A. maum.ai 로그인 &gt; 결제정보에서 결제가 된 건에 대해 영수증 버튼을 클릭하면 영수증 확인이 가능합니다.</dd>
                                            </dl>
                                        </li>
                                    </ul>
                                    <ul className="faq_lst">
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. 월 99,000원으로 Cloud 회의록을 이용할 경우 한 달에 어느 정도 사용할 수 있다고 보면 될까요? 사용을 못 하면 시간이 이월되나요?</dt>
                                                <dd className="faq_cont">A. 월 100시간이며, 전달 사용하지 못한 시간이 이월되지는 않습니다.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. 월 99,000원으로 회의록을 사용하게 되면 화자 분리도 가능한가요?</dt>
                                                <dd className="faq_cont">A. 월 99,000원으로 이용하실 경우 Cloud 형태 회의록으로, 실시간 녹음, 음성파일 및 동영상 파일 업로드가 가능합니다. 화자 분리 기능은 On-Device 회의록에 적용 가능한 기능입니다.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. On-Device 회의록 비용 구매 부담이 있는데 할부도 가능한가요?</dt>
                                                <dd className="faq_cont">A. 국민카드 올리스로 나누어 결제하실 수 있으며, 자세한 사항은 CS로 문의해 주세요.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. On-Device 회의록이 10개의 채널인데, 소규모 회의라 5명 이내로 회의할 경우 디바이스를 몇 개 빼면 본래 가격보다 더 할인된 가격으로 구매할 수 있나요?</dt>
                                                <dd className="faq_cont">A. 10개의 채널로 제품형으로 판매하고 있으나, 자세한 사항은 대표 메일로 문의하시면 연락드리겠습니다.</dd>
                                            </dl>
                                        </li>
                                        <li className="lst_item">
                                            <dl>
                                                <dt className="faq_tit">Q. On-Site는 가격이 얼마인가요? On-Device와 차이점이 있다면 어떤 건가요?</dt>
                                                <dd className="faq_cont">A. On-Device 이동형 회의록과 같은 디바이스로 사용을 하시게 됩니다. 10개의 채널 이상으로도 사용하실 수 있으며, 기업의 요구에 맞게 단어나 문장에 대해 음성인식이 더 잘 되도록 커스터마이징이 됩니다. 자세한 사항은 대표 메일로 문의하시면 연락드리겠습니다.</dd>
                                            </dl>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //.faq */}

                    {/* .banner */}
                    <div className="stn banner">
                        <div className="cont">
                            <p className="stn_tit">비즈니스 문의하기</p>
                            <p className="stn_desc">다른 궁금하신 점이 있으신가요?<br className="mobile" /> 무엇이든 물어보세요.</p>
                            <a href="https://maum.ai/#stn_contact" className="btn_link">문의하기</a>
                        </div>
                    </div>
                    {/* //.banner */}
                </div>
                {/* //.price_cont */}
            </div>
            {/* //.contents */}
        </div>
    )
}

export default Price;