import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <div className="text-2xl font-bold tracking-wide flex items-center">
            <span className="mr-2">📚</span> E-Book
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-gray-400">Author</a>
          <a href="#" className="hover:text-gray-400">Books</a>
          <a href="#" className="hover:text-gray-400">Genre</a>
          <a href="#" className="hover:text-gray-400">Famous Books</a>
        </nav>
      <form className="hidden md:flex items-center" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-2 py-2 bg-black rounded-l-full border border-gray-600 focus:outline-none focus:border-gray-700 focus:shadow-lg transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-slate-600 text-black p-2 rounded-r-full hover:bg-gray-400 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
            />
          </svg>
        </button>
      </form>

        <button
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <nav className="flex flex-col gap-4 text-lg">
            <a href="#" className="hover:text-gray-400">Author</a>
            <a href="#" className="hover:text-gray-400">Books</a>
            <a href="#" className="hover:text-gray-400">Genre</a>
            <a href="#" className="hover:text-gray-400">Famous Books</a>
          </nav>
          <form className="mt-4 flex items-center" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-200 focus:shadow-md transition-all duration-300"
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                />
              </svg>
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
