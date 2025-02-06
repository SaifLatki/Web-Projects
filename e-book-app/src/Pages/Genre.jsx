
const Genre = () => {
  const genres = [
    { name: "Fiction", image: "https://media.istockphoto.com/id/515522497/photo/worlds-of-magic-and-mystery-lie-within-its-pages.jpg?s=2048x2048&w=is&k=20&c=gN96T5ssLsidjL1lIBJuEWkyIFVfhiFALJf5p69nv-w=" },
    { name: "Mystery", image: "https://media.istockphoto.com/id/161962059/photo/pressed-four-leaf-clover-in-ancient-book-pinocchio.jpg?s=2048x2048&w=is&k=20&c=OII2SuBRsmsVqcJaGlv19arm0ar1I5QIJNXsTsP0ngw=" },
    { name: "Science Fiction", image: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Fantasy", image: "https://media.istockphoto.com/id/1893527682/photo/woman-standing-in-front-of-glowing-portals.webp?a=1&b=1&s=612x612&w=0&k=20&c=XPkwlWDRxXwnMMveFmQgarl4UXrtXMvb6tas68-7DKs=" },
    { name: "Non-Fiction", image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5vbiUyMGZpY3Rpb258ZW58MHx8MHx8fDA%3D" },
    { name: "Romance", image: "https://images.unsplash.com/photo-1542311222-5632cf0e6c51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvbWFuY2V8ZW58MHx8MHx8fDA%3D" },
    { name: "Horror", image: "https://images.unsplash.com/photo-1567263361507-83f755d9fa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9ycm9yfGVufDB8fDB8fHww" },
    { name: "Thriller", image: "https://images.unsplash.com/photo-1633266841047-719b5f737149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRocmlsbGVyfGVufDB8fDB8fHww" },
  ];

  return (
    <div className="container  py-16 px-4  w-full bg-slate-500">
      <h1 className="text-4xl font-bold text-center text-white mb-10">Explore Book Genres</h1>
      <div className="grid grid-cols-1 bg-zinc-300 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {genres.map((genre, index) => (
          <div key={index} className="bg-slate-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={genre.image} alt={genre.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold  text-white">{genre.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;