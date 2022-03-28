import React from "react";
import UserPicture from "assets/user-profile-picture.png";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

// TODO: use makeStyles to separate the styles from the code
// TODO: split this in smaller components
// TODO: find a way to make this appear in the middle without receiving style as props
const UserInformation = ({ style }) => {
  // TODO: get from the state
  const patientName = "Miguel Arcanjo dos Santos";
  const patientId = "874521658";

  return (
    <div style={style}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <img src={UserPicture} height={100} width={100} alt="profile" />
        </Grid>
        <Grid item>
          <div data-testid="patient-name" style={{ color: "#212B89" }}>
            {patientName}
          </div>
        </Grid>
        <Grid item>
          <div data-testid="patient-id" style={{ color: "#0165B6" }}>
            ID: {patientId}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

UserInformation.propTypes = {
  style: PropTypes.object
}

export default UserInformation;
