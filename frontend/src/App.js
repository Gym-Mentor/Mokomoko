import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/common.css";
import Login from "./components/user/Login";
import Join from "./components/user/Join";
import Error404 from "./components/errors/Error404";
import NaverTest from "./components/user/NaverTest";
import Test from "./components/user/Test";
import JoinConfirm from "./components/user/JoinConfirm";
import Feed from "./components/main/Feed";
import Post from "./components/main/Post";
import NicknameSetting from "./components/user/NicknameSetting";

// 네비바와 연결되는 컴포넌트 -> 본문 컴포넌트로 수정하세요
import First from "./components/main/First";
import Compass from "./components/main/Compass";
import Third from "./components/main/Third";
import Fourth from "./components/main/Fourth";
import Fifth from "./components/main/Fifth";
import Profile from "./components/main/Profile";
import Write from "./components/main/write/Write";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/account/login" component={Login} exact />
        <Route path="/account/join" component={Join} />
        <Route path="/account/naverLogin" component={NaverTest} />
        <Route path="/account/kakaoLogin" component={Test} />
        <Route path="/account/joinConfirm" component={JoinConfirm} />

        <Route path="/feed" component={Feed} />
        <Route path="/post" component={Post} />
        <Route path="/settingNick" component={NicknameSetting} />
        {/* 하단바에 연결되는 컴포넌트 --> 이 아래에 각 컴포넌트 수정 바람 */}
        <Route path="/first" component={First} />
        <Route path="/compass" component={Compass} />
        <Route path="/third" component={Third} />
        <Route path="/fourth" component={Fourth} />
        <Route path="/fifth" component={Fifth} />

        <Route path="/main/profile" component={Profile} />
        <Route path="/main/write" component={Write} />

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
