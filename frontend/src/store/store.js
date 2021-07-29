import { createStore } from "redux";

export default createStore(function(state,action){
    //store의 state값 바꾸기
    //버튼 클릭시 state값 바꾸기
    if(state === undefined){
        return {number : 0}
    }
    if(action.type === 'INCREMENT'){
        return {...state, number : state.number + action.size}
    }

    if(action.type === 'FOLLOWER_MODAL '){
        return{...state, word : !action.isFollower}
    }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())