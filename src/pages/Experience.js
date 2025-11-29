import "./Experience.css";

const Experience = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/SAMUEL_ALVARADO_Resume.pdf';
        link.download = 'Samuel_Alvarado_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="experience-container">
            <header className="experience-header">
                <h1 className="experience-title">Professional Experience</h1>

                <button onClick={handleDownload} className="download-btn">
                    📥 Download Resume
                </button>

                <div className="contact-links">
                    <a href="mailto:spalvarado.1998@gmail.com" className="contact-link">
                        📧 spalvarado.1998@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/spalvarado" target="_blank" rel="noopener noreferrer" className="contact-link">
                        💼 LinkedIn
                    </a>
                    <a href="https://github.com/spalvarado" target="_blank" rel="noopener noreferrer" className="contact-link">
                        💻 GitHub
                    </a>
                    <span className="contact-link">📱 (919) 548-7498</span>
                </div>
            </header>

            <section className="objective-section">
                <h2 className="section-title">Professional Summary</h2>
                <p className="objective-text">
                    Bilingual software engineer with a strong foundation in full-stack development,
                    data analytics, and AI/ML. Experienced with building scalable applications,
                    optimizing processes, and driving technical innovation. Eager to deliver impactful
                    solutions in dynamic team environments.
                </p>
            </section>

            <section className="education-section">
                <h2 className="section-title">Education</h2>
                <div className="education-card">
                    <div className="education-header-row">
                        <h3 className="institution-name">North Carolina A&T State University</h3>
                        <span className="education-date">Aug 2018 – May 2021</span>
                    </div>
                    <p className="degree-info">B.S., Computer Science | Greensboro, NC</p>
                    <div className="coursework">
                        <strong>Relevant Coursework:</strong> Database Design | Software Engineering |
                        Data Analytics | Internet Systems | AI & ML
                    </div>
                    <div className="internship-note">
                        <strong>Internship:</strong> Software Development Intern – Toshiba GCS
                    </div>
                </div>
            </section>

            <section className="skills-section">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h4>Languages</h4>
                        <div className="skill-tags">
                            <span className="skill-tag">Java</span>
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">C++</span>
                            <span className="skill-tag">SQL</span>
                            <span className="skill-tag">HTML</span>
                            <span className="skill-tag">CSS</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h4>Frameworks & Tools</h4>
                        <div className="skill-tags">
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">Spring</span>
                            <span className="skill-tag">Flask</span>
                            <span className="skill-tag">ServiceNow</span>
                            <span className="skill-tag">LoadRunner</span>
                            <span className="skill-tag">Selenium</span>
                            <span className="skill-tag">JUnit</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="work-experience-section">
                <h2 className="section-title">Work Experience</h2>

                <div className="job-card">
                    <div className="job-header">
                        <div className="job-title-company">
                            <h3 className="job-title">Advanced Application Engineering Analyst</h3>
                            <p className="company-name">Accenture</p>
                        </div>
                        <span className="job-date">Mar 2023 – Dec 2024</span>
                    </div>
                    <ul className="job-responsibilities">
                        <li>Spearheaded Agile-driven development cycles, ensuring timely delivery of client requirements.</li>
                        <li>Partnered with cross-functional teams to implement efficient solutions tailored to client needs.</li>
                        <li>Organized and participated in company-sponsored events to foster a collaborative workplace culture.</li>
                    </ul>
                </div>

                <div className="job-card">
                    <div className="job-header">
                        <div className="job-title-company">
                            <h3 className="job-title">Junior Developer (Contract)</h3>
                            <p className="company-name">HCL America</p>
                        </div>
                        <span className="job-date">Feb 2022 – Dec 2022</span>
                    </div>
                    <ul className="job-responsibilities">
                        <li>Executed automated test scripts weekly, achieving 95% defect resolution within SLA.</li>
                        <li>Monitored and analyzed test results using tools like Selenium and JUnit.</li>
                        <li>Collaborated with teams to enhance test coverage and accuracy by 20%.</li>
                    </ul>
                </div>
            </section>

            <section className="projects-section">
                <h2 className="section-title">Projects</h2>

                <div className="project-card">
                    <div className="project-header">
                        <h3 className="project-title">Personal Website</h3>
                        <span className="project-date">Sept 2025 – Present</span>
                    </div>
                    <p className="project-tech">HTML | CSS | JavaScript | React</p>
                    <ul className="project-details">
                        <li>Developed a personal website using HTML, CSS, JavaScript, and React.js to practice front-end development and responsive design.</li>
                        <li>Integrated a custom contact form, interactive sections, and a multi-page layout.</li>
                        <li>Currently refining features to prepare the website for deployment.</li>
                    </ul>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <h3 className="project-title">FitConnect</h3>
                        <span className="project-date">Jan 2025 – Present</span>
                    </div>
                    <p className="project-tech">Figma | React | HTML | CSS | Javascript</p>
                    <ul className="project-details">
                        <li>Enable users to create personalized fitness plans or collaborate with trainers for tailored routines.</li>
                        <li>Provide trainers with live data on clients' progress and key metrics to offer actionable feedback and adjustments.</li>
                        <li>Facilitate ongoing communication outside of check-ins, allowing trainers to share notes, provide motivation, and update plans based on client information.</li>
                        <li>Track clients' progress over time, allowing both users and trainers to view trends, improvements, and areas needing attention.</li>
                    </ul>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <h3 className="project-title">Call Of Quality</h3>
                        <span className="project-date">Jan 2021 – May 2021</span>
                    </div>
                    <p className="project-tech">HTML | CSS | Python | Flask Framework</p>
                    <ul className="project-details">
                        <li>Developed a web application to automate call quality testing using Bandwidth Inc.'s API.</li>
                        <li>Designed an audio analysis tool that assessed signal-to-noise ratio, frequency, and harmonic distortion in WAV files.</li>
                        <li>Delivered a solution that enabled efficient call quality evaluations for telecom providers.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Experience;
