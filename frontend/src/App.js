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
import Compass from "./components/main/Compass";
import Profile from "./components/main/profile/Profile";
import Write from "./components/main/write/Write";
import Detail from "./components/main/profile/Detail";
import Select from "./components/main/write/Select";
import Food from "./components/main/write/Food";
import FoodText from "./components/main/write/FoodText";
import Recipe from "./components/main/write/Recipe";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/account/login" component={Login} exact />
        <Route path="/account/join" component={Join} />
        <Route path="/account/naverLogin" component={NaverTest} />
        <Route path="/account/kakaoLogin" component={Test} />
        <Route path="/account/joinConfirm" component={JoinConfirm} />

        {/* main */}
        <Route path="/main/feed" component={Feed} />
        <Route path="/main/post" component={Post} />
        <Route path="/main/settingNick" component={NicknameSetting} />
        <Route path="/main/compass" component={Compass} />
        <Route path="/main/profile" component={Profile} />
<<<<<<< HEAD
        <Route path="/main/detail/:index" component={Detail}/>
        <Route path="/main/write" component={Write} />
=======
        <Route path="/main/select" component={Select} />
        <Route path="/main/writeFood" component={Food} />
        <Route path="/main/writeFoodText" component={FoodText} />
        <Route path="/main/writeRecipe" component={Recipe} />
>>>>>>> f17fdd8ca11215d3deb981d1a2c115f16f36f3d8

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
