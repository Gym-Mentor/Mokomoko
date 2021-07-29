import React from 'react';
import '../../../css/main/profile/Detail.css';


const Detail = ({showDetail,detail}) => {
    return (
        <>
            <div className="background" onClick={showDetail} />
            <div className="content" detail = {detail}>
                    <div className="headerDiv">
                        <h1>상단바</h1>
                    </div>
                    <div className="imgDiv">
                        <img src={detail.img}/>
                    </div>
                    <div className="contentDiv">
                        {detail.content}
                    </div>
                </div>
        </>
    );
};

export default Detail;