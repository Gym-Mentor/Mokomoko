import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/common.css";
import Login from "./pages/user/Login";
import Forgot from "./components/user/Forgot";
import Join from "./pages/user/Join";
import Error404 from "./pages/errors/Error404";
import NaverTest from "./pages/user/NaverTest";
import Test from "./pages/user/Test";
import JoinConfirm from "./pages/user/JoinConfirm";

// 네비바와 연결되는 컴포넌트 -> 본문 컴포넌트로 수정하세요
import First from "./pages/main/First";
import Compass from "./pages/main/Compass";
import Third from "./pages/main/Third";
import Fourth from "./pages/main/Fourth";
import Fifth from "./pages/main/Fifth";
import Profile from "./components/main/profile/Profile";
import Write from "./components/main/write/Write";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/account/login" component={Login} exact />
        <Route path="/account/forgot" component={Forgot} />
        <Route path="/account/join" component={Join} />
        <Route path="/account/naverLogin" component={NaverTest} />
        <Route path="/account/kakaoLogin" component={Test} />
        <Route path="/account/joinConfirm" component={JoinConfirm} />
        {/* 하단바에 연결되는 컴포넌트 --> 이 아래에 각 컴포넌트 수정 바람 */}
        <Route path="/first" component={First} />
        <Route path="/compass" component={Compass} />
        <Route path="/third" component={Third} />
        <Route path="/fourth" component={Fourth} />
        <Route path="/fifth" component={Fifth} />

        {/* <Route path="/account/profile" component={Profile} /> */}

        <Route path="/main/profile" component={Profile} />
        <Route path="/main/write" component={Write} />

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
