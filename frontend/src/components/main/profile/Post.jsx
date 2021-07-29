import React ,{useState} from 'react';
import Detail from '../profile/Detail';

import '../../../css/main/profile/Post.css';



const Post = () => {

    const PostList = [
        {
            img : 'https://i.pinimg.com/originals/20/27/3b/20273b98f34d8d467b906fb5a17bd939.jpg',
            content :'재밌다1',
            date : '2021-07-27',
            path: '/test'
        },
        {
            img : 'https://i.pinimg.com/originals/20/27/3b/20273b98f34d8d467b906fb5a17bd939.jpg',
            content :'재밌다2',
            date : '2021-07-27',
            path: '/test'
        },
        {
            img : 'https://i.pinimg.com/originals/20/27/3b/20273b98f34d8d467b906fb5a17bd939.jpg',
            content :'재밌다3',
            date : '2021-07-27',
            path: '/test'
        },
        {
            img : 'https://i.pinimg.com/564x/fa/e3/50/fae3500cc623c6b6051f33ef2dda9205.jpg',
            content :'재밌다4',
            date : '2021-07-27',
            path: '/test'
        },
    ];

    const [isDetail, setIsDetail] = useState(false);
    const [detail, setDetail] =useState({
        img :'',
        content :'',
        date : '',
        path: '',
    });

    const showDetail = (e,index) =>{
        e.preventDefault();
        setIsDetail(prev => !prev);

        /*index값이 0이렇게 안넘어오고 {index :0} 넘어오더라구요*/
        if(!isDetail){
            setDetail(PostList[index.index]);
        }
    }


    return (
        <div>
            <div className="userPost">
                {PostList && PostList.map((item,index) => {
                        return(
                            <div key = {index} className="postGrid" onClick={(e) =>showDetail(e,{index})}>
                                <img 
                                className= "postImg"
                                src={item.img}
                                />
                            </div>
                        );
                    })}

                    {isDetail && <Detail showDetail={showDetail} detail={detail}/>}
            </div>
        </div>
    );
};

export default Post;