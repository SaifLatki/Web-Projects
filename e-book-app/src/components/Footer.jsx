
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">E-Book App</h2>
            <p>Your gateway to endless reading. Explore thousands of eBooks across various genres and enjoy reading anywhere, anytime.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/e-book-app/src/Pages/Home.jsx" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Categories</a></li>
              <li><a href="#" className="hover:underline">Bestsellers</a></li>
              <li><a href="#" className="hover:underline">New Releases</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p>Sign up for our newsletter to get the latest updates and offers.</p>
            <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white p-2 rounded-md w-full mt-4" />
            <button className="bg-green-600 text-white py-2 px-4 rounded-md mt-2">Subscribe</button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2025 E-Book App. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
