import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import ProfilePost from "./ProfilePost";
import ScrapPost from "./ScrapPost";
import AppsIcon from "@material-ui/icons/Apps";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import "../../../css/main/profile/ProfilePost.css";
const MyProfileContainer = () => {
  const [mySelected, setMySelected] = useState(false);
  const [scrapSelected, setScrapSelected] = useState(false);

  return (
    <div>
      <Tabs
        defaultActiveKey={1}
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
        onSelect={(key) => {
          if (key == 1) {
            setMySelected(true);
            setScrapSelected(false);
          } else {
            setMySelected(false);
            setScrapSelected(true);
          }
        }}
      >
        <Tab
          eventKey={1}
          title={
            <AppsIcon id={"grid-icon-" + (mySelected ? "onColor" : "offColor")} fontSize="large" />
          }
        >
          <ProfilePost />
        </Tab>
        <Tab
          eventKey={2}
          title={
            <BookmarkIcon
              id={"scrap-icon-" + (scrapSelected ? "onColor" : "offColor")}
              fontSize="large"
            />
          }
        >
          <ScrapPost />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MyProfileContainer;
