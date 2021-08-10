import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "../../components/main/Post";
import { Container, Row, Col } from "react-bootstrap";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {}); db연결시 활용

  return (
    <div className="feed-wrapper">
      <Row>
        <Col></Col>
        <Col className="main-col">
          <div className="feed">
            <Post
              profilePhoto=""
              timestamp="2021.07.27(tue)"
              image=""
              username="jay"
              description="is it works ?"
            />
            <Post />
            <Post />
            <Post />
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
