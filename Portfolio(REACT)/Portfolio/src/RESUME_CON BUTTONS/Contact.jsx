import { useState } from "react";
import styles from "../App.module.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={styles.contactPage}>
      <h2 id="Contact">Contact Me</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="hidden" name="access_key" value="74ceee84-860e-4162-b46d-b3ce8af465af" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <p className={styles.success}>Thanks! Your message has been sent.</p>
      )}
    </div>
  );
}

export default Contact;
