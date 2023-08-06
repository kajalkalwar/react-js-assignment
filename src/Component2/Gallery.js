import { Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../Styles/Styles";
import PageContainer from "./PageContainer";

const Gallery = ({ allData }) => {
  const classes = useStyles();
  const data = {
    id: 1,
    name: "Leanne Graham",
    profilepicture:
      "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg",
  };
  return (
    <>
      <PageContainer allData={allData} headerText="Gallery" data={data}>
        <div className={classes.container}>
          <Typography className={classes.title}>Coming Soon</Typography>
        </div>
      </PageContainer>
      ;
    </>
  );
};

export default Gallery;
