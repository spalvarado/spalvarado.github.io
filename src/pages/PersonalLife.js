import "./PL.css";

const Home = () => {
    return (
        <div className="personal-life-container">
            <header className="page-header">
                <h1 className="main-title">My Personal Journey 🌟</h1>
                <p className="subtitle">Where passions meet purpose</p>
            </header>

            <section className="intro-section">
                <div className="intro-content">
                    <p className="intro-text">
                        I was born in <span className="highlight">Santa Ana, California</span> and was raised in Pittsboro, NC.
                        I grew up with two hardworking parents from whom I gained my work ethic.
                        Through their sacrifices, I grew to be a curious child who often tried
                        to figure out how things work and wanted to learn more. I found myself
                        learning better by doing things hands-on, which is how I gained a passion
                        for <span className="highlight">Mathematics and Computer Science</span>.
                    </p>
                    <p className="intro-text-last">
                        From high school to the present, I've developed hobbies that continue
                        to shape who I am today. Here's what makes me tick! 👇
                    </p>
                </div>
            </section>

            <section className="hobbies-section">
                <article className="hobby-card cooking-card">
                    <div className="hobby-icon">🍳</div>
                    <h2 className="hobby-title">Cooking & Bartending</h2>
                    <div className="hobby-tags">
                        <span className="tag">One Piece Inspired</span>
                        <span className="tag">Mixology</span>
                    </div>
                    <p className="hobby-description">
                        One of my favorite series to watch as a child was an anime called
                        <strong> One Piece</strong>. One character in particular inspired me with his love of
                        cooking, so I began experimenting with food at home. Mind you, I was
                        8-10 years old, so my experiments were <em>horrendous</em>, but over time I began
                        to cook traditional and healthy meals. Once I reached the age of 23,
                        I began to experiment with bartending, trying to recreate cocktails
                        and even going as far as to make some signature cocktails to call my own.
                    </p>
                </article>

                <article className="hobby-card fitness-card">
                    <div className="hobby-icon">💪</div>
                    <h2 className="hobby-title">Fitness & Nutrition</h2>
                    <div className="hobby-tags">
                        <span className="tag">Bodybuilding</span>
                        <span className="tag">Personal Training</span>
                    </div>
                    <p className="hobby-description">
                        I grew up overweight. Before starting college, I decided to change that
                        and started to exercise regularly and experiment with different diets—some
                        extreme, some not disciplined enough. When I started to make progress, I
                        developed a passion for it and dove into the world of <strong>bodybuilding</strong>.
                        Bodybuilding has taught me to be more disciplined with not only my workouts
                        but also my diet. As a result, I am working towards my first physique
                        competition and getting a certification in personal training!
                    </p>
                </article>

                <article className="hobby-card dancing-card">
                    <div className="hobby-icon">💃</div>
                    <h2 className="hobby-title">Dancing</h2>
                    <div className="hobby-tags">
                        <span className="tag">Salsa</span>
                        <span className="tag">Bachata</span>
                        <span className="tag">Merengue</span>
                    </div>
                    <p className="hobby-description">
                        Coming from a Hispanic household, dancing has always been a core principle
                        in the culture. I grew up not learning how to dance out of lack of interest.
                        Over time, I started to grow tired of being the only one at family functions
                        who couldn't dance, so I decided to take salsa classes to dive into dancing.
                        I began taking classes with <strong>Mambo Dinamico Dance Company</strong>, and while the style
                        of salsa was different from the style my family does, I fell in love with
                        dancing and have been going religiously for the past year. I am slowly diving
                        into other Latin dance styles such as bachata, merengue, and cumbia.
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Home;
