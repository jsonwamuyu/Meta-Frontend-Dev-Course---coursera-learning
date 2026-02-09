const Navbar = () => {
  return (
    <div className="w-full bg-gray-800 text-white py-2">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-4xl font-extrabold"><span className="text-green-500">L</span><span className="white">M</span><span className="text-blue-500">P</span></h2>
        </div>
        <nav>
          <a href="" className="">Home</a>
          <a href="" className="">Assets</a>
          <a href="" className="">About</a>
        </nav>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
