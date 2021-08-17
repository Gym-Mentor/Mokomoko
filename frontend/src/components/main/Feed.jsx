import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../../modules/MainNav";
import Post from "../../components/main/Post";
import { Container, Row, Col } from "react-bootstrap";
import Cheader from "../header/Cheader";

const Feed = ({ history }) => {
  const { activeNav, user } = useSelector((state) => ({
    activeNav: state.activeNav,
    user: state.userInfo.user,
  }));

  const dispatch = useDispatch();

  const onSetIndex = (activeNav) => dispatch(setIndex(activeNav));

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSetIndex(1);
    if (user.nickname == null) {
      console.log(user);
      history.push("/main/settingNick");
    }
    return () => {};
  }, []);

  return (
    <div className="feed-wrapper">
      <Row>
        <Col></Col>
        <Col className="main-col">
          <div className="feed-header"></div>
          <Cheader title="피드" />
          <div className="feed">
            {/* <Post
              profilePhoto=""
              timestamp="2021.07.27(tue)"
              image=""
              username="jay"
              description="is it works ?"
            /> */}

            <Post />
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>

    /* {posts.map((post) => ( */

    // <Post
    //   key={post.id}
    //   profilePhoto={post.data.profilePhoto}
    //   timestamp={post.data.timestamp}
    //   image={post.data.image}
    //   username={post.data.username}
    //   description={post.data.description}
    // />
    //   ))}
  );
};

export default Feed;
