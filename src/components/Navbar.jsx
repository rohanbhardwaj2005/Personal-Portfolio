import { links } from "../data";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav
        className="hero-bar bg-emerald-100 dark:bg-1E1E1E navbar"
        style={{ fontFamily: "Josefin Sans" }}
      >
        <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
          <h2
            className="text-3xl font-bold cursor-pointer light:text-333333 dark:text-gray"
            style={{ marginRight: "10px" }}
            onClick={toggleDarkMode}
          >
            Web<span className="text-emerald-600">Dev</span>
          </h2>
          <div
            className="flex justify-end gap-x-8 w-full text-2xl"
            style={{ marginTop: "-40px" }}
          >
            <button className="menu-button sm:hidden" onClick={toggleSidebar}>
              Menu
            </button>
            <div className="navbar-links hidden sm:flex">
              {links.map((link) => {
                const { id, href, text } = link;
                return (
                  <a
                    key={id}
                    href={href}
                    className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300 light:text-333333 dark:text-gray"
                    style={{
                      fontFamily: "Josefin Sans",
                      marginRight: "30px",
                      marginTop: "35px",
                    }}
                    target={
                      href === "https://solo-narrative.onrender.com/"
                        ? "_blank"
                        : "_self"
                    }
                    rel={
                      href === "https://solo-narrative.onrender.com/"
                        ? "noopener noreferrer"
                        : ""
                    }
                    onClick={(e) => {
                      if (href === "https://solo-narrative.onrender.com/") {
                        e.preventDefault();
                        window.open(href, "_blank", "noopener,noreferrer");
                      }
                    }}
                  >
                    {text}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button onClick={toggleSidebar}>X</button>
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a
              key={id}
              href={href}
              className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300 light:text-333333 dark:text-gray-300"
              style={{ fontFamily: "Josefin Sans" }}
              target={
                href === "https://solo-narrative.onrender.com/"
                  ? "_blank"
                  : "_self"
              }
              rel={
                href === "https://solo-narrative.onrender.com/"
                  ? "noopener noreferrer"
                  : ""
              }
              onClick={(e) => {
                if (href === "https://solo-narrative.onrender.com/") {
                  e.preventDefault();
                  window.open(href, "_blank", "noopener,noreferrer");
                  toast.success("Visiting the blogs page");
                }
                setSidebarOpen(false);
              }}
            >
              {text}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
