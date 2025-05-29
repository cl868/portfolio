import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show/hide navbar based on scroll direction
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);

            // Active section detection
            const sections = ['home', 'about', 'work', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Highlight WORK tab if on /souffle
    const effectiveActiveSection = location.pathname === '/souffle' ? 'work' : activeSection;

    return (
        <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className="container">
                {/* Logo/Name */}
                <div className="logo-container">
                    <Link to="/#home" className="logo">CHELCI LEE</Link>
                    <span className="logo-subtitle">Designer & Developer</span>
                </div>

                {/* Desktop Navigation */}
                <div className="nav-links">
                    <Link to="/#about" className={`nav-link ${effectiveActiveSection === 'about' ? 'active' : ''}`}>
                        ABOUT
                    </Link>
                    <Link to="/#work" className={`nav-link ${effectiveActiveSection === 'work' ? 'active' : ''}`}>
                        WORK
                    </Link>
                    <Link to="/#contact" className={`nav-link ${effectiveActiveSection === 'contact' ? 'active' : ''}`}>
                        CONTACT
                    </Link>
                    <a href="/Resume_Changhee_Lee_.pdf" className="nav-link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#000' }}>
                        RESUME
                    </a>
                    <a href="https://github.com/cl868" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <img src="/github.svg" alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/chelci-lee/" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.svg" alt="Linkedin" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <Link to="/#about" className={`nav-link ${effectiveActiveSection === 'about' ? 'active' : ''}`}>
                        ABOUT
                    </Link>
                    <Link to="/#work" className={`nav-link ${effectiveActiveSection === 'work' ? 'active' : ''}`}>
                        WORK
                    </Link>
                    <Link to="/#contact" className={`nav-link ${effectiveActiveSection === 'contact' ? 'active' : ''}`}>
                        CONTACT
                    </Link>
                    <a href="/Resume_Changhee_Lee.pdf" className="nav-link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#000' }}>
                        RESUME
                    </a>
                    <div className="social-links">
                        <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.svg" alt="Instagram" />
                        </a>
                        <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <img src="/twitter.svg" alt="Twitter" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

