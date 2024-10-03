import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';
import './ClassDetails.css';

// Example data for classes (similar to what you'd pull from a database)
const classes = [
  {
    id: 1,
    title: 'Nail Art Techniques',
    description: 'Learn advanced nail art techniques in this comprehensive course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    content: 'Module 1: Basics of Nail Art\nModule 2: Advanced Techniques\nModule 3: Exam and Certification',
    instructor: 'Jane Doe - Nail Art Specialist',
    image: 'path_to_image_1.jpg',
  },
  {
    id: 2,
    title: 'Gel Application Mastery',
    description: 'Become a master at applying gel with this step-by-step course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    content: 'Module 1: Gel Preparation\nModule 2: Application Techniques\nModule 3: Maintenance and Removal',
    instructor: 'John Smith - Gel Expert',
    image: 'path_to_image_2.jpg',
  },
  {
    id: 3,
    title: 'Manicure and Pedicure Basics',
    description: 'Perfect the basics of manicure and pedicure in this beginner-friendly course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    content: 'Module 1: Hygiene Practices\nModule 2: Tools and Techniques\nModule 3: Customer Interaction',
    instructor: 'Sarah Johnson - Manicure and Pedicure Specialist',
    image: 'path_to_image_3.jpg',
  },
];

const ClassDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Check if the id exists before parsing it
  const classId = id ? parseInt(id) : null;
  const classInfo = classes.find((cls) => cls.id === classId);

  if (!classInfo) {
    return <Typography variant="h4">Class not found</Typography>;
  }

  return (
    <Box className="class-details-container">
      <Card className="class-details-card">
        <CardMedia component="img" height="400" image={classInfo.image} alt={classInfo.title} />
        <CardContent>
          <Typography variant="h4">{classInfo.title}</Typography>
          <Typography variant="body1" gutterBottom>
            {classInfo.description}
          </Typography>
          <Typography variant="h6">Course Content:</Typography>
          <Typography variant="body2" paragraph>
            {classInfo.content}
          </Typography>
          <Typography variant="h6">Instructor:</Typography>
          <Typography variant="body2">{classInfo.instructor}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ClassDetails;
