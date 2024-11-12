import React from "react";
import { Box, Container, Typography } from "@mui/material";
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
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f0f4f8", // Light grayish-blue background for better contrast
          backgroundImage: "url('/path-to-background-image.jpg')", // Add a subtle background pattern or gradient image
          backgroundSize: "cover",
          backgroundAttachment: "fixed", // Parallax effect on scroll
          textAlign: "center",
          padding: "20px",
          paddingTop: "80px",
          boxSizing: "border-box",
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#333", // Darker text color for improved readability
              marginBottom: 3,
              fontSize: { xs: "2rem", sm: "2.5rem" },
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Nutrition Checker
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#555", // Slightly lighter for contrast with the header
              marginBottom: 4,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              fontWeight: "300",
              maxWidth: "600px",
              marginX: "auto",
              lineHeight: 1.6,
            }}
          >
            Quickly check the nutritional value of any food, including calories, fat,
            protein, and carbohydrates. Enter your food details below to get started.
          </Typography>
        </Container>

        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)", // Softer shadow for depth
            padding: { xs: "20px", sm: "40px" },
            margin: "0 auto",
            marginTop: "20px",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)", // Slight hover effect for interactivity
            },
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
