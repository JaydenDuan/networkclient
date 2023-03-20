import { useMediaQuery, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../navbar";
import AdvertWidget from "../widgets/AdvertWidget";
import FriendListWidget from "../widgets/FriendListWidget";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";
import UserWidget from "../widgets/UserWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <NavBar></NavBar>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath}></UserWidget>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath}></MyPostWidget>
          <PostsWidget userID={_id}></PostsWidget>
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            {" "}
            <AdvertWidget></AdvertWidget>
            <Box m="2rem 0">
              <FriendListWidget userId={_id}></FriendListWidget>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;