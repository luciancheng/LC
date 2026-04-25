const Footer = () => {
    return (
        <footer className="footer">
            <div className="content">
                {/* CTA banner */}
                <div className="footer-cta" id="contact">
                    <h2 className="footer-cta-heading">Let's build something together.</h2>
                    <p className="footer-cta-sub">
                        I'm always open to new opportunities, collaborations, and conversations.
                    </p>
                    <a
                        className="footer-cta-btn"
                        href="mailto:luciancheng3@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>Get in Touch</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                {/* Divider */}
                <div className="footer-divider" />

                {/* Bottom grid */}
                <div className="footer-grid">
                    <div className="footer-grid-col">
                        <h4 className="footer-col-heading">Lucian Cheng</h4>
                        <p className="footer-col-text">Mechatronics & Biomedical Engineer</p>
                        <p className="footer-col-text">McMaster University</p>
                    </div>

                    <div className="footer-grid-col">
                        <h4 className="footer-col-heading">Navigate</h4>
                        <a href="/#home" className="footer-link">Home</a>
                        <a href="/#about" className="footer-link">About</a>
                        <a href="/#experience" className="footer-link">Experience</a>
                        <a href="/#projects" className="footer-link">Projects</a>
                    </div>

                    <div className="footer-grid-col">
                        <h4 className="footer-col-heading">Contact</h4>
                        <a href="mailto:luciancheng3@gmail.com" className="footer-link" target="_blank" rel="noreferrer">
                            luciancheng3@gmail.com
                        </a>
                        <a href="tel:+16479198636" className="footer-link">
                            +1 (647) 919-8636
                        </a>
                    </div>

                    <div className="footer-grid-col">
                        <h4 className="footer-col-heading">Socials</h4>
                        <div className="footer-socials">
                            <a href="https://github.com/luciancheng" className="footer-social-icon" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/luciancheng/" className="footer-social-icon" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/lucian_cheng/" className="footer-social-icon" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-divider" />
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Lucian Cheng. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
