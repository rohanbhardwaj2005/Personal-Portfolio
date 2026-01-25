import { links } from "../data";
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "bg-transparent py-6"
          }`}
      >
        <div className="align-element flex justify-between items-center">
          <a href="#home" className="text-3xl font-bold tracking-wider hover:text-emerald-500 transition-colors duration-300">
            Web<span className="text-emerald-500">Dev</span>
          </a>

          <div className="hidden sm:flex items-center gap-x-8">
            <div className="flex gap-x-8">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="capitalize text-lg tracking-wide hover:text-emerald-500 transition-colors duration-300 relative group"
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                >
                  {link.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-slate-700 text-xl" />}
            </button>
          </div>

          <div className="sm:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2"
            >
              {darkMode ? <FaSun className="text-yellow-400 text-lg" /> : <FaMoon className="text-slate-700 text-lg" />}
            </button>
            <button className="text-2xl text-emerald-600 focus:outline-none" onClick={() => setSidebarOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={() => setSidebarOpen(false)} className="text-2xl text-red-500 hover:text-red-600 transition-colors">
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col items-center gap-y-8 mt-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-xl font-medium tracking-wide hover:text-emerald-500 transition-colors"
              onClick={() => setSidebarOpen(false)}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
            >
              {link.text}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
