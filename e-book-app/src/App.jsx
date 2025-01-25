import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import BookCard from './components/BookCard';

function App() {
  const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/7aaca79345603.560ccc2167278.jpg',
      price: '$10.99',
      rating: 4.5,
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      image: 'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg',
      price: '$8.99',
      rating: 4.8,
    },
    {
      title: '1984',
      author: 'George Orwell',
      image: 'https://thewonk.in/wp-content/uploads/2024/02/ninteen-eighty-four-book-review.jpg',
      price: '$9.99',
      rating: 4.7,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <BookCard 
              key={index}
              title={book.title}
              author={book.author}
              image={book.image}
              price={book.price}
              rating={book.rating}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
