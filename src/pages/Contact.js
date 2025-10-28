import {useState} from "react";

const Home = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {



        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "bb81b464-f972-4f45-a685-45d2dcedce48");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };

    return ( <>
            <h1>Contact</h1>
            <section className="contact">
                <form onSubmit={onSubmit}>
                    <h2>Contact Me</h2>
                    <div className="input-box">
                        <label>Full Name</label>
                        <input type="text" className="field" placeholder="full name" name="name" required />
                    </div>
                    <div className="input-box">
                        <label>Email</label>
                        <input type="email" className="field" placeholder="email" name="email" required />
                    </div>
                    <div className="input-box">
                        <label>Phone Number</label>
                        <input type="tel" className="field" placeholder="phone" name = "phone" required />
                    </div>
                    <div className="input-box">
                        <label>Inquiry</label>
                        <select name="inquiries" id="inquiry" required>
                            <option disabled selected value>--Select and Option --</option>
                            <option value="Job">Job</option>
                            <option value="Network">Network</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Training">Personal Training</option>
                            <option value="Social">Social</option>
                        </select>
                    </div>
                    <div className="input-box">
                        <label>Your Message</label>
                        <textarea className="field mess" placeholder=" Enter your message" name ="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </>
    )
};

export default Home;