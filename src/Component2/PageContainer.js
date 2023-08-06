import React, { useState } from "react";
import { Box, Container, Typography, Stack} from "@mui/material";
import { useStyles } from "../Styles/PageContainerStyles";
import ProfileCard from "./ProfileCard";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Chat from "./Chat";
import { Link } from "react-router-dom";
const sideData = [
{
  id:1,
  name:"Profile",
  path:"/profile/1"
},
{
  id:2,
  name:"Post",
  path:"/post"
},
{
  id:3,
  name:"Gallery",
  path:"/gallery"
},
{
  id:4,
  name:"Todo",
  path:"/todo"
},
];

function PageContainer({
  children,
  data,
  headerText,
  handleClick,
  allData,
}) {
  const [showCard, setShowCard] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const classes = useStyles();
console.log(data,"from pagecontainer")
  return (
    <>
      <div className={classes.container}>
        <div className={classes.sidebarContainer}>
          <Stack spacing={2} className={classes.sidebarDetails}>
            {sideData.map((item, index) => (
              <div key={index} className={classes.sidebar}>
                <Link to={`${item.path}`}>
                <Typography className={classes.sidebarTitle} variant="body1">
                  {item.name}
                </Typography>
                </Link>
                <hr className={classes.horiLine} />
              </div>
            ))}
          </Stack>
        </div>
        <div className={classes.navContainer}>
          <Box className={classes.navBox}>
            <Typography variant="h6" className={classes.navTitle}>
              {headerText}
            </Typography>
            <Box
              className={classes.imageBox}
              onClick={() => setShowCard(!showCard)}
            >
              <img
                className={classes.navImage}
                src={data?.profilepicture}
                alt="profile pictures"
              />
              <Typography className={classes.navName} variant="body1">
                {data?.name}
              </Typography>
            </Box>
          </Box>
          {showCard && (
            <ProfileCard
              data={data}
              dataList={allData}
              handleClick={handleClick}
              setShowCard={setShowCard}
            />
          )}
          <hr className={classes.horiLine} />
          <Container className={classes.content}>{children}</Container>
        </div>
      </div>

      <div className={classes.chatMainContainer}>
        <div className={classes.chat}>
          <div className={classes.chatData}>
            <ChatBubbleOutlineIcon className={classes.chatIcon} />
            <Typography className={classes.chatTitle}>Chats</Typography>
          </div>
          {chatOpen ? (
            <KeyboardArrowDownIcon
              className={classes.chatIcon}
              onClick={() => setChatOpen(!chatOpen)}
            />
          ) : (
            <KeyboardArrowUpIcon
              className={classes.chatIcon}
              onClick={() => setChatOpen(!chatOpen)}
            />
          )}
        </div>
        {chatOpen && <Chat setChatOpen={setChatOpen} chatListData={allData} />}
      </div>
    </>
  );
}

export default PageContainer;
