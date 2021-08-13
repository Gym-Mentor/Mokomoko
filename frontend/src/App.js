import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/common.css";
import Test from "./components/main/Test";
import Login from "./components/user/Login";
import Join from "./components/user/Join";
import Error404 from "./components/errors/Error404";
import KakaoTest from "./components/user/KakaoTest";
import JoinConfirm from "./components/user/JoinConfirm";
import ForgotPassword from "./components/user/ForgotPassword";
import EnterCode from "./components/user/EnterCode";
import UpdatePW from "./components/user/UpdatePW";
import NaverCallBack from "./components/user/NaverCallBack";
import Main from "./components/main/Main";

/* 네비게이션 바 없는 컴포넌트 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Test} exact />
          <Route path="/account/login" component={Login} />
          <Route path="/account/join" component={Join} />
          <Route path="/account/naverLogin" component={NaverCallBack} />
          <Route path="/account/kakaoLogin" component={KakaoTest} />
          <Route path="/account/joinConfirm" component={JoinConfirm} />
          <Route path="/account/forgot" component={ForgotPassword} />
          <Route path="/account/enterCode/:email" component={EnterCode} />
          <Route path="/account/updatepw/:email" component={UpdatePW} />
          <Route path="/main" component={Main} />
          <Route component={Error404} />
        </Switch>
        {/* <Route path="/" component={Test} exact="exact"/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
