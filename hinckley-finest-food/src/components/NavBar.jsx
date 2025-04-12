import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <nav className="bg-orange-200 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
            Hinckley Finest
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/hours" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Opening Hours</Link>
            <Link to="/about" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Contact</Link>
            <Link to="/menu" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Menu</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <MenuIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-3">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/hours" className="text-sm text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsOpen(false)}>Opening Hours</Link>
              <Link to="/about" className="text-sm text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/contact" className="text-sm text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/menu" className="text-sm text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsOpen(false)}>Menu</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}