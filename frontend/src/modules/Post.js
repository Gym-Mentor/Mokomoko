
const SET_USERIMAGE = 'Post/SET_USERIMAGE';
const SET_USERNAME = 'Post/SET_USERNAME';
const SET_POST = 'Post/SET_POST';
const SET_TAGS = 'Post/SET_TAGS';
const SET_CONTENT = 'Post/SET_CONTENT';


//데이터베이스에서 글 목록 불러온 후 setting
export const setUserImage = (userImage) =>({
    type : SET_USERIMAGE,
    userImage,
})

export const setUserName = userName => ({
    type : SET_USERNAME,
    userName,
})

export const setPost = (post) => ({
    type : SET_POST,
    post,
})

export const setTags = (tags) => ({
    type : SET_TAGS,
    tags,
})

export const setContent = (content) => ({
    type : SET_CONTENT,
    content,
})


/*초기 상태 선언 */
const initialState = {
    userImage:'/profileImg/user_image.png',
    userName: '',
    post: {},
    tags: [],
    content: [],
}


/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export default function Post(state=initialState, action){
    switch(action.type){
        case SET_USERIMAGE:
            return{
                ...state,
                userImage : action.userImage,
            };
        case  SET_USERNAME:
            return{
                ...state,
                userName : action.userName,
            };
        case SET_POST:
            return{
                ...state,
                post : action.post,
            };
        case SET_TAGS:
            return{
                ...state,
                tags : action.tags

            };
        case SET_CONTENT:
            return{
                ...state,
                content : action.content
            };

        default:
            return state;
    }
}