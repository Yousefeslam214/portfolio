import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect } from "react"; // Import useEffect
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const dataFromLocalStorage = localStorage.getItem("mode")
    ? JSON.parse(localStorage.getItem("mode"))
    : false;
  console.log(dataFromLocalStorage + " recive");
  const [isDarkMode, setDarkMode] = useState(!dataFromLocalStorage);

  // Function to set dark mode theme
  const setDark = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  // Function to set light mode theme
  const setLight = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = (e) => {
    e.preventDefault();
    // if (e.target.checked) {
    //   setDark();
    // } else {
    //   setLight();
    // }
    // e.target.checked = !e.target.checked;
    setDarkMode(!isDarkMode);
    console.log(JSON.stringify(isDarkMode) + " send");
    localStorage.setItem("mode", JSON.stringify(isDarkMode));
  };
  useEffect(() => {
    // Set the initial theme based on isDarkMode
    if (isDarkMode) {
      setDark();
    } else {
      setLight();
    }
  }, [isDarkMode]); // Update the theme whenever isDarkMode changes

  return (
    <header className="nav">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">
            Yousef <span>Eslam</span>
          </a>
          <div className="links">
            <div className="header__icons">
              <DarkModeSwitch
                style={{ marginBottom: "2rem" }}
                checked={isDarkMode}
                onClick={toggleTheme}
                //   size={120}
                className="bx bxs-moon"
                id="dark-mode-toggle"
              />
            </div>
            {/* <ul className="list-links">
              <li>
                <a href="#home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Projects</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
