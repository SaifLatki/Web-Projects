
function About() {
  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

        <div className="max-w-4xl mx-auto">
          {/* Our Story */}
          <section className="mb-10">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-bold mb-3">Our Story</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Welcome to Hinckley Finest, where food, passion, and community come together. Our story 
                began in April 2020 with a simple idea: to share delicious, homemade-style cuisine with 
                our neighbors and friends.
              </p>
            </div>
          </section>

          {/* Our Vision */}
          <section className="mb-10">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-bold mb-3">Our Vision</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We aim to create a warm and inviting space where everyone feels at home. Our chefs are 
                dedicated to crafting dishes that not only taste amazing but also use only the freshest 
                ingredients, sourced locally whenever possible.
              </p>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-base font-semibold mb-2">Quality</h3>
                <p className="text-sm text-gray-600">We are committed to serving only the best.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-base font-semibold mb-2">Community</h3>
                <p className="text-sm text-gray-600">We believe in supporting local businesses and events.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-base font-semibold mb-2">Hospitality</h3>
                <p className="text-sm text-gray-600">We strive to make every guest feel welcome and valued.</p>
              </div>
            </div>
          </section>

          {/* Cuisine */}
          <section>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-bold mb-3">Our Cuisine</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                At Hinckley Finest, we are passionate about serving up delicious, authentic British dishes 
                with a contemporary flair. From hearty pub classics to elegant fine dining options, our 
                menu is designed to showcase the best of British cuisine. Our chefs use only the freshest, 
                locally-sourced ingredients to create dishes that are both familiar and exciting.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;