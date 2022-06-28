import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AsideNav from "./components/common/AsideNav";
import LayerBg from "./components/common/LayerBg";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import SectionMenu from "./components/content/main/SectionMenu";
import Price from "./pages/Price";
import Login from "./pages/Login";
import Join from "./pages/Join";
import AgreeTerms from "./components/content/join/AgreeTerms";
import SignUp from "./components/content/join/SignUp";
import Employees from "./pages/Employees";
import User from "./pages/User";
import Profile from "./components/content/user/Profile";
import ApiAccount from "./components/content/user/ApiAccount";
import PaymentInfo from "./components/content/user/PaymentInfo";
import { useSelector, useDispatch } from "react-redux";
import { asideOpen, commAsideNav, addClass } from "./store/store";
import $ from 'jquery';

function App() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    return () => {
      const maumBody = document.getElementsByTagName("body")[0];
      const hamBtn = document.querySelector(".btn_ham");
      maumBody.style.overflow = "visible";
      hamBtn.classList.remove("active");
      dispatch(asideOpen(""));
    }
  }, [asideOpen]);

  useEffect(() => {
    if(state.containerClass !== "main"){
      dispatch(addClass("transform"));

        if($('html').hasClass('fp-enabled')){
          $.fn.fullpage.destroy('all');
      };
    }

    return () => {
      dispatch(addClass(""));
    }
  }, [state.containerClass]);

  return (
    <div id="wrap" className={`App ${ state.commAsideNav }`}>
      <BrowserRouter>
        {
          state.commAsideNav
          ? <LayerBg />
          : null
        }
        {
          state.containerClass === "main"
          ? <SectionMenu />
          : null
        }
        <AsideNav />
        <Header />
          <Routes>
              <Route path="/" element={ <Main /> } />
              <Route path="/price" element={ <Price /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/join" element={ <Join /> }>
                <Route path="agreeTerms" element={ <AgreeTerms /> } />
                <Route path="signUp" element={ <SignUp /> } />
              </Route>
              <Route path="/employees" element={ <Employees /> } />
              <Route path="/user" element={ <User /> }>
                <Route path="profile" element={ <Profile /> } />
                <Route path="apiAccount" element={ <ApiAccount /> } />
                <Route path="paymentInfo" element={ <PaymentInfo /> } />
              </Route>
              <Route path="*" element={ <div>Not Found</div> } />
          </Routes>
        {
          state.containerClass === "main" || state.containerClass === "login" || state.containerClass === "join"
          ? null
          : <Footer />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
