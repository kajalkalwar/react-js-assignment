import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  chatContent: {
    overflow: "scroll",
    height: "350px",
  },
  chatDetails: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderLeft: "1px solid #95b2e3",
    borderRight: "1px solid #95b2e3",
    padding: "5px 15px",
  },
  chatProfile: {
    display: "flex",
    alignItems: "center",
  },
  chatImage: {
    borderRadius: "50px",
    height: "35px",
    width: "35px",
  },
  chatName: {
    marginLeft: "10px !important",
  },
  chatCircleIcon: {
    fontSize: "10px !important",
    color: "#d4d4d4",
  },
});
