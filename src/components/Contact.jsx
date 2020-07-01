import React from 'react';
import "../styles/contact.css";

export default class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <div id="contact-links" className="nes-container is-rounded">
                    <i className="nes-icon github"></i>
                    <a href="https://github.com/glv1at118" target="_blank" rel="noopener noreferrer">
                        visit <i className="fas fa-external-link-alt"></i>
                    </a><br />

                    <i className="nes-icon linkedin"></i>
                    <a href="https://www.linkedin.com/in/guannan-lyu-001133127/" target="_blank" rel="noopener noreferrer">
                        visit <i className="fas fa-external-link-alt"></i>
                    </a><br />

                    <i className="nes-icon gmail"></i>
                    <a href="mailto:guannanlv@gmail.com" target="_blank" rel="noopener noreferrer">
                        <span className="email-desktop">guannanlv@gmail.com</span><span className="email-mobile">email</span> <i className="fas fa-external-link-alt"></i>
                    </a><br />

                    <i className="nes-icon whatsapp"></i>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <span className="phone-desktop">905-519-2561</span><span className="phone-mobile">phone</span> <i className="fas fa-external-link-alt"></i>
                    </a><br />
                </div>
                <div id="divider-text">Or leave me an online message:</div>
                <div id="online-msg">
                    <form action="https://formspree.io/mrgygjal" method="POST" target="_blank" rel="noopener noreferrer">
                        <div className="part1">
                            <input type="text" name="_replyto" placeholder="What's your email?" className="nes-input" />
                        </div>
                        <div className="part1-mobile">
                            <input type="text" name="_replyto" placeholder="email..." className="nes-input" />
                        </div>
                        <div className="part2">
                            <textarea name="message" placeholder="What's your message?" className="nes-textarea"></textarea>
                        </div>
                        <div className="part2-mobile">
                            <textarea name="message" placeholder="message..." className="nes-textarea"></textarea>
                        </div>
                        <div className="part3">
                            <button type="submit" className="nes-btn is-warning">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}