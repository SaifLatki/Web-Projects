
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-orange-200 text-orange-500 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Hinckley Finest</h3>
            <p className="text-sm text-gray-700">The Tasty House</p>
            <p className="text-sm text-gray-700 mt-1">Trading Since: April 2020</p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-3">Contact</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-700 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Priestpopple, Hexham, Northumberland, NE46 1PH
              </p>
              <p className="text-sm text-gray-700 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                0141 611 3058
              </p>
              <p className="text-sm text-gray-700 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                clearbusinessbyadrian@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-700 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-700 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-700 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-xs text-gray-700">&copy; 2024 Hinckley Finest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;