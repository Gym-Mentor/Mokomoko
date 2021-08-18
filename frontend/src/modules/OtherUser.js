const SET_OTHERUSER = "Post/SET_OTHERUSER";

//데이터베이스에서 글 목록 불러온 후 setting
export const setOtherUser = (OtherUser) => ({
  type: SET_OTHERUSER,
  OtherUser,
});

/*초기 상태 선언 */
const initialState = {};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export default function OtherUser(state = initialState, action) {
  switch (action.type) {
    case SET_OTHERUSER:
      return {
        ...state,
        ...action.OtherUser,
      };

    default:
      return state;
  }
}
