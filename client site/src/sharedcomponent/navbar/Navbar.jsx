import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { useState } from "react";
import Custom from "../custom/Custom";

const Navbar = () => {
  const { users, logOut } = Custom();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/homepost", label: "Add Category" },
    { to: "/myarts", label: "My Arts" },
    { to: "/allart", label: "All Art" },
    { to: "/about", label: "About" },
    { to: "/useradddata", label: "Add Craft Item" },
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide text-[#AE9467]">
            Art<span className="text-black">Gallery</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navItems.slice(0, 3).map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `transition hover:text-[#AE9467] ${
                      isActive ? "text-[#AE9467] font-semibold" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Dropdown */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#AE9467]">
                <span>More</span>
                <FaChevronDown className="text-xs mt-0.5" />
              </div>
              <ul className="absolute left-0 top-8 w-48 rounded-xl bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {navItems.slice(3).map((item) => (
                  <li key={item.to} className="px-4 py-2 hover:bg-gray-100">
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* User Desktop */}
            {users ? (
              <div className="hidden lg:block relative group">
                <img
                  src={users.photoURL}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                />
                <div className="absolute right-0 mt-3 w-64 rounded-xl bg-white shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <p className="font-semibold">{users.displayName}</p>
                  <p className="text-xs text-gray-500">{users.email}</p>
                  <button
                    onClick={logOut}
                    className="mt-3 w-full rounded-lg bg-[#AE9467] py-1.5 text-sm text-white"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/signin"
                className="hidden lg:block text-2xl text-black hover:text-[#AE9467]"
              >
               <PiSignInBold />

              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-xl text-gray-700"
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* RIGHT SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav className="p-5 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${
                  isActive ? "text-[#AE9467]" : "text-gray-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* User Section Mobile */}
          <div className="pt-6 border-t">
            {users ? (
              <>
                <p className="font-semibold">{users.displayName}</p>
                <p className="text-xs text-gray-500 mb-3">{users.email}</p>
                <button
                  onClick={logOut}
                  className="w-full rounded-lg bg-[#AE9467] py-2 text-sm text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signin"
                onClick={() => setOpen(false)}
                className="block text-center rounded-lg bg-gray-900 py-2 text-white"
              >
                Sign In
              </Link>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
