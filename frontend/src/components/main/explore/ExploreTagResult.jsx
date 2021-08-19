import axios from 'axios';
import React,{useEffect} from 'react';
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setPostData } from '../../../modules/PostData';
import { Link, useHistory } from "react-router-dom";
import ExploreHeader from './ExploreHeader';

import "../../../css/main/profile/ProfilePost.css";

const ExploreTagResult = () => {
    const location = useLocation();
    const postList = location.state.postList;

    const { PostData } = useSelector((state) => state.PostData);
    const { user} =
    useSelector((state) => ({
        user: state.userInfo.user,
    }));

    const history = useHistory();
    const dispatch = useDispatch();

    const showDetail = (e,postid) =>{
        e.preventDefault();

        axios({
            url: "https://i5d104.p.ssafy.io/api/post/" + user.id + "/" + postid,
            method: "get",
        })
        .then((response)=>{
            dispatch(setPostData(response.data.data));
            history.push({
                pathname: `detailPresenter/${postid}`,
            });
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(() => {
        console.log(postList);
        return () => {
            
        }
    }, [])

    return (
        <div>
            <ExploreHeader/>
            <div className="userPost">
                {postList &&
                    postList.map((item,index)=>{
                        return(
                            <div key={index}
                            className="postGrid"
                            onClick={(e)=>showDetail(e,`${item.post.id}`)}
                            >
                            <img className="postImg" src={item.image}/>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ExploreTagResult;