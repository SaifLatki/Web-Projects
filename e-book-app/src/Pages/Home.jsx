

const Home = () => {
  return (
    <div className="bg-stone-700 from-blue-100 to-blue-200 min-h-screen">
        <div
        className="container mx-auto px-4 py-16 text-center bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/8546475/pexels-photo-8546475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            height: '100vh',
            padding: '10px',
        }}
        >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold text-white mb-6">Welcome to E-Book App</h1>
            <p className="text-xl text-gray-200 mb-8">
            Your gateway to endless reading. Explore thousands of eBooks across various genres and enjoy reading anywhere, anytime.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition duration-300">
            Start Reading
            </button>
        </div>
        </div>

      {/* Featured Books Section */}
      <div className="bg-Neutral-200 from-purple-100 to-purple-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md">
                <div className="bg-purple-300 h-48 rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold text-purple-800">Book Title</h3>
                <p className="text-purple-700 mt-2">Author Name</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Famous Books Section */}
      <div className="bg-zinc-500 from-green-100 to-green-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-green-900 mb-6">Famous Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md">
                <div className="bg-green-300 h-48 rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold text-green-800">Famous Book Title</h3>
                <p className="text-green-700 mt-2">Famous Author Name</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Genre Section */}
      <div className="bg-stone-400 from-pink-100 to-pink-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-pink-900 mb-6">Genres</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['Fiction', 'Non-fiction', 'Mystery', 'Fantasy', 'Romance', 'Science Fiction', 'Biography', 'Thriller'].map((genre, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-pink-800">{genre}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
