/* 
한 프로젝트에 여러개의 리듀서가 있을 때는 한개의 리듀서로 함치기 위해
루드 리듀서를 사용
리듀서 하나로 합치기 위해 combineReducers 사용
*/

import { combineReducers } from "redux";
import profileDetail from "./profileDetail";
import todos from "./todos";
import counter from "./counter";

const rootReducer = combineReducers({
    profileDetail,
    todos,
    counter
});

export default rootReducer;