import React from "react";
import { useLocation } from "react-router";
import PageContainer from "./PageContainer";
import Singlecard from "./SingleCard";

const Profilepage = ({ dataList, allData }) => {
  const { state } = useLocation();
  console.log(state, "state");
  // console.log(state);
  return (
    <PageContainer
      data={state}
      headerText="Profile"
      allData={allData}
    >
      <Singlecard state={state} />
    </PageContainer>
  );
};

export default Profilepage;
