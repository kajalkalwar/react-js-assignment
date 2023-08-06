import { Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
import Chatsection from "./ChatSection";
import { useStyles } from "../Styles/ChatStyles";
function Chat({ chatListData ,setChatOpen}) {
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const [list, setList] = useState();
  const handleClick = (item) => {
    setList(item);
    setShow(item.id);
  };
  const handleClose = () => {
    setChatOpen(false)
    setShow(false)
  }
  console.log(chatListData,"from chat")
  return (
    <div className={classes.chatContent}>
      {chatListData?.map((item) => (
        <div className={classes.chatDetails}>
          <div
            onClick={() => handleClick(item)}
            className={classes.chatProfile}
          >
            <img
              src={item.profilepicture}
              alt="profile"
              className={classes.chatImage}
            />
            <Typography variant="subtitle2" className={classes.chatName}>
              {item.name}
            </Typography>
          </div>
          <CircleIcon className={classes.chatCircleIcon} />
        </div>
      ))}
      <Chatsection handleClose={handleClose} show={show} data={list} />
    </div>
  );
}

export default Chat;
