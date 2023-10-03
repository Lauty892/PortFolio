import { useState } from "react";
import "./navBar.css";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  { id: 0, name: "home" },
  { id: 1, name: "skills" },
  { id: 2, name: "works" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleNav = (name) => {
    setIsMenuOpen(!isMenuOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  return (
    <div className="navbar">
      <nav className="container">
        <div className="logo">PortFolio</div>

        <button onClick={toggleNav} className="hamburger">
          {isMenuOpen ? <RxCross2 size={25} /> : <HiMenu size={25} />}
        </button>

        <ul className={`nav-links-dropdown ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a onClick={toggleNav} href={`#${item.name}`}>
                {item.name}
              </a>
            </li>
          ))}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/lautaro-bascoy-34586126a/"
          >
            HIRE ME
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
