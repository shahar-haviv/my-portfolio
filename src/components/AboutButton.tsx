import Button from "@mui/material/Button";
import React from "react";

const AboutButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      sx={{
        position: "absolute",
        top: "20px",
        left: "20px",
        fontFamily: "Heebo",
        textTransform: "none",
        fontWeight: "bold",
        backgroundColor: "#c0fdff",
        color: "#000", // text color
        display: "flex",
        alignItems: "center",
        gap: "8px", // space between icon and text
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "all 0.3s",
        "&:hover": {
          boxShadow: "0 0 20px #c0fdff",
          backgroundColor: "#a0e5ea",
        },
      }}
      startIcon={
        <img
          src="/src/assets/cvicon.svg"
          alt="info"
          style={{ width: 20, height: 20 }}
        />
      }
    >
      About Me
    </Button>
  );
};

export default AboutButton;
