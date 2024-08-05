import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { tokens } from '../theme';
import { FaUserCircle } from 'react-icons/fa';

function FeedbackCard({ name, rating, comment }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      borderBottom={`1px solid ${colors.grey[600] || '#A9A9A9'}`} // Fallback color
      mb="15px"
      pb="15px"
      display="flex"
      alignItems="center"
      gap="1rem"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="60px"
        height="60px"
        borderRadius="50%"
        bgcolor={colors.grey[200] || '#F0F0F0'}
      >
        <FaUserCircle size={40} color={colors.grey[600] || '#A9A9A9'} />
      </Box>
      <Box flexGrow={1}>
        <Typography fontWeight="bold" color={colors.greenAccent || '#00FF00'}>
          {name}
        </Typography>
        <Box display="flex" alignItems="center" mb="5px">
          {[...Array(rating)].map((_, i) => (
            <StarIcon key={i} sx={{ color: colors.yellow || '#FFD700' }} />
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <StarIcon key={i} sx={{ color: colors.grey[600] || '#A9A9A9' }} />
          ))}
        </Box>
        <Typography color={colors.grey[100] || '#FFF'}>
          {comment}
        </Typography>
      </Box>
    </Box>
  );
}

export default FeedbackCard;
