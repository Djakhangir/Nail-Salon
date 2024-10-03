import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import './Education.css';

// Example classes data
const classes = [
  {
    id: 1,
    title: 'Nail Art Techniques',
    description: 'Learn advanced nail art techniques in this comprehensive course.',
    image: 'path_to_image_1.jpg',
  },
  {
    id: 2,
    title: 'Gel Application Mastery',
    description: 'Become a master at applying gel with this step-by-step course.',
    image: 'path_to_image_2.jpg',
  },
  {
    id: 3,
    title: 'Manicure and Pedicure Basics',
    description: 'Perfect the basics of manicure and pedicure in this beginner-friendly course.',
    image: 'path_to_image_3.jpg',
  },
];

const Education: React.FC = () => {
  return (
    <Box className="education-container">
      <Typography variant="h3" gutterBottom>
        Available Classes
      </Typography>

      <Box className="education-cards">
        {classes.map((classInfo) => (
          <Card className="education-card" key={classInfo.id}>
            <CardMedia component="img" height="200" image={classInfo.image} alt={classInfo.title} />
            <CardContent>
              <Typography variant="h5">{classInfo.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {classInfo.description}
              </Typography>
              <Button
                component={Link}
                to={`/education/${classInfo.id}`}
                variant="contained"
                color="primary"
                className="more-info-button"
              >
                More Info
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
