import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
import { Container, Row, Col } from "react-bootstrap";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {}); db연결시 활용

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <div className="feed">
            <Post
              profilePhoto=""
              timestamp="2021.07.27(tue)"
              image=""
              username="jay"
              description="is it works ?"
            />
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>

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
