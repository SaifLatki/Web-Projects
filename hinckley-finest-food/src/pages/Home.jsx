
import { Clock, MapPin, Phone } from 'lucide-react';

function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
          alt="Restaurant interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Hinckley Finest</h1>
            <p className="text-lg md:text-xl mb-6">The Tasty House</p>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
              Book a Table
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-base font-semibold mb-1">Opening Hours</h3>
              <p className="text-sm text-gray-600">1:00 PM to 11:00 PM</p>
              <p className="text-sm text-gray-600">7 days a week</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-base font-semibold mb-1">Location</h3>
              <p className="text-sm text-gray-600">Priestpopple, Hexham</p>
              <p className="text-sm text-gray-600">Northumberland, NE46 1PH</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Phone className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-base font-semibold mb-1">Reservations</h3>
              <p className="text-sm text-gray-600">0141 611 3058</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Traditional British Cuisine</h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              At our restaurant, we are passionate about serving up delicious, authentic British dishes 
              with a contemporary flair. From hearty pub classics to elegant fine dining options, our 
              menu is designed to showcase the best of British cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Online Ordering",
              "Reservations",
              "Takeout",
              "Delivery",
              "Catering",
              "Private Dining"
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-base font-semibold mb-2">{service}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Enjoy our exceptional service and make your dining experience memorable.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;