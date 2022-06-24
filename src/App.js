import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Employees from "./pages/Employees";
import User from "./pages/User";
import Profile from "./components/content/Profile";
import ApiAccount from "./components/content/Profile";
import PaymentInfo from "./components/content/Profile";

function App() {
  return (
    <div id="wrap" className="App">
      <BrowserRouter>
        <Header />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
