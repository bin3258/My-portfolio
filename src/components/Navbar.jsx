import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef();

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
                <div
                    className="hamburger"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {isOpen ? <FiX size={28} color="#ffffff" /> : <FiMenu size={28} color="#ffffff" />}
                </div>
            </div>
        </header>
    );
};

export default Navbar;