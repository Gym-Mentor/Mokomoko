import React ,{useState,useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../../modules/MainNav";
import Post from "../../components/main/Post";
import { Container, Row, Col } from "react-bootstrap";

const Feed = () => {
  const { activeNav } = useSelector((state) => ({
    activeNav: state.activeNav,
  }));

  const dispatch = useDispatch();

  const onSetIndex = (activeNav) => dispatch(setIndex(activeNav));

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSetIndex(1);
    return () => {
      
    }
  }, [])

  return (
    <div className="feed-wrapper">
      <Row>
        <Col></Col>
        <Col className="main-col">
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
