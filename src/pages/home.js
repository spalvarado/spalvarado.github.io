import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome, I'm Samuel Alvarado</h1>
                    <p className="hero-subtitle">
                        Software Engineer | Problem Solver | Fitness Enthusiast
                    </p>
                    <p className="hero-description">
                        Passionate about building scalable applications and driving technical innovation.
                        I blend creativity with code to create meaningful digital experiences.
                    </p>
                    <div className="hero-buttons">
                        <a href="/#/experience" className="btn-primary">View My Work</a>
                        <a href="/#/contact" className="btn-secondary">Get In Touch</a>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="about-preview">
                <div className="section-header">
                    <h2 className="section-title">A Little About Me</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a bilingual software engineer with a strong foundation in full-stack
                            development, data analytics, and AI/ML. I graduated from North Carolina
                            A&T State University and have worked with companies like Accenture,
                            HCL America, and Toshiba Global Commerce Solutions.
                        </p>
                        <p>
                            When I'm not coding, you'll find me experimenting with new recipes,
                            training for my first physique competition, or dancing salsa with
                            Mambo Dinamico Dance Company.
                        </p>
                        <a href="/#/about" className="text-link">Learn more about my journey →</a>
                    </div>
                    <div className="skills-highlight">
                        <h3>Core Skills</h3>
                        <div className="skill-list">
                            <span className="skill-badge">Java</span>
                            <span className="skill-badge">Python</span>
                            <span className="skill-badge">React</span>
                            <span className="skill-badge">JavaScript</span>
                            <span className="skill-badge">SQL</span>
                            <span className="skill-badge">Spring</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="featured-projects">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="projects-grid">
                    <div className="project-preview">
                        <div className="project-icon">💻</div>
                        <h3>Personal Website</h3>
                        <p>
                            Built with React.js to showcase my web development abilities
                            and practice modern frontend technologies.
                        </p>
                        <span className="project-tech">React • HTML • CSS</span>
                    </div>
                    <div className="project-preview">
                        <div className="project-icon">💪</div>
                        <h3>Fitness Application</h3>
                        <p>
                            Designing a platform for personalized fitness plans and
                            trainer-client collaboration with live progress tracking.
                        </p>
                        <span className="project-tech">Figma • UX Design</span>
                    </div>
                    <div className="project-preview">
                        <div className="project-icon">📞</div>
                        <h3>Call Of Quality</h3>
                        <p>
                            Web application automating call quality testing using
                            Bandwidth Inc.'s API for telecom providers.
                        </p>
                        <span className="project-tech">Python • Flask • API</span>
                    </div>
                </div>
                <div className="section-cta">
                    <a href="/#/experience" className="text-link-large">View all projects →</a>
                </div>
            </section>

            {/* Quick Links / CTA Section */}
            <section className="quick-links">
                <div className="quick-link-card">
                    <div className="card-icon">🎯</div>
                    <h3>My Journey</h3>
                    <p>Explore my professional experience and technical skills</p>
                    <a href="/#/about" className="card-link">Read More</a>
                </div>
                <div className="quick-link-card">
                    <div className="card-icon">🌟</div>
                    <h3>Personal Life</h3>
                    <p>Discover my hobbies, passions, and what makes me tick</p>
                    <a href="/#/personal" className="card-link">Explore</a>
                </div>
                <div className="quick-link-card">
                    <div className="card-icon">📬</div>
                    <h3>Let's Connect</h3>
                    <p>Interested in working together? Drop me a message</p>
                    <a href="/#/contact" className="card-link">Contact Me</a>
                </div>
            </section>

            {/* Footer Note */}
            <section className="homepage-footer">
                <p className="footer-text">
                    Currently open to new opportunities in Software Development,
                    Web Development, Data Engineering, and AI/ML
                </p>
                <div className="social-links">
                    <a href="https://github.com/spalvarado" target="_blank" rel="noopener noreferrer" className="social-link">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/spalvarado" target="_blank" rel="noopener noreferrer" className="social-link">
                        LinkedIn
                    </a>
                    <a href="mailto:spalvarado.1998@gmail.com" className="social-link">
                        Email
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
