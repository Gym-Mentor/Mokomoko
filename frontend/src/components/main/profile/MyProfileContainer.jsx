import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import ProfilePost from "./ProfilePost";
import ScrapPost from "./ScrapPost";
import AppsIcon from "@material-ui/icons/Apps";
import BookmarkIcon from "@material-ui/icons/Bookmark";
const MyProfileContainer = () => {
  let grid = <AppsIcon fontSize="large"></AppsIcon>;
  let scrap = <BookmarkIcon fontSize="large"></BookmarkIcon>;
  return (
    <div>
      <Tabs
        defaultActiveKey="내 게시물"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="내 게시물" title={grid}>
          <ProfilePost />
        </Tab>
        <Tab eventKey="스크랩" title={scrap}>
          <ScrapPost />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MyProfileContainer;
