import React from 'react';
import Header from '../../header/Header';
import UserInfo from '../profile/UserInfo';
import Post from '../profile/Post';

import '../../../css/main/Profile.css';

const Profile = () => {
    return (
        <div>
            <Header/>
            <div className="profile">
                <UserInfo/>
            </div>
            <Post/>
        </div>
    );
};

export default Profile;