import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Layout() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
<div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      {/* Pass theme control to all pages */}
      <Outlet context={{ darkMode, setDarkMode }} />

      <NavBar />
    </div>
  );
}

export default Layout;
