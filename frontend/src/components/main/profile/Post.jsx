import React from 'react';
import '../../../css/main/Post.css';

const PostList = [
    {
        img : 'https://i.pinimg.com/originals/20/27/3b/20273b98f34d8d467b906fb5a17bd939.jpg',
        content :'재밌다',
        date : '2021-07-27',
        path: '/test'
    },
    {
        img : 'https://i.pinimg.com/originals/20/27/3b/20273b98f34d8d467b906fb5a17bd939.jpg',
        content :'재밌다',
        date : '2021-07-27',
        path: '/test'
    },
    {
        img : 'https://i.pinimg.com/originals/20/27/3b/20273b98f34d8d467b906fb5a17bd939.jpg',
        content :'재밌다',
        date : '2021-07-27',
        path: '/test'
    },
    {
        img : 'https://i.pinimg.com/originals/20/27/3b/20273b98f34d8d467b906fb5a17bd939.jpg',
        content :'재밌다',
        date : '2021-07-27',
        path: '/test'
    },
];
const showDetail = () =>{
    alert("TEST");
}

const Post = () => {
    return (
        <div>
            <div className="userPost">
                {PostList && PostList.map((item,index) => {
                        return(
                            <div key = {index} className="postGrid">
                                <img 
                                className= "postImg"
                                src={item.img}
                                onClick={showDetail} 
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Post;