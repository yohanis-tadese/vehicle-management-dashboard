import { Link } from "react-router-dom";

const Navbar = () => {
  const adminName = "Yohanis Tadese";

  return (
    <nav className="bg-[#FBFBFB] p-4 flex justify-between items-center border-b border-gray-300">
      <div className="text-[#515151] font-bold text-lg sm:text-xl">
        <span className="hidden lg:inline">
          <Link to="/">Vehicle Management System</Link>
        </span>
        <span className="inline lg:hidden">
          <Link to="/">VMD Dashboard</Link>
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-7 sm:items-center space-y-3 sm:space-y-0 mt-4 sm:mt-0">
        <div className="text-[#515151] font-bold text-sm">
          <Link
            to="/about"
            className="text-gray-700 border-2 border-solid border-blue-300 hover:text-white hover:bg-blue-400 px-4 py-1 rounded-md transition duration-300 ease-in-out"
          >
            About
          </Link>
        </div>

        <div className="items-center space-x-7 hidden sm:inline">
          <span className="text-black">
            Welcome, <span className="hidden lg:inline">{adminName}!</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
