
import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface LoadingIndicatorProps {
  message?: string; // Optional message prop
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px" // Adjust as needed
      textAlign="center"
    >
      <CircularProgress />
      {message && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingIndicator;
