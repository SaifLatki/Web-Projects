import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import BookCard from './components/BookCard';

function App() {
  const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      image: '/images/gatsby.jpg',
      price: '$10.99',
      rating: 4.5,
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      image: '/images/mockingbird.jpg',
      price: '$8.99',
      rating: 4.8,
    },
    {
      title: '1984',
      author: 'George Orwell',
      image: '/images/1984.jpg',
      price: '$9.99',
      rating: 4.7,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
