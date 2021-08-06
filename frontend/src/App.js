import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/common.css";
import Login from "./components/user/Login";
import Join from "./components/user/Join";
import Error404 from "./components/errors/Error404";
import Test from "./components/user/Test";
import JoinConfirm from "./components/user/JoinConfirm";
import Feed from "./components/main/Feed";
import Post from "./components/main/Post";
import NicknameSetting from "./components/user/NicknameSetting";
import Compass from "./components/main/Compass";
import Profile from "./components/main/profile/Profile";
import Detail from "./components/main/profile/Detail";
import Select from "./components/main/write/Select";
import Food from "./components/main/write/Food";
import FoodText from "./components/main/write/FoodText";
import Recipe from "./components/main/write/Recipe";
import ForgotPassword from "./components/user/ForgotPassword";
import EnterCode from "./components/user/EnterCode";
import UpdatePW from "./components/user/UpdatePW";
import Comment from "./components/main/Comment";
import NaverCallBack from "./components/user/NaverCallBack";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/account/login" component={Login} exact />
        <Route path="/account/join" component={Join} />
        <Route path="/account/kakaoLogin" component={Test} />
        <Route path="/account/naverLogin" component={NaverCallBack} />
        <Route path="/account/joinConfirm" component={JoinConfirm} />
        <Route path="/account/forgot" component={ForgotPassword} />
        <Route path="/account/enterCode/:email" component={EnterCode} />
        <Route path="/account/updatepw/:email" component={UpdatePW} />

        {/* main */}
        <Route path="/main/feed" component={Feed} />
        <Route path="/main/post" component={Post} />
        <Route path="/main/settingNick" component={NicknameSetting} />
        <Route path="/main/compass" component={Compass} />
        <Route path="/main/profile" component={Profile} />
        <Route path="/main/detail/:index" component={Detail} />
        <Route path="/main/select" component={Select} />
        <Route path="/main/writeFood" component={Food} />
        <Route path="/main/writeFoodText" component={FoodText} />
        <Route path="/main/writeRecipe" component={Recipe} />
        <Route path="/p/comment" component={Comment} />

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
