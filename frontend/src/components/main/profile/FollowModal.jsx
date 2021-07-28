import React from 'react';
import '../../../css/main/FollowModal.css';

const FollowModal = ({showFollowModal}) => {
    return (
        <>
            <div className="background" onClick={showFollowModal} />
            <div className="followList">
                    <h1>팔로우 리스트 띄워주기</h1>
            </div>
            
        </>
    );
};

export default FollowModal;