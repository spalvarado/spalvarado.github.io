import "./About.css";

const Home = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">Developer | Problem Solver | Lifelong Learner</p>
            </div>

            <div className="about-content">
                <div className="intro-card">
                    <div className="greeting">
                        <span className="wave">👋</span>
                        <h2>Hello, I'm Samuel Alvarado</h2>
                    </div>
                    <p className="intro-text">
                        I'm from <span className="highlight-location">Pittsboro, NC</span>, and I graduated from
                        North Carolina Agricultural and Technical State University with a Bachelor's
                        Degree in Computer Science.
                    </p>
                </div>

                <div className="journey-section">
                    <h3 className="section-title">My Professional Journey</h3>

                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h4 className="company-name">Toshiba Global Commerce Solutions</h4>
                                <p className="role-title">Software Development Intern</p>
                                <p className="journey-description">
                                    Following my graduation from university, I began my professional
                                    journey at Toshiba Global Commerce Solutions, where I gained
                                    hands-on experience in software development.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h4 className="company-name">HCL America</h4>
                                <p className="role-title">Junior Developer</p>
                                <p className="journey-description">
                                    Two months after completing my internship, I received an offer
                                    from HCL America, where I worked as a Junior Developer and
                                    continued to build my technical skills.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h4 className="company-name">Accenture LLP</h4>
                                <p className="role-title">Advanced Application Engineering Analyst</p>
                                <p className="journey-description">
                                    My most recent employer was Accenture LLP, where I worked as an
                                    Advanced Application Engineering Analyst for nearly two years,
                                    tackling complex challenges and delivering impactful solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="current-status">
                    <div className="status-badge">
                        <span className="status-dot"></span>
                        <span>Open to Opportunities</span>
                    </div>
                    <p className="status-text">
                        I am currently exploring new employment opportunities and am open to
                        offers in <strong>Software Development</strong>, <strong>Web Development</strong>,
                        <strong>Data Engineering</strong>, or <strong>AI and Machine Learning</strong>.
                    </p>
                </div>

                <div className="interests-card">
                    <h3 className="section-title">My Interests & Goals</h3>
                    <p className="interests-text">
                        I have a strong passion for <span className="emphasis">Web Development</span> and
                        <span className="emphasis"> Software Engineering</span> and wish to continue
                        growing in these areas. However, I'm also excited about exploring opportunities
                        in AI/ML and Data Engineering, where I can apply my problem-solving skills
                        to new and innovative challenges.
                    </p>
                </div>

                <div className="cta-card">
                    <p className="cta-text">
                        Want to know me beyond the code?
                        <span className="cta-link"> Check out my Personal Life page to learn about
                        my hobbies, passions, and what makes me tick!</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
