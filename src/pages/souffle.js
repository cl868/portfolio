import React from 'react';

export default function Souffle() {
    return (
        <main className="souffle-page">
            <div className="container">
                <a href="/#work" className="back-button">
                    ← Back to Work
                </a>
                
                <div className="project-header">
                    <div className="project-meta">
                        <span className="project-category">MOBILE | Gen-AI | B2C</span>
                        <h1 className="project-title">SOUFFLE</h1>
                    </div>
                </div>

                <div className="project-content">
                    <div className="project-overview">
                        <h2>Project Overview</h2>
                        <p>
                            Souffle is an innovative AI-powered social platform that revolutionizes how people discover, 
                            share, and book curated travel experiences. By leveraging artificial intelligence and social 
                            connections, Souffle creates a unique ecosystem where users can find authentic travel 
                            recommendations from friends and trusted creators.
                        </p>
                    </div>

                    <div className="project-features">
                        <h2>Key Features</h2>
                        <ul>
                            <li>AI-powered travel recommendations based on user preferences and social connections</li>
                            <li>Social sharing and discovery of curated travel experiences</li>
                            <li>Seamless booking integration with travel partners</li>
                            <li>Personalized travel itineraries and suggestions</li>
                            <li>Community-driven reviews and ratings</li>
                        </ul>
                    </div>

                    <div className="project-tech">
                        <h2>Technology Stack</h2>
                        <ul>
                            <li>React Native for cross-platform mobile development</li>
                            <li>Node.js and Express for backend services</li>
                            <li>MongoDB for data storage</li>
                            <li>TensorFlow for AI/ML capabilities</li>
                            <li>AWS for cloud infrastructure</li>
                        </ul>
                    </div>

                    <div className="project-role">
                        <h2>My Role</h2>
                        <p>
                            As the lead developer and designer, I was responsible for:
                        </p>
                        <ul>
                            <li>Architecting the mobile application and backend infrastructure</li>
                            <li>Designing the user interface and experience</li>
                            <li>Implementing AI/ML features for personalized recommendations</li>
                            <li>Managing the development team and project timeline</li>
                            <li>Coordinating with travel partners for integration</li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .souffle-page {
                    padding: 2rem;
                    min-height: 100vh;
                    background: var(--background);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                }

                .back-button {
                    display: inline-block;
                    margin-bottom: 2rem;
                    color: var(--text);
                    text-decoration: none;
                    font-family: 'Playfair Display', serif;
                    font-size: 1.1rem;
                }

                .project-header {
                    margin-bottom: 4rem;
                }

                .project-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .project-category {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #666;
                }

                .project-title {
                    font-size: 4rem;
                    font-weight: 400;
                    font-family: 'Playfair Display', serif;
                    letter-spacing: 0.05em;
                }

                .project-content {
                    display: grid;
                    gap: 4rem;
                }

                .project-content h2 {
                    font-size: 2rem;
                    font-weight: 400;
                    font-family: 'Playfair Display', serif;
                    margin-bottom: 1.5rem;
                }

                .project-content p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }

                .project-content ul {
                    list-style: none;
                    padding: 0;
                }

                .project-content li {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                    padding-left: 1.5rem;
                    position: relative;
                }

                .project-content li:before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: #666;
                }

                @media (max-width: 768px) {
                    .container {
                        padding: 1rem;
                    }

                    .project-title {
                        font-size: 3rem;
                    }

                    .project-content h2 {
                        font-size: 1.8rem;
                    }
                }
            `}</style>
        </main>
    );
} 