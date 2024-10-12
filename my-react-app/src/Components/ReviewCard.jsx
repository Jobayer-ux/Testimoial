
import './ReviewCard.css'; 
const ReviewCard = ({ image, name, review, rating }) => {
  return (
    <div className="review-card">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <h2>Customer Review</h2>
        <p>{review}</p>
        <div className="rating">
          {Array.from({ length: 5 }, (v, i) => (
            <span key={i} className={i < rating ? 'filled' : ''}>★</span>
          ))}
        </div>
        <p className="reviewer-name">{name}</p>
    </div>
  );
};

export default ReviewCard;
