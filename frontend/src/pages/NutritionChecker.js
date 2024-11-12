import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

import NutritionCheckerForm from "../components/NutritionCheckerForm";
import Footer from "../components/Footer";

const NutritionChecker = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column", // Stack the content vertically
          height: "100vh", // Full screen height
          background: "linear-gradient(135deg, #4e73df, #1f3a8b)", // Blue gradient background
          textAlign: "center",
          padding: "20px",
          borderRadius: "15px", // Rounded corners for a smoother look
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#fff", // White text for contrast
              marginBottom: 4,
              fontSize: { xs: "2rem", sm: "3rem" },
              textTransform: "uppercase", // Uppercase title for a strong impact
            }}
          >
            Nutrition Checker
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff", // White text for contrast
              marginBottom: 4,
              fontSize: { xs: "1rem", sm: "1.5rem" },
              fontWeight: "300", // Lighter weight for description
            }}
          >
            Quickly check the nutritional value of any food, including calories, fat,
            protein, and carbohydrates. Enter your food details below to get started.
          </Typography>
        </Container>

        {/* Centering the white box and making it wider */}
        <Box
          sx={{
            width: "100%", // Full width up to maxWidth
            maxWidth: "1000px", // Max width of the box
            background: "#fff", // White background
            borderRadius: "10px", // Rounded corners
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Shadow for depth
            padding: "40px", // Padding inside the white box
            margin: "0 auto", // Center horizontally
            marginTop: "20px", // Margin between the title/description and the form
          }}
        >
          <NutritionCheckerForm />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default NutritionChecker;
