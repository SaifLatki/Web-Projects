
import { BookOpen, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="w-6 h-6 text-amber-400" />
              <span className="text-lg font-bold">E-Book</span>
            </div>
            <p className="text-sm text-stone-400">
              Your gateway to endless reading. Discover stories that inspire, educate, and entertain.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/books" className="text-sm text-stone-400 hover:text-amber-400 transition-colors">Books</a></li>
              <li><a href="/genres" className="text-sm text-stone-400 hover:text-amber-400 transition-colors">Genres</a></li>
              <li><a href="/about" className="text-sm text-stone-400 hover:text-amber-400 transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-sm text-stone-400 hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="/privacy" className="text-sm text-stone-400 hover:text-amber-400 transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-sm text-stone-400 hover:text-amber-400 transition-colors">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-8 pt-8 text-center">
          <p className="text-sm text-stone-400">&copy; 2024 E-Book. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;