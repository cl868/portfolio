import './Work.css';
import { Link, useNavigate } from 'react-router-dom';

export const Work = () => {
    const navigate = useNavigate();
    const handleSouffleClick = (e) => {
        e.preventDefault();
        navigate('souffle');
        window.scrollTo({ top: 0, behavior: 'instant' });
    };
    const handleContactClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // fallback: navigate to home and scroll after render
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    };
    return (
        <section id="work" className="work-section">
            <div className="work-container">
                {/* Portfolio Item 1 */}
                <div className="work-item">
                    <div className="work-item-content">
                        <div className="work-item-text">
                            <div className="work-item-subtitle">WEB | Gen-AI | B2B</div>
                            <h3 className="work-item-title">AI MELODY</h3>
                            <p className="work-item-description">Creative platform that empowers artists to generate, share, and collaborate on music using AI-powered tools</p>
                            <a href="https://medium.com/@0203clee/ai-melody-d8146a2e9b45" target="_blank" rel="noopener noreferrer" className="work-item-button">Learn More</a>
                        </div>
                        <div className="work-item-image">
                            <a href="https://medium.com/@0203clee/ai-melody-d8146a2e9b45" target="_blank" rel="noopener noreferrer">
                                <img src="/AI Melody.png" alt="AI Melody" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Portfolio Item 2 - SOUFFLE (moved up) */}
                <div className="work-item">
                    <div className="work-item-content">
                        <div className="work-item-text">
                            <div className="work-item-subtitle">MOBILE | Gen-AI | B2C</div>
                            <h3 className="work-item-title">SOUFFLÉ</h3>
                            <p className="work-item-description">AI-powered social platform for discovering, sharing, and booking curated travel experiences from friends and creators</p>
                            <button className="work-item-button" onClick={handleSouffleClick}>Learn More</button>
                        </div>
                        <div className="work-item-image">
                            <a href="#" onClick={handleSouffleClick}>
                                <img src="/Souffle.png" alt="Souffle" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Portfolio Item 3 - CHEL (moved down) */}
                <div className="work-item">
                    <div className="work-item-content">
                        <div className="work-item-text">
                            <div className="work-item-subtitle">MOBILE | AI | B2C</div>
                            <h3 className="work-item-title">CHEL</h3>
                            <p className="work-item-description">Fashion investment platform that helps users track, value, and strategically resell their wardrobe, powered by AI</p>
                            <button className="work-item-button" onClick={handleContactClick}>Learn More</button>
                        </div>
                        <div className="work-item-image">
                            <a href="#contact">
                                <img src="/CHEL.png" alt="CHEL" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Portfolio Item 4 - CHELCI (moved down)
                <div className="work-item">
                    <div className="work-item-content">
                        <div className="work-item-text">
                            <div className="work-item-subtitle">DESIGN | BRANDING</div>
                            <h3 className="work-item-title">CHELCI</h3>
                            <p className="work-item-description">Showcasing design and branding work for fashion industry clients.</p>
                            <a href="https://dribbble.com/chelci-lee" target="_blank" rel="noopener noreferrer" className="work-item-button">Learn More</a>
                        </div>
                        <div className="work-item-image">
                            <a href="https://dribbble.com/chelci-lee" target="_blank" rel="noopener noreferrer">
                                <img src="/your-image3.jpg" alt="Fashion Brand" />
                            </a>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </section>
    );
}; 