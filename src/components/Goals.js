// Goals.js
import React from 'react';
import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/system";
import GoalIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { tokens } from "../theme";

const Goals = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="space-between" 
      p="20px"
      borderRadius="8px"
      //bgcolor={colors.primary[500]}
      height="140px" // Set the height of the card
    >
      <Box display="flex" alignItems="center">
        <GoalIcon sx={{ color: colors.greenAccent[600], fontSize: "30px", mr: 2 }} />
        <Typography variant="h6" color={colors.grey[100]}>
          Goals
        </Typography>
      </Box>
      <IconButton>
        <ChevronRightIcon sx={{ color: colors.grey[100], fontSize: "24px" }} />
      </IconButton>
    </Box>
  );
};

export default Goals;
