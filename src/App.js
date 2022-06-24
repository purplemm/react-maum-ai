import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Employees from "./pages/Employees";
import User from "./pages/User";
import Profile from "./components/content/user/Profile";
import ApiAccount from "./components/content/user/ApiAccount";
import PaymentInfo from "./components/content/user/PaymentInfo";

function App() {
  return (
    <div id="wrap" className="App">
      <BrowserRouter>
        <Header />
        <div id="container">
          <Routes>
              <Route path="/" element={ <Main /> } />
              <Route path="/price" element={ <Price /> } />
              <Route path="/employees" element={ <Employees /> } />
              <Route path="/user" element={ <User /> }>
                <Route path="profile" element={ <Profile /> } />
                <Route path="apiAccount" element={ <ApiAccount /> } />
                <Route path="paymentInfo" element={ <PaymentInfo /> } />
              </Route>
              <Route path="*" element={ <div>Not Found</div> } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
