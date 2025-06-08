import './About.css';

export const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-text-container">
                        <h2 className="about-heading">ABOUT ME</h2>
                        <p className="about-paragraph">
                            I am a software engineer with a background in full stack development, passionate about building functional digital experiences. I graduated from Cornell University with a degree in Computer Science, where I built a strong foundation in software engineering, systems thinking, and human-centered design.
                            <br /><br />
                            I bring a unique blend of expertise across software engineering, project management, and business analysis, allowing me to approach projects with both technical depth and strategic vision. With hands-on experience in UI/UX design, product strategy, and web development, I bring a multidisciplinary approach to solving real-world problems. I've led the design and development of end-to-end digital products, translating user insights into elegant interfaces and production-ready code.
                            <br /><br />
                            With a strong focus on UX design and frontend web development, I bridge the gap between user needs and technical implementation, ensuring that every product I touch is not only built right, but built smart.
                            <br /><br />
                            
                        </p>
                        
                        <div className="skills-section">
                            <h3 className="skills-heading">SKILLS</h3>
                            <div className="skills-grid">
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Development</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Python</span>
                                        <span className="skill-tag">Java</span>
                                        <span className="skill-tag">React</span>
                                        <span className="skill-tag">Node.js</span>
                                        <span className="skill-tag">HTML/CSS</span>
                                        <span className="skill-tag">Swift</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Design</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag2">Figma</span>
                                        <span className="skill-tag2">UI/UX Design</span>
                                        <span className="skill-tag2">Prototyping</span>
                                        <span className="skill-tag2">Wireframing</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Tools</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag3">Github</span>
                                        <span className="skill-tag3">JIRA</span>
                                        <span className="skill-tag3">Trello</span>
                                        <span className="skill-tag3">Slack</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-image-container">
                        <img 
                            src="/profile.jpg"
                            alt="Chelci Lee" 
                            className="about-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
