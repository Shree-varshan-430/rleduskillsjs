import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function AboutUs() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us" headTitle="About Us | RL Edu Skills" description="Learn about RL Edu Skills, a leading skill development and career training platform. Discover our mission to empower students and professionals. ">
                <div>
                    <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">Who we are</span>
                                            <h2 className="title tg-svg">unlocking Potential<span className="position-relative"><span className="svg-icon" id="about-svg" data-svg-icon="assets/img/icons/title_shape.svg" />through Pratical Learning</span></h2>
                                        </div>
                                        <p className="fw-medium">We equip students and professionals with practical, job-ready skills to succeed in today’s competitive global workforce.</p>
                                        <p>RL EDU SKILLS is a forward-thinking skill development and career training platform dedicated to empowering students, graduates, and working professionals with industry-relevant, practical skills. We bridge the gap between traditional education and real-world career requirements by focusing on hands-on learning, career readiness, and global opportunities.</p>
                                        <div className="tg-button-wrap">
                                            <Link href="/courses" className="btn tg-svg"><span className="text">Explore Courses</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/assets/img/others/about_img03.jpg" alt="img" />
                                        </div>
                                        <div className="column">
                                            <img src="/assets/img/others/about_img04.jpg" alt="img" />
                                            <img src="/assets/img/others/about_img05.jpg" alt="img" />
                                        </div>
                                        <div className="about__shapes">
                                            <img src="/assets/img/objects/about_shape01.png" alt="img" className="about-shape-01" data-aos="fade-down-left" />
                                            <img src="/assets/img/objects/about_shape02.png" alt="img" className="about-shape-02" data-aos="fade-up-right" />
                                            <img src="/assets/img/objects/about_shape03.png" alt="img" className="about-shape-03 rotateme" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="fact-area fact-bg" data-background="/assets/img/bg/fact_bg.jpg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-7 col-md-9">
                                    <div className="section__title text-center mb-50">
                                        <span className="sub-title">Worldwide Our Achievement</span>
                                        <h2 className="title tg-svg">Grow You <span className="position-relative"><span className="svg-icon" id="fact-title" data-svg-icon="assets/img/icons/title_shape.svg" />Skills</span>To Advance Your Career path</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-webinar" />
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={55} /></h3>
                                            <p>Students Enrolled</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-graduates" />
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={11399} /></h3>
                                            <p>Top Class Courses</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-countries" />
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={3} /></h3>
                                            <p>World Countries</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    {/* <section className="mentors-area position-relative section-pt-120 section-pb-90">
                        <div className="container">
                            <div className="section__title-wrap mb-55">
                                <div className="row align-items-center gap-4 gap-md-0">
                                    <div className="col-md-8">
                                        <div className="section__title text-center text-md-start">
                                            <span className="sub-title">Our Qualified People Matter</span>
                                            <h2 className="title tg-svg">Top <span className="position-relative"><span className="svg-icon" id="svg-8" data-svg-icon="assets/img/icons/title_shape.svg" />Class</span> Mentors</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tg-button-wrap justify-content-center justify-content-md-end">
                                            <Link href="/instructor" className="btn btn-border tg-svg"><span className="text">All Instructors</span> <span className="svg-icon" id="mentors-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="mentors__item">
                                        <div className="mentors__img">
                                            <Link href="/instructor-details">
                                                <img src="/assets/img/mentors/mentors01.png" alt="mentor" />
                                            </Link>
                                            <div className="mentors__social">
                                                <span className="share"><i className="flaticon-share" /></span>
                                                <ul className="social-list list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mentors__content">
                                            <div className="mentors__content-top">
                                                <h4 className="name"><Link href="/instructor-details">Robert Smith</Link></h4>
                                                <span className="designation">Graphic Design</span>
                                            </div>
                                            <div className="mentors__content-bottom">
                                                <ul className="list-wrap">
                                                    <li className="students"><i className="flaticon-user-1" />1,135 Students</li>
                                                    <li className="rating">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">(5.0)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="mentors__item">
                                        <div className="mentors__img">
                                            <Link href="/instructor-details">
                                                <img src="/assets/img/mentors/mentors02.png" alt="mentor" />
                                            </Link>
                                            <div className="mentors__social">
                                                <span className="share"><i className="flaticon-share" /></span>
                                                <ul className="social-list list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mentors__content">
                                            <div className="mentors__content-top">
                                                <h4 className="name"><Link href="/instructor-details">Olivia Mia</Link></h4>
                                                <span className="designation">Web Design</span>
                                            </div>
                                            <div className="mentors__content-bottom">
                                                <ul className="list-wrap">
                                                    <li className="students"><i className="flaticon-user-1" />1,135 Students</li>
                                                    <li className="rating">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">(4.9)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="mentors__item">
                                        <div className="mentors__img">
                                            <Link href="/instructor-details">
                                                <img src="/assets/img/mentors/mentors03.png" alt="mentor" />
                                            </Link>
                                            <div className="mentors__social">
                                                <span className="share"><i className="flaticon-share" /></span>
                                                <ul className="social-list list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mentors__content">
                                            <div className="mentors__content-top">
                                                <h4 className="name"><Link href="/instructor-details">William Hope</Link></h4>
                                                <span className="designation">Digital Marketing</span>
                                            </div>
                                            <div className="mentors__content-bottom">
                                                <ul className="list-wrap">
                                                    <li className="students"><i className="flaticon-user-1" />3,235 Students</li>
                                                    <li className="rating">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">(4.7)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="mentors__item">
                                        <div className="mentors__img">
                                            <Link href="/instructor-details">
                                                <img src="/assets/img/mentors/mentors04.png" alt="mentor" />
                                            </Link>
                                            <div className="mentors__social">
                                                <span className="share"><i className="flaticon-share" /></span>
                                                <ul className="social-list list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mentors__content">
                                            <div className="mentors__content-top">
                                                <h4 className="name"><Link href="/instructor-details">Sophia Ava</Link></h4>
                                                <span className="designation">Web Development</span>
                                            </div>
                                            <div className="mentors__content-bottom">
                                                <ul className="list-wrap">
                                                    <li className="students"><i className="flaticon-user-1" />2,235 Students</li>
                                                    <li className="rating">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">(4.2)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mentors__shapes">
                            <img src="/assets/img/objects/mentors_shape01.png" alt="shape" />
                            <img src="/assets/img/objects/mentors_shape02.png" alt="shape" />
                        </div>
                    </section> */}
                    
                    
                </div>

            </Layout>
        </>
    )
}