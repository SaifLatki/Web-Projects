
const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-800 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2">
            Learn more about our mission, values, and why we’re passionate about e-books.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Who We Are Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our e-book app is dedicated to providing readers with a seamless, convenient, and enjoyable way to explore
            their favorite books and discover new ones. With a passion for stories, we’ve created a platform that’s
            accessible, user-friendly, and built for book lovers everywhere.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              We aim to revolutionize the way people engage with books by offering a vast library of titles, intuitive
              features, and tools to enhance the reading experience. Whether you’re an avid reader or just getting
              started, our app is built to inspire and delight.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Mission Illustration"
              className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-auto"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-16">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">What We Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Vast Library</h4>
              <p className="text-gray-700">
                Access a wide range of genres, from fiction to self-help, at your fingertips.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Personalized Reading</h4>
              <p className="text-gray-700">
                Tailor your experience with bookmarks, highlights, and custom recommendations.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Offline Access</h4>
              <p className="text-gray-700">
                Download your favorite books to read anytime, anywhere—even offline.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Meet the Team</h3>
          <p className="text-gray-700 mb-6">
            Our team of passionate developers and book enthusiasts work tirelessly to bring you the best e-reading
            experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Replace these placeholders with actual team images */}
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-200 h-40 rounded-md mb-4"></div>
                <h4 className="text-lg font-semibold text-blue-800">Team Member {index + 1}</h4>
                <p className="text-gray-700">Role</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Join Us</h3>
          <p className="text-gray-700 mb-4">
            Become part of our growing community and experience the joy of reading like never before.
          </p>
          <a
            href="/signup"
            className="bg-blue-800 text-white py-3 px-6 rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </section>
      </main>
    </div>
  );
};

export default About;
