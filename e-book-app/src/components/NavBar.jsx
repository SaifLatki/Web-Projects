import { useState } from 'react';
import { BookOpen, Search, User, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-stone-900/90 backdrop-blur-md text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-amber-400" />
            <span className="text-lg font-bold">E-Book</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm hover:text-amber-400 transition-colors">Home</a>
            <a href="/books" className="text-sm hover:text-amber-400 transition-colors">Books</a>
            <a href="/genres" className="text-sm hover:text-amber-400 transition-colors">Genres</a>
            <a href="/about" className="text-sm hover:text-amber-400 transition-colors">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-amber-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-amber-400 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="hidden md:block p-2 hover:text-amber-400 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-800">
            <div className="flex flex-col space-y-4">
              <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
              <a href="/books" className="hover:text-amber-400 transition-colors">Books</a>
              <a href="/genres" className="hover:text-amber-400 transition-colors">Genres</a>
              <a href="/about" className="hover:text-amber-400 transition-colors">About</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;