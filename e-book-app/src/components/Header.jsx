function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg">
      <div className="flex flex-wrap justify-between items-center p-4 max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide">E-Book</h1>
        <ul className="flex gap-8 text-lg">
          <li><a href="#" className="hover:text-gray-400">Author</a></li>
          <li><a href="#" className="hover:text-gray-400">Books</a></li>
          <li><a href="#" className="hover:text-gray-400">Genre</a></li>
          <li><a href="#" className="hover:text-gray-400">Famous Books</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
