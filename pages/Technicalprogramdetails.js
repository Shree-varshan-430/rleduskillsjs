import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function CounseDetails() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} headTitle="Industry-Ready Technical Program Details | RL Edu Skills" description="Explore the Technical Program at RL Edu Skills. Learn in-demand technical skills through hands-on training and projects. Enroll now to boost your career!">
                <section className="courses__breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="courses__breadcrumb-content">
                                    <Link href="#" className="category">Technical</Link>
                                    <h1 className="title">Technical Program – Industry-Ready Skill Development</h1>
                                    <p>Online & Offline | Full Tutoring & Self-Learning Mentorship</p>
                                    <ul className="courses__item-meta list-wrap">
                                        <li>
                                            <div className="author">
                                                <Link href="#"><img src="/assets/img/courses/course_author02.png" alt="img" /></Link>
                                                <Link href="#">Arian Hok</Link>
                                            </div>
                                        </li>
                                        <li><i className="flaticon-file" /> 19</li>
                                        <li><i className="flaticon-timer" /> 10h 30m</li>
                                        <li><i className="flaticon-user-1" /> 4</li>
                                        <li>
                                            <div className="rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <span className="rating-count">(4.8)</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="courses-details-area section-pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8">
                                <div className="courses__details-wrapper">
                                    <div className="courses__details-inner">
                                        <h3 className="title">What Is a Technical Program?</h3>

                                        <p>A Technical Program is a structured learning path designed to equip students, professionals, and enthusiasts with in-demand technical skills required in today’s fast-evolving industries. These programs focus on practical knowledge, hands-on training, and real-world applications to prepare learners for careers in technology, IT, and digital innovation.</p>
                                       

                                    </div>


                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Program Overview</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>Reviews</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-content">
                                                <p>Our Technical Program is designed to equip students, professionals, and enthusiasts with the latest industry-relevant technical skills. This program covers multiple domains, including <strong>Artificial Intelligence (AI) & Machine Learning (ML), Full-Stack Web Development, Cloud Computing & DevOps, Cybersecurity & Ethical Hacking, Data Science & Analytics, Python Programming, and UI/UX Design Fundamentals.</strong></p>
                                                <p>With a combination of live sessions, practical projects, and personalized mentoring, participants gain hands-on experience that bridges the gap between theoretical knowledge and real-world application. Our program also includes self-learning strategies, enabling you to continue improving your skills independently.</p>
                                                <p>This program prepares learners to excel in modern workplaces, secure high-demand roles, and stay ahead in the ever-evolving tech landscape.</p>
                                                <div className="courses__details-inner">
                                                    <h3 className="title">Different Technical Program</h3>
                                                    <p>Participants in this program will:</p>
                                                    <div className="event-details-list">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check-circle" />AI & Machine Learning</li>
                                                            <li><i className="fas fa-check-circle" />Full-stack web applications</li>
                                                            <li><i className="fas fa-check-circle" />Cloud Computing & DevOps workflows</li>
                                                            <li><i className="fas fa-check-circle" />Cybersecurity & Ethical Hacking</li>
                                                            <li><i className="fas fa-check-circle" />Data Science & Analytics</li>
                                                            <li><i className="fas fa-check-circle" />Python programming</li>
                                                            <li><i className="fas fa-check-circle" />UI/UX design skills</li>
                                                            <li><i className="fas fa-check-circle" />Hands-on project experienc</li>
                                                            <li><i className="fas fa-check-circle" />Self-learning strategies</li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="courses__details-inner">
                                                    <h3 className="title">Course Features</h3>
                                                    
                                                    <div className="event-details-list">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check-circle" /><strong>Mode of Learning: </strong>&nbsp;  Online & Offline sessions</li>
                                                            <li><i className="fas fa-check-circle" /><strong>Full Tutoring:</strong>&nbsp; Step-by-step guidance</li>
                                                            <li><i className="fas fa-check-circle" /><strong>Mentorship:</strong>&nbsp; Learn how to practice and grow</li>
                                                            <li><i className="fas fa-check-circle" /><strong>Hands-On :</strong> Real-world scenarios, role-playing,</li>
                                                            <li><i className="fas fa-check-circle" /><strong>Flexible Schedule:</strong>&nbsp; Tailored sessions </li>
                                                            <li><i className="fas fa-check-circle" /><strong>Certification:</strong>&nbsp; Gain a recognized certificate</li>
                                                           
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <div className="courses__details-inner">
                                                    <h3 className="title">Requirements</h3>
                                                    <p>This course is open to students and professionals who are eager to improve their soft skills and communication abilities. No prior experience is required—just a willingness to learn, participate actively, and apply the skills in real-world situations.</p>
                                                    <div className="event-details-list">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check-circle" />Basic computer and internet skills</li>
                                                            <li><i className="fas fa-check-circle" />Passion for learning and professional growth</li>
                                                            <li><i className="fas fa-check-circle" />Interest in Web Development</li>
                                                            <li><i className="fas fa-check-circle" />Interest in Digital Marketing</li>
                                                            <li><i className="fas fa-check-circle" />Content Writing, or Canva Designing</li>
                                                            <li><i className="fas fa-check-circle" />Commitment to complete assigned projects</li>
                                                            <li><i className="fas fa-check-circle" />Suitable for students, fresh graduates, and beginners looking for practical experience</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="courses__details-inner">
                                                    <h3 className="title">Why Choose This Program ?</h3>
                                                    
                                                    <div className="event-details-list">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check-circle" />High-demand Technical Skills</li>
                                                            <li><i className="fas fa-check-circle" />Online/Offline Learning</li>
                                                            <li><i className="fas fa-check-circle" />Access to Full Mentoring</li>
                                                            <li><i className="fas fa-check-circle" />Real-world Projects</li>
                                                            <li><i className="fas fa-check-circle" />Careers in Tech, Analytics, Cybersecurity, Development, and Design</li>
                                                           
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="courses__details-inner">
                                                    <h3 className="title">Course Duration</h3>
                                                    <p>The Technical Program is designed to be flexible and accommodate various learning paces. The total duration of the program is approximately <strong>40 hrs</strong>  depending on whether you choose the online or offline mode. Each week includes interactive sessions, practical exercises, and mentorship opportunities to ensure comprehensive skill development.</p>
                                                    
                                                </div>
                                            </div>
                                            {/* <div className="courses__details-curriculum">
                                                <h4 className="title">Curriculum</h4>
                                                <div className="accordion" id="accordionExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                            <button className={isActive.key == 1 ? "accordion-button  collapsed" : "accordion-button"}>
                                                                Introduction
                                                            </button>
                                                        </h2>
                                                        <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                <ul className="list-wrap">
                                                                    <li className="course-item">
                                                                        <Link href="#" className="course-item-link">
                                                                            <span className="item-name">Course Installation</span>
                                                                            <div className="course-item-meta">
                                                                                <span className="item-meta duration">07:48</span>
                                                                                <span className="item-meta course-item-status">
                                                                                    <img src="/assets/img/icons/lock.svg" alt="icon" />
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="course-item">
                                                                        <Link href="#" className="course-item-link">
                                                                            <span className="item-name">Create a Simple React App</span>
                                                                            <div className="course-item-meta">
                                                                                <span className="item-meta duration">07:48</span>
                                                                                <span className="item-meta course-item-status">
                                                                                    <img src="/assets/img/icons/lock.svg" alt="icon" />
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="course-item">
                                                                        <Link href="#" className="course-item-link">
                                                                            <span className="item-name">React for the Rest of us</span>
                                                                            <div className="course-item-meta">
                                                                                <span className="item-meta duration">10:48</span>
                                                                                <span className="item-meta course-item-status">
                                                                                    <img src="/assets/img/icons/lock.svg" alt="icon" />
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                            <button className={isActive.key == 2 ? "accordion-button  collapsed" : "accordion-button"}>
                                                                Capacitance and Inductance
                                                            </button>
                                                        </h2>
                                                        <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                <ul className="list-wrap">
                                                                    <li className="course-item">
                                                                        <Link href="#" className="course-item-link">
                                                                            <span className="item-name">Course Installation</span>
                                                                            <div className="course-item-meta">
                                                                                <span className="item-meta duration">07:48</span>
                                                                                <span className="item-meta course-item-status">
                                                                                    <img src="/assets/img/icons/lock.svg" alt="icon" />
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="course-item">
                                                                        <Link href="#" className="course-item-link">
                                                                            <span className="item-name">Create a Simple React App</span>
                                                                            <div className="course-item-meta">
                                                                                <span className="item-meta duration">07:48</span>
                                                                                <span className="item-meta course-item-status">
                                                                                    <img src="/assets/img/icons/lock.svg" alt="icon" />
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="course-item">
                                                                        <Link href="#" className="course-item-link">
                                                                            <span className="item-name">React for the Rest of us</span>
                                                                            <div className="course-item-meta">
                                                                                <span className="item-meta duration">10:48</span>
                                                                                <span className="item-meta course-item-status">
                                                                                    <img src="/assets/img/icons/lock.svg" alt="icon" />
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                            <button className={isActive.key == 3 ? "accordion-button  collapsed" : "accordion-button"}>
                                                                Final Audit
                                                            </button>
                                                        </h2>
                                                        <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                <ul className="list-wrap">
                                                                    <li className="course-item">
                                                                        <Link href="#" className="course-item-link">
                                                                            <span className="item-name">Course Installation</span>
                                                                            <div className="course-item-meta">
                                                                                <span className="item-meta duration">07:48</span>
                                                                                <span className="item-meta course-item-status">
                                                                                    <img src="/assets/img/icons/lock.svg" alt="icon" />
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="course-item">
                                                                        <Link href="#" className="course-item-link">
                                                                            <span className="item-name">Create a Simple React App</span>
                                                                            <div className="course-item-meta">
                                                                                <span className="item-meta duration">07:48</span>
                                                                                <span className="item-meta course-item-status">
                                                                                    <img src="/assets/img/icons/lock.svg" alt="icon" />
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="course-item">
                                                                        <Link href="#" className="course-item-link">
                                                                            <span className="item-name">React for the Rest of us</span>
                                                                            <div className="course-item-meta">
                                                                                <span className="item-meta duration">10:48</span>
                                                                                <span className="item-meta course-item-status">
                                                                                    <img src="/assets/img/icons/lock.svg" alt="icon" />
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="courses__details-instructors">
                                                <h4 className="title">Your Instructors</h4>
                                                <div className="courses__instructors-list">
                                                    <div className="courses__instructors-item">
                                                        <div className="courses__instructors-thumb">
                                                            <Link href="/instructor-details"><img src="/assets/img/courses/details_instructors01.jpg" alt="img" /></Link>
                                                        </div>
                                                        <div className="courses__instructors-content">
                                                            <h5 className="name"><Link href="/instructor-details">Robert Smith</Link></h5>
                                                            <span className="designation">Graphic Design</span>
                                                            <ul className="meta list-wrap d-flex flex-wrap">
                                                                <li><i className="flaticon-user-1" /> 1,135 Students</li>
                                                                <li><i className="flaticon-file" /> 05</li>
                                                                <li>
                                                                    <div className="rating">
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <span className="average">(4.2)</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <p>Donald Logan has more than 15 years’ experience as a project management consultant, educator, technology consultant, business know.</p>
                                                            <div className="tg-button-wrap">
                                                                <Link href="/instructor-details" className="btn btn-border tg-svg"><span className="text">See More</span> <span className="svg-icon" id="svg-btn1" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="courses__instructors-item">
                                                        <div className="courses__instructors-thumb">
                                                            <Link href="/instructor-details"><img src="/assets/img/courses/details_instructors02.jpg" alt="img" /></Link>
                                                        </div>
                                                        <div className="courses__instructors-content">
                                                            <h5 className="name"><Link href="/instructor-details">Ketty Roagh</Link></h5>
                                                            <span className="designation">Web Developer</span>
                                                            <ul className="meta list-wrap d-flex flex-wrap">
                                                                <li><i className="flaticon-user-1" /> 1,435 Students</li>
                                                                <li><i className="flaticon-file" /> 05</li>
                                                                <li>
                                                                    <div className="rating">
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <span className="average">(4.2)</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <p>Donald Logan has more than 15 years’ experience as a project management consultant, educator, technology consultant, business know.</p>
                                                            <div className="tg-button-wrap">
                                                                <Link href="/instructor-details" className="btn btn-border tg-svg"><span className="text">See More</span> <span className="svg-icon" id="svg-btn2" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-reviews">
                                                <h4 className="title">Student Ratings  Reviews</h4>
                                                <div className="course-rate">
                                                    <div className="course-rate__summary">
                                                        <div className="course-rate__summary-value">4.8</div>
                                                        <div className="course-rate__summary-stars">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="course-rate__summary-text">
                                                            Total 2 Rating
                                                        </div>
                                                    </div>
                                                    <div className="course-rate__details">
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                5
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '80%' }} title="80%" />
                                                                <span className="rating-count">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                4
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '50%' }} title="50%" />
                                                                <span className="rating-count">1</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                3
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                2
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                1
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="course-reviews">
                                                    <h4 className="course-review-head">Reviews (01)</h4>
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <div className="review-author">
                                                                <img src="/assets/img/blog/comment01.png" alt="img" />
                                                            </div>
                                                            <div className="review-author-info">
                                                                <div className="review-stars-rated">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <h5 className="user-name">Admin <span className="date">August 5, 2023</span></h5>
                                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu meature areawtyt totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="course-review-form">
                                                    <h4 className="course-review-head">Write a review</h4>
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <input type="text" placeholder="Your Name" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="email" placeholder="Your Email" />
                                                            </div>
                                                        </div>
                                                        <input type="text" placeholder="Review Title" />
                                                        <div className="course-form-rating">
                                                            <span>Select Rating:</span>
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <textarea placeholder="Type Comments" />
                                                        <button className="btn">Submit your Review</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <aside className="courses__details-sidebar">
                                    <div className="event-widget">
                                        <div className="thumb">
                                            <img src="/assets/img/courses/course_thumb02.jpg" alt="img" />
                                            <VideoPopup />
                                        </div>
                                        <div className="event-cost-wrap">
                                            {/* <h4 className="price"><strong>Costs:</strong>₹4000/Mon</h4> */}
                                            <Link href="https://forms.gle/k56Ps1z35fggsr998" className="btn">Enroll This Now</Link>
                                            <div className="event-information-wrap">
                                                <h6 className="title">Include This Course</h6>
                                                <ul className="list-wrap">
                                                    {/* <li><i className="flaticon-timer" />Duration <span>6 Months</span></li> */}
                                                    <li><i className="flaticon-file" />Estimated Seat <span>15</span></li>
                                                    <li><i className="flaticon-user-1" />Joined <span>4</span></li>
                                                    <li><i className="flaticon-bars" />Language <span>English</span></li>
                                                    <li><i className="flaticon-flash" />Category <span>Intern</span></li>
                                                    <li><i className="flaticon-share" />Share
                                                        <ul className="list-wrap event-social">
                                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Related Courses</h4>
                                        <div className="rc-post-item">
                                            <div className="rc-post-thumb">
                                                <Link href="/course-details">
                                                    <img src="/assets/img/blog/blog_standard01.jpg" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="rc-post-content">
                                                <h4 className="title"><Link href="/Softskills">Mastering Your English language</Link></h4>
                                                {/* <span className="price">$22.00</span> */}
                                            </div>
                                        </div>
                                        <div className="rc-post-item">
                                            <div className="rc-post-thumb">
                                                <Link href="/course-details">
                                                    <img src="/assets/img/blog/blog_standard04.jpg" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="rc-post-content">
                                                <h4 className="title"><Link href="/internshipdetails">Internship opportunities</Link></h4>
                                                {/* <span className="price"><del>$29.00</del> $18.00</span> */}
                                            </div>
                                        </div>
                                        <div className="rc-post-item">
                                            <div className="rc-post-thumb">
                                                <Link href="/course-details">
                                                    <img src="/assets/img/blog/blog_standard03.jpg" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="rc-post-content">
                                                <h4 className="title"><Link href="/Course-details">Our School Program</Link></h4>
                                                {/* <span className="price">$11.00</span> */}
                                            </div>
                                        </div>
                                        {/* <div className="rc-post-item">
                                            <div className="rc-post-thumb">
                                                <Link href="/course-details">
                                                    <img src="/assets/img/blog/blog_standard02.jpg" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="rc-post-content">
                                                <h4 className="title"><Link href="/course-details">Create quick is wire frames</Link></h4>
                                                <span className="price">$11.00</span>
                                            </div>
                                        </div> */}
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}