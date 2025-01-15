import { Heart, Star } from 'lucide-react';
import PropTypes from 'prop-types'; // Import PropTypes for validation

const BookCard = ({ title, author, image, price, rating }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="aspect-[3/4] rounded-t-2xl overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <button 
        className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   hover:bg-white hover:scale-110"
      >
        <Heart className="w-4 h-4 text-stone-600" />
      </button>
      <div className="p-4">
        <div className="flex items-center space-x-1 mb-2">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm text-stone-600">{rating}</span>
        </div>
        <h3 className="font-medium text-stone-900 mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-stone-600 mb-3">{author}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-amber-600">{price}</span>
          <button className="bg-stone-900 text-white text-sm px-4 py-2 rounded-full 
                           hover:bg-stone-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the component
BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default BookCard;
