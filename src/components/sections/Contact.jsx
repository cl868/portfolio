import { useState } from 'react';
import './Contact.css';

export const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/xovdqyka', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    message
                })
            });

            if (response.ok) {
                setStatus('Thanks for reaching out! I\'ll get back to you soon.');
                setEmail('');
                setMessage('');
            } else {
                setStatus('Oops! Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('Oops! Something went wrong. Please try again.');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message here..."
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                    {status && <p className="status-message">{status}</p>}
                </form>
            </div>
        </section>
    );
};
