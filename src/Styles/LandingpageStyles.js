import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  landingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    // background:"url(../Assets/bg2.jpeg)"
  },
  landingCard: {
    width: "550px",
    borderRadius: "30px !important",
    cursor: "pointer",
    boxShadow: "0px 0px 50px rgba(0,0,0,0.3) !important",
  },
  cardTitleContainer: {
    background: "#f6f6f6",
    padding: "40px",
  },
  cardTitle: {
    textAlign: "center",
    color: "#545454 !important",
    fontWeight: "bold !important",
  },
  boxContainer: {
    overflow: "scroll",
    height: "400px",
  },
  contentContainer: {
    padding: "5px 25px",
  },
  cardContentContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0px",
  },
  cardImage: {
    borderRadius: "50px",
    height: "35px",
    width: "35px",
  },

  cardName: {
    marginLeft: "10px !important",
    color: "#4a4a4a",
  },
  horiLine: {
    border: "1px solid #dfdfdf",
  },
});
