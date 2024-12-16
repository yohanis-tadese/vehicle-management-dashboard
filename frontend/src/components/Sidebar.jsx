import { FaTachometerAlt, FaCar, FaListAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#FBFBFB] text-[#515151] w-20 sm:w-52 min-h-screen p-6 border-r border-gray-300">
      <div className="mb-8  flex-col items-center space-y-2 lg:block hidden sm-inline ">
        <NavLink to="/">
          <div className="bg-gradient-to-r from-[#596ef9] to-[#3C7BE5] text-white text-3xl font-extrabold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            DriveHub
          </div>
        </NavLink>
      </div>

      <ul className="space-y-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` p-1.5 sm:p-2 rounded-lg flex items-center space-x-3 transition-all duration-300 ${
                isActive ? "bg-[#DDE1FF] text-[#2F4BFF]" : "hover:bg-[#F2F3FF]"
              }`
            }
          >
            <span className="text-xl">
              <FaTachometerAlt />
            </span>
            <span className="text-sm font-semibold hidden sm:inline">
              Dashboard
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-vechile"
            className={({ isActive }) =>
              `p-1.5 sm:p-2 rounded-lg flex items-center space-x-3 transition-all duration-300 ${
                isActive ? "bg-[#DDE1FF] text-[#2F4BFF]" : "hover:bg-[#F2F3FF]"
              }`
            }
          >
            <span className="text-xl">
              <FaCar />
            </span>
            <span className="text-sm font-semibold hidden sm:inline">
              Add Vehicle
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/vechiles"
            className={({ isActive }) =>
              `p-1.5 sm:p-2 rounded-lg flex items-center space-x-3 transition-all duration-300 ${
                isActive ? "bg-[#DDE1FF] text-[#2F4BFF]" : "hover:bg-[#F2F3FF]"
              }`
            }
          >
            <span className="text-xl">
              <FaListAlt />
            </span>
            <span className="text-sm font-semibold hidden sm:inline">
              List Vehicles
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
