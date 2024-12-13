import { Link } from "react-router-dom";

const Navbar = () => {
  const adminName = "Yohanis Tadese";

  return (
    <nav className="bg-[#FBFBFB] p-4 flex justify-between items-center border-b border-gray-300 ">
      <div className="text-[#515151] font-bold text-xl">
        <Link to="/dashboard">Vehicle Management System</Link>
      </div>

      <div className="flex items-center space-x-7">
        <span className="text-black">Welcome, {adminName}!</span>
      </div>
    </nav>
  );
};

export default Navbar;
