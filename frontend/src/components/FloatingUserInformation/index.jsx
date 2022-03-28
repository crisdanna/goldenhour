import React from "react";
import UserInformation from "components/UserInformation";

const FloatingUserInformation = () => {
    return (
      <div
        style={{
          position: "fixed",
          zIndex: 99,
          top: 0,
          left: 0,
          width: "100vw",
          height: "20vh",
        }}
      >
        <UserInformation
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, 60%)",
          }}
        />
      </div>
    ); 
  };
export default FloatingUserInformation  