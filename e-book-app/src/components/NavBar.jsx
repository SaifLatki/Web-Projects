import { Link } from 'react-router-dom'
import { useState } from 'react';
import { BookOpen, Search, User, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-yellow-400" />
            <Link to="/" className="text-lg font-bold">E-Book</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/books" className="text-sm hover:text-yellow-400 transition-colors">Books</Link>
            <Link to="/genres" className="text-sm hover:text-yellow-400 transition-colors">Genres</Link>
            <Link to="/about" className="text-sm hover:text-yellow-400 transition-colors">About</Link>
          </div>

          <div className="flex items-center space-x-4 relative">
              <button
                className="p-2 hover:text-yellow-400 transition-colors"
                onClick={() => setShowInput(!showInput)}
              >
                <Search className="w-5 h-5" />
              </button>

              {showInput && (
                <div className="absolute top-full  mt-2 bg-slate-900 border border-gray-700 text-black shadow-md p-2 rounded-md">
                  <input
                    type="text"
                    className="w-40 p-1 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Search..."
                  />
                </div>
              )}
          
            <button className="p-2 hover:text-yellow-400 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          <div>
            <button className="hidden md:block p-2 hover:text-yellow-400 transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <Link to="/books" className="hover:text-yellow-400 transition-colors">Books</Link>
              <Link to="/genres" className="hover:text-yellow-400 transition-colors">Genres</Link>
              <Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
