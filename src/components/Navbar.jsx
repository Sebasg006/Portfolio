import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  };

  // 👇 función que maneja el scroll suave
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setmobileDrawerOpen(false); // cierra el menú móvil después de hacer clic
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight">My portfolio</span>
          </div>

          {/* Links grandes (desktop) */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botones derechos (desktop) */}
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="py-2 px-3 border rounded-md hover:border-green-500 transition"
            >
              Contact
            </a>
            <a
              href="https://github.com/Sebasg006"
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md text-white"
            >
              GitHub
            </a>
          </div>

          {/* Botón móvil */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Drawer móvil */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-white text-lg hover:text-green-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="py-2 px-3 border rounded-md text-white hover:border-green-400"
              >
                Contact
              </a>
              <a
                href="https://github.com/Sebasg006"
                target="_blank"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
