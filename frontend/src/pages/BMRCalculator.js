import React from "react";
import { Box, Typography } from "@mui/material";
import CalorieCalculator from "../components/CalorieCalculator";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";

const BMRCalculator = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh", // Full screen height
          background: "linear-gradient(135deg, #4e73df, #1f3a8b)", // Blue gradient background
          textAlign: "center",
          padding: "20px",
          borderRadius: "15px", // Rounded corners for a smoother look
        }}
      >
        {/* Container for the text and form */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px", // Max width of the box
            background: "#fff", // White background
            borderRadius: "10px", // Rounded corners
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Shadow for depth
            padding: "40px", // Padding inside the white box
            margin: "0 auto", // Center horizontally
            marginTop: "20px", // Margin between the title/description and the form
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#4e73df", // Blue text for contrast
              marginBottom: 4,
              fontSize: { xs: "2rem", sm: "3rem" },
              textTransform: "uppercase", // Uppercase title for a strong impact
            }}
          >
            BMR Calculator
          </Typography>
          
          <CalorieCalculator />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default BMRCalculator;
