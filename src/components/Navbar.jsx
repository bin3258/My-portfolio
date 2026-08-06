import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/useTheme";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isOpen &&
                navRef.current &&
                !navRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    return (
        <header className="header">
            <div className="nav-container">
                <div className="logo">LXT</div>
                <nav
                    ref={navRef}
                    className={`navbar ${isOpen ? "active" : ""}`}
                >
                    <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/resume" onClick={() => setIsOpen(false)}>Resume</NavLink>
                    <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
                    <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
                </nav>
                <div className="nav-actions">
                    <button
                        className="theme-toggle"
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        onClick={toggleTheme}
                    >
                        {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                    <button
                        className="hamburger"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;