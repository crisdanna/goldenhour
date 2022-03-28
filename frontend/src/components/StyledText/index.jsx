import React from "react";
import { useTheme } from "@material-ui/core/styles";

const StyledText = ({ children, color }) => {
  const theme = useTheme();
  return (
    <span
      style={{ color: color || theme.palette.primary.main, fontWeight: "bold" }}
    >
      {children}
    </span>
  );
};

export default StyledText;
