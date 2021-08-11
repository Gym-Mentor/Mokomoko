import {Route, Switch} from "react-router-dom";
import "./App.css";
import "./css/common.css";
import Test from "./components/main/Test";
import Login from "./components/user/Login";
import Join from "./components/user/Join";
import Error404 from "./components/errors/Error404";
import KakaoTest from "./components/user/KakaoTest";
import JoinConfirm from "./components/user/JoinConfirm";
import Feed from "./components/main/Feed";
import Post from "./components/main/Post";
import NicknameSetting from "./components/user/NicknameSetting";
import Compass from "./components/main/Compass";
import Profile from "./components/main/profile/Profile";
import Detail from "./components/main/profile/Detail";
import Select from "./components/main/write/Select";
import Food from "./components/main/write/Food";
import FoodImageText from "./components/main/write/FoodImageText";
import FoodRecipeText from "./components/main/write/FoodRecipeText";
import Recipe from "./components/main/write/Recipe";
import RecipeText from "./components/main/write/RecipeText";
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

import MainNav from "./components/main/MainNav";
import Main from "./components/main/Main";

function App() {
    return (
        <div className="App">
            <div className="로그인화면">
                <Switch>
                    <Route path="/" component={Test} exact="exact"/>
                    <Route path="/account/login" component={Login} exact="exact"/>
                    <Route path="/account/join" component={Join}/>
                    <Route path="/account/naverLogin" component={NaverCallBack}/>
                    <Route path="/account/kakaoLogin" component={KakaoTest}/>
                    <Route path="/account/joinConfirm" component={JoinConfirm}/>
                    <Route path="/account/forgot" component={ForgotPassword}/>
                    <Route path="/account/enterCode/:email" component={EnterCode}/>
                    <Route path="/account/updatepw/:email" component={UpdatePW}/>
                    <Route path="/main" component={Main}/>
                    <Route component={Error404}/>
                </Switch>
            </div>


        </div>
    );
}

export default App;
