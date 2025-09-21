import React from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

type NavLink = {
  id: number;
  name: string;
  link: string;
};

const NavLinks: NavLink[] = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "Feature",
    link: "#features",
  },
  {
    id: 3,
    name: "Profile",
    link: "#profile",
  },
  {
    id: 4,
    name: "Download",
    link: "#download",
  },
];

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-white/80 dark:bg-black/80 backdrop-blur text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" className="h-16" />
            <p className="text-3xl">
              Robo<span className="font-bold">Noid</span>
            </p>
          </div>
          {/* Desktop View Navbar */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              <DarkMode />
            </ul>
          </nav>
          
          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
