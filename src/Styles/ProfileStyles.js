import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    marginTop: "40px",
  },

  profileNameImage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  emptyBorder: {
    borderRight: "1px solid #9a9a9a",
    margin: "0 40px",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "40px",
  },

  address: {
    display: "flex",
    alignItems: "center",
    "& h6": {
      width: "75px",
      textAlign: "right",
    },
    "& span:first-of-type": {
      margin: "10px 10px 10px 20px",
      color: "#9a9a9a",
      fontSize: "20px",
    },
  },
  profileDetails: {
    color: "#111",
    fontWeight: "bold",
    fontSize: "18px",
  },
  profilegeo: {
    color: "#111",
  },

  profilebio: {
    display: "flex",
    alignItems: "center",
    "& h6": {
      width: "100px",
      textAlign: "right",
    },

    "& span:first-of-type": {
      margin: "10px 10px 10px 20px",
      color: "#9a9a9a",
      fontSize: "20px",
    },
  },

  profileCompany: {
    display: "flex",
    alignItems: "center",
    "& h6": {
      width: "100px",
      textAlign: "right",
    },

    "& span:first-of-type": {
      margin: "15px 10px 15px 20px",
      color: "#9a9a9a",
      fontSize: "20px",
    },
  },
});
