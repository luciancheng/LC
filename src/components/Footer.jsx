const Footer = () => {
    return ( 
        <div className="footer ">
            <div className="footer-content content pt-36 pb-10">
                <div className="contact p-10 w-full flex justify-between items-center" id="contact">
                    <div>
                        <h3 className="lets-connect-text text-3xl font-bold">Let's Connect!</h3>
                        <p className="lets-connect-text">Send me a quick message to discuss future opportunities.</p>
                    </div>
                    <div>
                        <a className="send-contact-button clickable-item" href="mailto:luciancheng3@gmail.com" target="_blank" rel="noreferrer">
                            <span className="font-bold">Send Email</span>
                        </a>
                    </div>
                </div>
                <div className="main-footer flex justify-between gap-3">
                    <div className="flex gap-3 flex-col">
                        <h3 className="text-2xl font-bold">Lucian Cheng</h3>
                        <p>Mechatronics and Biomedical Engineer</p>
                        <p>McMaster University - Hamilton, Ontario, Canada</p>
                        <p>Richmond Hill, Ontario, Canada</p>
                    </div>
                    <div className="flex flex-col gap-3 footer-links">
                        <a href="mailto:luciancheng3@gmail.com" className="contact-social contact-socialmedia clickable-item"  target="_blank" rel="noreferrer">
                            <i className="fa-3x fa-solid fa-envelope contact-social-img text-2xl"></i>
                            <p className="contact-social-text">luciancheng3@gmail.com</p>
                        </a>
                        <a href="/" className="contact-social contact-socialmedia clickable-item"  target="_blank" rel="noreferrer">
                            <i className="fa-3x fa-solid fa-phone contact-social-img text-2xl"></i>
                            <p className="contact-social-text">+1 &#40;647&#41;-919-8636</p>
                        </a>
                        <div className="contact-socialmedia-container flex gap-4">
                            <a href="https://github.com/luciancheng" className="contact-socialmedia clickable-item"  target="_blank" rel="noreferrer">
                                <i className="fa-2x fa-brands fa-github contact-socialmedia-img text-3xl"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/luciancheng/" className="contact-socialmedia clickable-item"  target="_blank" rel="noreferrer">
                                <i className="fa-2x fa-brands fa-linkedin contact-socialmedia-img text-3xl"></i>
                            </a>
                            <a href="https://www.instagram.com/lucian_cheng/" className="contact-socialmedia clickable-item"  target="_blank" rel="noreferrer">
                                <i className="fa-2x fa-brands fa-instagram contact-socialmedia-img text-3xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;