import React from "react";
import LogoUrl from "assets/logo.png";
import { Icon } from "@material-ui/core";
import PropTypes from "prop-types";

const Header = ({ backgroundImage }) => {
  return (
    <div
      style={{
        backgroundColor: "#cccccc",
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "20vh",
      }}
    >
      <div style={{ position: "absolute", left: "5%" }}>
        <Icon style={{ height: 100 }}>
          {/* TODO: add an alt to the icon (is this needed? ) */}
          <img src={LogoUrl} height={100} alt="" />
        </Icon>
      </div>
    </div>
  );
};

Header.propTypes = {
  /** URL of the image */
  backgroundImage: PropTypes.string,
};
export default Header;
