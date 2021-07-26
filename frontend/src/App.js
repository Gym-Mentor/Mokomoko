import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/common.css";
import Login from "./pages/user/Login";
import Forgot from "./components/user/Forgot";
import Join from "./pages/user/Join";
import Error404 from "./components/errors/Error404";
import NaverTest from "./pages/user/NaverTest";
import Test from "./pages/user/Test";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/account/login" component={Login} exact />
        <Route path="/account/forgot" component={Forgot} />
        <Route path="/account/join" component={Join} />
        <Route path="/account/naverLogin" component={NaverTest} />
        <Route path="/account/kakaoLogin" component={Test} />

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
