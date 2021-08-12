import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/common.css";
import Login from "./components/user/Login";
import Join from "./components/user/Join";
import Error404 from "./components/errors/Error404";
// import NaverTest from "./components/user/NaverTest";
import KakaoTest from "./components/user/KakaoTest";
// import Test from "./components/user/Test";
import JoinConfirm from "./components/user/JoinConfirm";
import Feed from "./components/main/Feed";
import Post from "./components/main/Post";
import NicknameSetting from "./components/user/NicknameSetting";
import Explore from "./components/main/explore/Explore";
import Profile from "./components/main/profile/Profile";
import Detail from "./components/main/profile/Detail";
import Select from "./components/main/write/Select";
import Food from "./components/main/write/Food";
import FoodImageText from "./components/main/write/FoodImageText";
import FoodRecipeText from "./components/main/write/FoodRecipeText";
import FoodRecipeSubmit from "./components/main/write/FoodRecipeSubmit";

import DeveloperInfo from "./components/header/profileSidebar/DeveloperInfo";
import UserInfoModify from "./components/header/profileSidebar/UserInfoModify";
import UserBlock from "./components/header/profileSidebar/UserBlock";
import ForgotPassword from "./components/user/ForgotPassword";
import EnterCode from "./components/user/EnterCode";
import UpdatePW from "./components/user/UpdatePW";
import Comment from "./components/main/Comment";
import NaverCallBack from "./components/user/NaverCallBack";
import DetailPresenter from "./components/main/DetailPresenter";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/account/login" component={Login} exact />
        <Route path="/account/join" component={Join} />
        <Route path="/account/naverLogin" component={NaverCallBack} />
        <Route path="/account/kakaoLogin" component={KakaoTest} />
        <Route path="/account/joinConfirm" component={JoinConfirm} />
        <Route path="/account/forgot" component={ForgotPassword} />
        <Route path="/account/enterCode/:email" component={EnterCode} />
        <Route path="/account/updatepw/:email" component={UpdatePW} />

        {/* main */}
        <Route path="/main/feed" component={Feed} />
        <Route path="/main/post" component={Post} />
        <Route path="/main/settingNick" component={NicknameSetting} />
        <Route path="/main/explore" component={Explore} />
        <Route path="/main/profile" component={Profile} />
        <Route path="/main/detail/:index" component={Detail} />
        <Route path="/main/select" component={Select} />
        <Route path="/main/writeFood" component={Food} />
        <Route path="/main/writeFoodImageText" component={FoodImageText} />
        <Route path="/main/writeFoodRecipeText" component={FoodRecipeText} />
        <Route path="/main/writeFoodRecipeSubmit" component={FoodRecipeSubmit} />
        <Route path="/p/comment" component={Comment} />
        <Route path="/main/testt/:index" component={DetailPresenter} />

        {/*profile side bar */}
        <Route path="/developers/info" component={DeveloperInfo}></Route>
        <Route path="/account/userInfo/modify" component={UserInfoModify}></Route>
        <Route path="/account/userInfo/block" component={UserBlock}></Route>

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
