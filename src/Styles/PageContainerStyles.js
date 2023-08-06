import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    margin: "20px 40px 0px 40px",
    position: "relative",
  },
  sidebarContainer: {
    backgroundColor: "#5145c8 !important",
    width: "260px",
    height: "720px",
    borderRadius: "30px !important",
  },
  sidebarDetails: {
    display: "flex",
    minHeight: "100%",
    justifyContent: "center",
  },
  sidebar: {
    padding: "10px 40px",
  },
  sidebarTitle: {
    color: "#fff",
    paddingBottom: "15px",
    fontWeight: "bold !important",
  },

  navContainer: {
    flexGrow: 1,
    paddingLeft: "40px",
  },
  navBox: {
    display: "flex",
    alignItems: "center",
    padding: "15px 0px 25px",
  },
  navTitle: {
    flexGrow: 1,
    color: "#4a4a4a",
  },
  imageBox: {
    display: "flex",
    alignItems: "center",
  },
  navImage: {
    borderRadius: "50px",
    height: "35px",
    width: "35px",
  },
  navName: {
    marginLeft: "10px !important",
    color: "#4a4a4a",
  },

  content: {
    marginTop: "8px",
    flexGrow: 1,
  },
  horiLine: {
    border: "1px solid #d8d8d8",
  },

  chatMainContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "60px",
    bottom: "0px",
    background: "#ffffff",
    zIndex: "1",
  },
  chat: {
    backgroundColor: "#2c65c8",
    height: "50px",
    width: "255px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 15px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  chatData: {
    display: "flex",
    alignItems: "center",
  },
  chatIcon: {
    color: "#fff",
  },
  chatTitle: {
    color: "#fff",
    marginLeft: "8px !important",
  },
});
