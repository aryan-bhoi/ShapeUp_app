import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import ExercisePage from "../components/ExerciseDB";
import Footer from "../components/Footer";

const Workouts = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(to right, #4e73df, #1d5db9)", // Gradient background for the page
          padding: 2,
        }}
      >
        <Container maxWidth="md">
          <Paper
            sx={{
              padding: 5,
              borderRadius: 4,
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)", // Softer shadow for depth
              backgroundColor: "rgba(255, 255, 255, 0.95)", // Slight transparency for a modern feel
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for hover effect
              "&:hover": {
                transform: "scale(1.02)", // Slight scale effect on hover
                boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.2)", // More pronounced shadow on hover
              },
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: "700",
                marginBottom: 3,
                color: "#2c3e50", // Darker color for contrast
                fontSize: { xs: "2rem", sm: "2.5rem" }, // Responsive font size
              }}
            >
              Workout Database
            </Typography>

            <Typography
              variant="body1"
              sx={{
                marginBottom: 3,
                color: "#34495e",
                fontSize: { xs: "1rem", sm: "1.125rem" }, // Slightly larger, responsive text
                maxWidth: "80%",
                marginX: "auto",
                lineHeight: 1.6,
              }}
            >
              Discover exercises tailored to your fitness goals. Whether building strength, improving flexibility, or boosting endurance, find the perfect workout here.
            </Typography>

            <ExercisePage />
          </Paper>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Workouts;
