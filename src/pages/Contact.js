import { useState } from "react";
import "./Contact.css";

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

    const getStatusClass = () => {
        if (result === "Form Submitted Successfully") return "success";
        if (result === "Error") return "error";
        if (result === "Sending....") return "sending";
        return "";
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1 className="contact-title">Get In Touch</h1>
            </div>

            <section className="contact">
                <form onSubmit={onSubmit}>
                    <h2>Contact Me</h2>

                    <div className="input-box">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="field"
                            placeholder="Enter your full name"
                            name="name"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label>Email Address</label>
                        <input
                            type="email"
                            className="field"
                            placeholder="Enter your email"
                            name="email"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            className="field"
                            placeholder="Enter your phone number"
                            name="phone"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label>Type of Inquiry</label>
                        <select name="inquiries" id="inquiry" required>
                            <option disabled value="">-- Select an Option --</option>
                            <option value="Job">Job Opportunity</option>
                            <option value="Network">Networking</option>
                            <option value="Freelance">Freelance Project</option>
                            <option value="Training">Personal Training</option>
                            <option value="Social">Social / Other</option>
                        </select>
                    </div>

                    <div className="input-box">
                        <label>Your Message</label>
                        <textarea
                            className="field mess"
                            placeholder="Enter your message here..."
                            name="message"
                            required
                        ></textarea>
                    </div>

                    <button type="submit">Send Message</button>

                    {result && (
                        <div className={`status-message ${getStatusClass()}`}>
                            {result}
                        </div>
                    )}
                </form>
            </section>
        </div>
    );
};

export default Home;
