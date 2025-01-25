import { ChevronRight } from 'lucide-react';
import BookCard from '../components/BookCard';

const featuredBooks = [
  {
    title: "The Silent Echo",
    author: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$19.99",
    rating: 4.5
  },
  {
    title: "Beyond the Horizon",
    author: "James Cooper",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$24.99",
    rating: 4.8
  },
  {
    title: "Midnight's Whisper",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$21.99",
    rating: 4.3
  },
  {
    title: "The Lost Garden",
    author: "Thomas Wright",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$18.99",
    rating: 4.6
  }
];

const genres = [
  { name: 'Fiction', image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', count: '2.5k Books' },
  { name: 'Mystery', image: 'https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', count: '1.8k Books' },
  { name: 'Romance', image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', count: '3.2k Books' },
  { name: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', count: '1.5k Books' }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-br from-stone-900 to-stone-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-transparent" />
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Books"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Journey Through
              <span className="text-amber-400"> Stories </span>
              Begins Here
            </h1>
            <p className="text-lg text-stone-300 mb-8 max-w-xl">
              Discover a world of endless possibilities through our carefully curated collection of digital books.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-400 text-stone-900 px-6 py-2 rounded-lg font-medium hover:bg-amber-300 transition">
                Explore Books
              </button>
              <button className="border-2 border-stone-300 text-stone-300 px-6 py-2 rounded-lg font-medium hover:bg-stone-300 hover:text-stone-900 transition">
                View Categories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-1">Featured Books</h2>
              <p className="text-stone-600 text-sm">Handpicked reads you will love</p>
            </div>
            <a href="/books" className="group flex items-center text-amber-600 hover:text-amber-700 text-sm">
              Browse All 
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredBooks.map((book, index) => (
              <BookCard key={index} {...book} className="h-64" />
            ))}
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section className="py-12 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4">Popular Genres</h2>
          <p className="text-stone-600 text-sm mb-6">Find your next read by category</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {genres.map((genre, index) => (
              <div
                key={index}
                className="group relative rounded-lg overflow-hidden cursor-pointer shadow hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src={genre.image}
                    alt={genre.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-bold text-white mb-1 truncate">{genre.name}</h3>
                  <p className="text-xs text-stone-300">{genre.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
