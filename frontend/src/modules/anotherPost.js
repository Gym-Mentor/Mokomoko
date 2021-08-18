
const SET_ANOTHERUSERIMAGE = 'Post/SET_USERIMAGE';
const SET_ANOTHERUSERNAME = 'Post/SET_USERNAME';
const SET_ANOTHERPOST = 'Post/SET_POST';
const SET_ANOTHERTAGS = 'Post/SET_TAGS';
const SET_ANOTHERCONTENT = 'Post/SET_CONTENT';
const SET_ANOTHERCONTENT_IMAGE = 'Post/SET_CONTENT_IMAGE';
const SET_ANOTHERLIKE = 'Post/SET_LIKE';
const SET_ANOTHERCOMMENTS = 'Post/SET_COMMENTS';

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

export const setContentImage = (contentImage) => ({
    type : SET_CONTENT_IMAGE,
    contentImage,
})

export const setLike = (like) => ({
    type : SET_LIKE,
    like
})

export const setComments = (comments) =>({
    type : SET_COMMENTS,
    comments
})


/*초기 상태 선언 */
const initialState = {
    userImage:'/profileImg/user_image.png',
    userName: '',
    post: {},
    tags: [],
    content: [],
    contentImage : [],
    like : false,
    comments:[],
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

            //이미지 여러장 처리 위해서 사용
        case SET_CONTENT_IMAGE:
            return{
                ...state,
                contentImage : action.contentImage
            };
        case SET_LIKE:
            return{
                ...state,
                like : action.like
            };
        case SET_COMMENTS:
            return{
                ...state,
                comments : action.comments
            }

        default:
            return state;
    }
}