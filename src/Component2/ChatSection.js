import { Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import { useStyles } from "../Styles/ChatSectionStyles";
const Chatsection = ({ show, data ,handleClose}) => {
  // console.log(data, "from chat section");
  const classes = useStyles();
  return (
    <div>
      {show && (
        <div className={classes.chatSectionContainer}>
          <div className={classes.sectionContainer}>
            <div className={classes.imageContainer}>
              <img
                src={data.profilepicture}
                alt="profile"
                className={classes.image}
              />
              <Typography variant="subtitle2" className={classes.sectionTitle}>
                {data.name}
              </Typography>
            </div>

            <div className={classes.icons}>
              <KeyboardArrowDownIcon />
              <ClearIcon onClick={handleClose} style={{ fontSize: "20px" }} />
            </div>
          </div>

          <div className={classes.messageContainer}>
            <Typography className={classes.message1} variant="subtitle2">
              Lorem ipsum dolor sit amet, consectetur
            </Typography>
            <Typography className={classes.message1} variant="subtitle2">
              Lorem ipsum dolor sit amet
            </Typography>

            <Typography className={classes.time}>9:16 PM</Typography>

            <div className={classes.msgContent}>
              <Typography className={classes.message3} variant="subtitle2">
                Lorem ipsum dolor
              </Typography>
              <Typography className={classes.message3} variant="subtitle2">
                Lorem ipsum
              </Typography>
            </div>
          </div>
          <div className={classes.sendIcon}>
            <div className={classes.borderLine}></div>
            <SendIcon className={classes.icon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatsection;
