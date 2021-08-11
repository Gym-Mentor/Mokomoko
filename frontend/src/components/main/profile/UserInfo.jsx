import React ,{useState}from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUserInfo} from '../../../modules/userInfo';

import userImg from '../../../img/user_image.png';
import FollowModal from './FollowModal';
import FollowerModal from './FollowerModal';
import '../../../css/main/profile/UserInfo.css'



const UserInfo = () => {
    
    const {user} =  useSelector(state =>({
        user : state.userInfo.user,
    }));

    const dispatch = useDispatch();

    const [userInfo,SetUesrInfo] = useState(user);

    const [isFollow, setIsFollow] = useState(false);
    const [isFollower, setIsFollower] = useState(false);

    const showFollowModal = () =>{
        setIsFollow(prev => !prev);
    }
    
    const showFollowerModal =() =>{
        setIsFollower(prev => !prev);
    }

    

    return (
        <>
        <div className="userInfo">
            <div className="userImg">
                <img className="userImg-img" 
                alt="my-image" 
                src={(user.image != null)?user.image:`${userImg}`} 
                />
            </div>

            <div className="userFriend">
                <div className="userFriend follow" onClick={showFollowModal}>
                    <p ><b>팔로우</b></p>
                    <div>
                        10명
                    </div>
                </div>

                {isFollow && <FollowModal showFollowModal={showFollowModal}/>}

                <div className="userFriend follower" onClick={showFollowerModal}>
                    <p><b>팔로워</b></p>
                    <div>
                        10명
                    </div>
                </div>
                {isFollower && <FollowerModal showFollowerModal={showFollowerModal}/>}
                <hr/>
            </div>
        </div>
        </>
    );
};

export default UserInfo;