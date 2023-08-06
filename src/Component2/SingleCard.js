import React from 'react';
import { Stack, Typography } from "@mui/material";
import { useStyles } from "../Styles/ProfileStyles";
import googlemap from "../Assets/googlemap.png";
const Singlecard = ({state}) => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
        <Stack>
          <div className={classes.profileNameImage}>
            <img
              style={{ borderRadius: "50%" }}
              src={state.profilepicture}
              alt="profile pictures"
              height="200px"
              width="200px"
            />
            <Typography variant="h6">{state.name}</Typography>
          </div>

          <div className={classes.profilebio}>
            <Typography color="#9a9a9a" variant="h6">
              Username
            </Typography>
            <span>:</span>
            <span className={classes.profileDetails}>{state.username}</span>
          </div>
          <div className={classes.profilebio}>
            <Typography color="#9a9a9a" variant="h6">
              e-mail
            </Typography>
            <span>:</span>
            <span className={classes.profileDetails}>{state.email}</span>
          </div>
          <div className={classes.profilebio}>
            <Typography color="#9a9a9a" variant="h6">
              Phone
            </Typography>
            <span>:</span>
            <span className={classes.profileDetails}>{state.phone}</span>
          </div>
          <div className={classes.profilebio}>
            <Typography color="#9a9a9a" variant="h6">
              Website
            </Typography>
            <span>:</span>
            <span className={classes.profileDetails}>{state.website}</span>
          </div>
          <hr style={{ margin: "10px 0px" }} />

          <Typography variant="h6" color="#9a9a9a" textAlign="center">
            Company
          </Typography>

          <div className={classes.profileCompany}>
            <Typography color="#9a9a9a" variant="h6">
              Name
            </Typography>
            <span>:</span>
            <span className={classes.profileDetails}>{state.company.name}</span>
          </div>

          <div className={classes.profileCompany}>
            <Typography color="#9a9a9a" variant="h6">
              catchphrase
            </Typography>
            <span>:</span>
            <span className={classes.profileDetails}>
              {state.company.catchPhrase}
            </span>
          </div>

          <div className={classes.profileCompany}>
            <Typography color="#9a9a9a" variant="h6">
              bs
            </Typography>
            <span>:</span>
            <span className={classes.profileDetails}>{state.company.bs}</span>
          </div>
        </Stack>

        <div className={classes.emptyBorder}></div>
        <Stack>
          <Stack className={classes.addressContainer}>
            <Typography color="#9a9a9a" variant="h6">
              Address:
            </Typography>

            <div className={classes.profileContainer}>
              <div className={classes.address}>
                <Typography color="#9a9a9a" variant="h6">
                  Street
                </Typography>
                <span>:</span>
                <span className={classes.profileDetails}>
                  {state.address.street}
                </span>
              </div>
              <div className={classes.address}>
                <Typography color="#9a9a9a" variant="h6">
                  Suite{" "}
                </Typography>
                <span>:</span>
                <span className={classes.profileDetails}>
                  {state.address.suite}
                </span>
              </div>
              <div className={classes.address}>
                <Typography color="#9a9a9a" variant="h6">
                  City{" "}
                </Typography>
                <span>:</span>
                <span className={classes.profileDetails}>
                  {state.address.city}
                </span>
              </div>
              <div className={classes.address}>
                <Typography color="#9a9a9a" variant="h6">
                  Zipcode
                </Typography>
                <span>:</span>
                <span className={classes.profileDetails}>
                  {state.address.zipcode}
                </span>
              </div>
            </div>
          </Stack>

          <img
            style={{ borderRadius: "30px", margin: "10px 0px 10px 20px" }}
            src={googlemap}
            alt="googlemap"
            height="320px"
            width="560px"
          />

          <Stack direction="row" spacing={2} sx={{ justifyContent: "end" }}>
            <Typography variant="subtitle2" color="#c0c0c0">
              Lat:{" "}
              <span className={classes.profilegeo}>
                {state.address.geo.lat}
              </span>
            </Typography>
            <Typography variant="subtitle2" color="#c0c0c0">
              Lng:{" "}
              <span className={classes.profilegeo}>
                {state.address.geo.lng}
              </span>
            </Typography>
          </Stack>
        </Stack>
      </div>
    );
}

export default Singlecard;
