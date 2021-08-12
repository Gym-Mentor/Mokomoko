import React from 'react';
import AwardUser from './AwardUser';
import AwardTag from './AwardTag';
import AwardPost from './AwardPost';

import '../../../css/award/AwardMain.css';

const AwardMain = () => {
    return (
        <div>
            <div className="awardMain-wrapper">
                <div className="awardMain-row">
                    <div className="awardMain-col">
                        <div className="awardMain-header">
                            명예의 전당
                            <hr />
                        </div>

                            <AwardUser/>
                            <AwardTag/>
                            <AwardPost/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardMain;