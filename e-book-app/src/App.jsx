import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import BookCard from './components/BookCard';
import About from './Pages/About';

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
      <Router>
        <Navbar />
        <Routes>
          <main className="flex-grow">
            <Route path="/" element={<Home />} />
            <Route path="/books" element={books.map((book, index) => (
              <BookCard 
                key={index}
                title={book.title}
                author={book.author}
                image={book.image}
                price={book.price}
                rating={book.rating}
              />
            ))}/>
            <Route path="/genres" element={<BookCard />} />
            <Route path="/about" element={<About />} />
          </main>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
