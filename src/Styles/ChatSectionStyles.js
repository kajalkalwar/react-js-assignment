import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  chatSectionContainer: {
    position: "absolute",
    right: "300px",
    bottom: "5px",
  },
  sectionContainer: {
    backgroundColor: "#2c65c8",
    height: "50px",
    width: "260px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 15px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    borderRadius: "50px",
    height: "30px",
    width: "30px",
  },

  sectionTitle: {
    color: "#fff",
    marginLeft: "10px !important",
  },
  icons: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
  messageContainer: {
    overflow: "scroll",
    height: "220px",
    borderLeft: "1px solid #95b2e3",
    borderRight: "1px solid #95b2e3",
    background: "#fff",
  },
  message1: {
    background: "#f1f1f1",
    margin: "15px 40px 10px 20px !important",
    padding: "10px",
    color: "#8e8e8e",
    borderRadius: "5px",
  },
  message3: {
    background: "#f1f1f1",
    padding: "10px",
    color: "#8e8e8e",
    borderRadius: "5px",
    marginBottom: "10px !important",
  },

  msgContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    marginRight: "25px",
  },
  time: {
    color: "#8e8e8e",
    textAlign: "center",
    fontSize: "12px !important",
    padding: "5px 0px",
  },

  sendIcon: {
    display: "flex",
    justifyContent: "space-between",
    borderRight: "1px solid #d5d5d5",
    borderLeft: "1px solid #d5d5d5",
    borderTop: "1px solid #d5d5d5",
    color: "#2c65c8",
    padding: "5px 10px",
  },
  borderLine: {
    borderLeft: "2px solid #d5d5d5",
  },
  icon: {
    fontSize: "20px !important",
  },
});
