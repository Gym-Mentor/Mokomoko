import React ,{useState}from 'react';
import userImg from '../../../img/user.jpg';
import '../../../css/main/UserInfo.css';
import FollowModal from './FollowModal';
import FollowerModal from './FollowerModal';


const UserInfo = () => {

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
                <img className="userImg-img" alt="my-image" src={userImg} />
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