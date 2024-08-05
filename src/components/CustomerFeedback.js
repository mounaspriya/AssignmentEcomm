import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import FeedbackCard from './Feedback';
import { tokens } from '../theme';

const feedbackData = [
  {
    name: 'Jenny Wilson',
    rating: 5,
    comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger with greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
  },
  {
    name: 'Dianne Russell',
    rating: 4,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    rating: 4,
    comment: 'Normally wings are wings, but theirs are lean meaty and tender, and the sauce has a unique spicy-sweet balance.',
  },
];

function CustomerFeedback() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box 
      backgroundColor={colors.primary[400]}
      borderRadius="8px"
      p="20px"
      mb="20px"
    >
      <Typography variant="h5" fontWeight="600" color={colors.grey[100]} mb="20px">
        Customer's Feedback
      </Typography>
      {feedbackData.map((feedback, index) => (
        <FeedbackCard
          key={index}
          name={feedback.name}
          rating={feedback.rating}
          comment={feedback.comment}
        />
      ))}
    </Box>
  );
}

export default CustomerFeedback;
