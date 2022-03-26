import React from "react";
import { ButtonBase, Grid } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import PropTypes from "prop-types";


const IconButton = ({ imageUrl, name }) => {
  return (
    <ButtonBase>
      <Grid container direction="column">
        <Grid item>
          <Icon style={{ height: 100, width: 100 }}>
            {/* TODO: add an alt to the icon (is this needed? ) */}
            <img src={imageUrl} height={100} width={100} alt="" />
          </Icon>
        </Grid>
        <Grid item style={{ color: "#0165B6" }}>
          {name}
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

IconButton.propTypes = {
  /** The url of the image to be shown */
  imageUrl: PropTypes.string.isRequired,
  /** The text of the button */
  name: PropTypes.string.isRequired,
}

export default IconButton;
