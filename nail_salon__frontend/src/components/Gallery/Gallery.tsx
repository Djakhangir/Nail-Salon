import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Card, CardContent, Typography } from '@mui/material';
import './Gallery.css';

const galleryItems = [
  { image: '', description: 'Lorem ipsum dolor sit amet 1' },
  { image: '', description: 'Lorem ipsum dolor sit amet 2' },
  { image: '', description: 'Lorem ipsum dolor sit amet 3' },
  { image: '', description: 'Lorem ipsum dolor sit amet 4' },
  { image: '', description: 'Lorem ipsum dolor sit amet 5' },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // 1 slide moves at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Gallery: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleFlip = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <Box id="gallery" className="gallery-section">
      <Typography variant="h4" gutterBottom>Gallery</Typography>
      <Carousel responsive={responsive}
        infinite={true}
        autoPlay={false}
        customTransition="all 0.5s"
        itemClass="carousel-item-padding"
        arrows={true}
        renderButtonGroupOutside={true}>
        {galleryItems.map((item, index) => (
          <Card
            key={index}
            className={`gallery-card ${flippedCards.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
          >
            <Box className="card-inner">
              <Box className="card-front">
                <Typography variant="h6">Alt Image {index + 1}</Typography>
              </Box>
              <Box className="card-back">
                <CardContent>
                  <Typography variant="body1">
                    {item.description}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default Gallery;
