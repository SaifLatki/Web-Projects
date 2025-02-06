const About = () => {
  return (
    <div className="bg-gradient-to-t from-indigo-300 to-indigo-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-gray-500 to-slate- text-zinc-500 py-10 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold tracking-wide p-5">About Us</h1>
          <p className="text-lg mt-2 max-w-2xl mx-auto opacity-90">
            Discover our mission, values, and why we are passionate about e-books.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Who We Are Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-500 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We’re dedicated to creating a seamless and enjoyable reading experience. Our e-book platform provides an
            extensive collection of books, intuitive features, and tools designed for book lovers.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-purple-500 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              We aim to revolutionize digital reading by offering a vast library, advanced reading tools, and a
              community-driven experience. Whether you are an avid reader or just beginning, our platform is built for
              you.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Mission Illustration"
              className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-auto transform hover:scale-105 transition duration-300"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-400 rounded-2xl shadow-md p-12 mb-16">
          <h3 className="text-3xl font-semibold text-purple-100 mb-8 text-center">What We Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { title: "Vast Library", desc: "Access a variety of genres at your fingertips." },
              { title: "Personalized Reading", desc: "Tailor your experience with bookmarks and highlights." },
              { title: "Offline Access", desc: "Download books and read anywhere, even offline." },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-blue-100 to-purple-300 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-semibold text-purple-500 mb-2">{feature.title}</h4>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center mb-16">
          <h3 className="text-3xl font-semibold text-blue-500 mb-6">Meet the Team</h3>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Our passionate developers and book enthusiasts work tirelessly to bring you the best e-reading experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Alice", "Bob", "Charlie"].map((name, index) => (
              <div
                key={index}
                className="p-6 bg-stone-300 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="bg-gradient-to-r from-blue-400 to-purple-200 h-40 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Member{index + 1}</span>
                </div>
                <h4 className="text-lg font-semibold text-purple-600">{name}</h4>
                <p className="text-gray-700">Lead Developer</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-3xl font-semibold text-sky-800 mb-4">Join Us</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Become part of our growing community and experience the joy of reading like never before.
          </p>
          <a
            href="/signup"
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 px-8 rounded-xl shadow-md hover:scale-x-105 transition duration-300"
          >
            Get Started
          </a>
        </section>
      </main>
    </div>
  );
};

export default About;
