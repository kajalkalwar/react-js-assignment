import {
    Card,
    CardContent,
    Typography,
    Box,
    Stack,
  } from "@mui/material";
  import { useNavigate } from "react-router";
  import { useStyles } from "../Styles/LandingpageStyles";
  const Landingpage = ({data}) => {
    const classes = useStyles();
    const navigate = useNavigate();
  
  
    const handleClick = (user) => {
      navigate(`/profilepage/${user.id}`, { state: user });
    };
  
    return (
      <div className={classes.landingContainer}>
        <Card className={classes.landingCard}>
          <Stack className={classes.cardTitleContainer}>
            <Typography variant="h6" className={classes.cardTitle}>
              Select an account
            </Typography>
          </Stack>
          <CardContent>
            <Box className={classes.boxContainer}>
              {data.map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleClick(user)}
                  className={classes.contentContainer}
                >
                  <div className={classes.cardContentContainer}>
                    <img
                      className={classes.cardImage}
                      src={user.profilepicture}
                      alt="profile pictures"
                    />
                    <Typography className={classes.cardName} variant="body1">
                      {user.name}
                    </Typography>
                  </div>
                  <hr className={classes.horiLine} />
                </div>
              ))}
            </Box>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default Landingpage;
  