import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/common.css";
import Login from "./pages/Login";
import Forgot from "./components/Forgot";
import Join from "./pages/Join";
import Error404 from "./components/errors/Error404";
import NaverTest from "./pages/NaverTest";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/forgot" component={Forgot} />
        <Route path="/join" component={Join} />
        <Route path="/naverLogin" component={NaverTest} />
        <Route path="/kakaoLogin" component={Test} />

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
