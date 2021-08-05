import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import MainNav from "./components/main/MainNav";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FontAwesome";
import {createStore} from 'redux';
import rootReducer from './modules';

import {Provider} from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";// 리덕스 개발자 도구

//composeWithDevTools 사용 시 에러 나길래 아래 코드로 수정하였습니다.
// const store = createStore(rootReducer,composeWithDevTools, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()); //스토어 만들기
    
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()); //스토어 만들기
console.log(store.getState());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                {/* 하단 네비게이션 컴포넌트 */}
                <MainNav/>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,

    document.getElementById(
        "root"
    )
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
