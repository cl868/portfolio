import './Work.css';

export const Work = () => {
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
                            <p className="work-item-description">AI-powered social platform for discovering, sharing, and booking curated travel experiences from friends and creators.</p>
                            <a href="/souffle" className="work-item-button">Learn More</a>
                        </div>
                        <div className="work-item-image">
                            <a href="/souffle">
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
                            <a href="#contact" className="work-item-button">Learn More</a>
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