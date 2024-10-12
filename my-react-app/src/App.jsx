
import React from 'react';
import ReviewCard from './components/ReviewCard';
import image1 from './components/images/image.jpg'; 
import image2 from './components/images/image2.jpg';
import image3 from './components/images/image3.jpg';
import './App.css';

const App = () => {
  const reviews = [
    {
     image: image1,
      name: 'Austin Conley',
      review: 'This is a very nice lunch place. Food was delicious. Service was good as well',
      rating: 4,
    },
    {
      image: image2,
      name: 'Jane Doe',
      review: 'Great ambiance and the food was tasty. Would recommend to my friends.',
      rating: 5,
    },
    {
     image: image3,
      name: 'John Smith',
      review: 'Good place but service could be faster. Still, had a pleasant experience.',
      rating: 4,
    },
  ];

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          image={review.image}
          name={review.name}
          review={review.review}
          rating={review.rating}
        />
      ))}
    </div>
  );
};

export default App;
