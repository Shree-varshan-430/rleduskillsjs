import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="footer-bg" data-bg-color="var(--tg-common-color-dark)">
                <div className="footer__top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer__about">
                                        <div className="footer__logo logo">
                                            <Link href="/"><img src="/assets/img/logo/Education_and_Skills_Development__2_-removebg-preview.png" alt="img" /></Link>
                                        </div>
                                        <p>Empowering individuals with industry-relevant skills through tailored training programs in technical, soft skills, corporate learning, and language development—preparing you for real-world success.</p>
                                        <ul className="list-wrap m-0 p-0">
                                            <li className="address">Vijayawada, Aruppukottai</li>
                                            <li className="number">+91 82202 01802</li>
                                            <li className="number">+91 99444 20094</li>
                                            <li className="socials">
                                                <Link href="https://wa.me/+918220201802"><i className="fab fa-whatsapp" /></Link>
                                                <Link href="https://www.facebook.com/rleduskill/"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="https://www.instagram.com/rleduskills/"><i className="fab fa-instagram" /></Link>
                                                <Link href="https://www.linkedin.com/company/rlglobalsolution/"><i className="fab fa-linkedin-in" /></Link>
                                                <Link href="https://www.youtube.com/c/RLEducationSkillDevelopment"><i className="fab fa-youtube" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget widget_nav_menu">
                                    <h4 className="fw-title">Resources</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="/about-us">About</Link></li>
                                        <li><Link href="/Courses">Courses</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                        <li><Link href="/career">Career</Link></li>
                                        <li><Link href="#">Conditions</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget widget_nav_menu">
                                    <h4 className="fw-title">Courses</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="/Technicalprogram">AIML/Cyber/Data</Link></li>
                                        <li><Link href="/Technicalprogram">Web Development</Link></li>
                                        <li><Link href="/Technicalprogram">Digital Marketing</Link></li>
                                        <li><Link href="/Technicalprogram">UI/UX Design</Link></li>
                                        <li><Link href="/MasterTrainerprogram">Master Trainer</Link></li>
                                        <li><Link href="/Softskills">Soft Skills</Link></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="copyright__wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="copyright__text">
                                    <p>Copyright © {new Date().getFullYear()}<a href="https://digianalytix.com/"> Digianalytix</a> All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="copyright__menu">
                                    <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms  Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
