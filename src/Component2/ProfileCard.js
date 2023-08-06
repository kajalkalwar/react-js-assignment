import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../Styles/ProfileCardStyles";
import { useNavigate } from "react-router-dom";
const Profilecard = ({ data, dataList,setShowCard }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleSignOut = () => {
    navigate("/");
  };
  const handleClick = (user) => {
    navigate(`/profilepage/${user.id}`, { state: user });
    console.log(user,"user12345")
    setShowCard(false)
  };
  return (
    <Card className={classes.profileCardContainer}>
      <CardContent>
        <div className={classes.profileImage}>
          <img
            src={data?.profilepicture}
            alt="profile"
            className={classes.imageContainer}
          />
        </div>
        <div className={classes.profileCardDetails}>
          <Typography variant="h6">{data?.name}</Typography>
          <Typography color="#adadad">{data?.email}</Typography>
        </div>
        <div className={classes.container}>
          <hr className={classes.line} />
          {dataList?.slice(2, 4).map((item) => (
            <div onClick={()=> handleClick(item)} key={item.id}>
              <div className={classes.profileData}>
                <img
                  className={classes.profileDataImg}
                  src={item.profilepicture}
                  alt="profile"
                />
                <Typography className={classes.profileName} variant="subtitle2">
                  {item.name}
                </Typography>
              </div>
              <hr className={classes.line} />
            </div>
          ))}
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.btn} onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profilecard;
