import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  profileCardContainer: {
    position: "absolute",
    right: "0px",
    width: "310px",
    borderRadius: "20px !important",
    top: "60px",
    boxShadow: "0px 0px 50px rgba(0,0,0,0.3) !important",
    padding: "15px 20px",
    zIndex:"1"
  },
  profileImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "8px",
  },
  imageContainer: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },
  profileCardDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    padding: "10px 0px 20px",
  },
  line: {
    border: "1px solid #d8d8d8",
  },
  profileData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0px",
    cursor:"pointer"
  },
  profileDataImg: {
    borderRadius: "50px",
    height: "35px",
    width: "35px",
  },
  profileName: {
    color: "#606060",
    marginLeft: "10px !important",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#d55151",
    padding: "10px 20px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "0",
    borderRadius: "20px",
    cursor:"pointer"
  },
});
