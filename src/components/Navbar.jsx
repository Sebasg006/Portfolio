import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo.png"
import { navItems } from "../constants"

const Navbar = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-11 w-16 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">My portfolio</span>
          </div>

          {/* Links grandes (desktop) */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">Sign in</a>
            <a href="#" className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md">
              Sign up
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
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="py-2 px-3 border rounded-md">Sign in</a>
              <a href="#" className="py-2 px-3 border rounded-md bg-gradient-to-r from-green-500 to-green-800">
                Sign up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
