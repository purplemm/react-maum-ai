import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import SectionMenu from "./components/content/main/SectionMenu";
import Price from "./pages/Price";
import Login from "./pages/Login";
import Employees from "./pages/Employees";
import User from "./pages/User";
import Profile from "./components/content/user/Profile";
import ApiAccount from "./components/content/user/ApiAccount";
import PaymentInfo from "./components/content/user/PaymentInfo";
import { useSelector, useDispatch } from "react-redux";
import { addClass } from "./store/store";
import $ from 'jquery';

function App() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

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
    <div id="wrap" className="App">
      {
          state.containerClass === "main"
          ? <SectionMenu />
          : null
        }
      <BrowserRouter>
        <Header />
          <Routes>
              <Route path="/" element={ <Main /> } />
              <Route path="/price" element={ <Price /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/employees" element={ <Employees /> } />
              <Route path="/user" element={ <User /> }>
                <Route path="profile" element={ <Profile /> } />
                <Route path="apiAccount" element={ <ApiAccount /> } />
                <Route path="paymentInfo" element={ <PaymentInfo /> } />
              </Route>
              <Route path="*" element={ <div>Not Found</div> } />
          </Routes>
        {
          state.containerClass === "main" || state.containerClass === "login"
          ? null
          : <Footer />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
