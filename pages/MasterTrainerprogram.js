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
            <Layout headerStyle={3} footerStyle={1} headTitle="Master Trainer Program – IELTS, ELT & Soft Skills | RL Edu Skills" description="Master Trainer Program by RL Edu Skills. Become a certified trainer in IELTS, ELT, and Soft Skills. Enhance your teaching skills and grow.  Enroll now!">
                <section className="courses__breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="courses__breadcrumb-content">
                                    <Link href="#" className="category">Technical</Link>
                                    <h1 className="title">Master Trainer Program</h1>
                                    <p>IELTS | ELT | Soft Skills – By RL Edu Skills</p>
                                    <ul className="courses__item-meta list-wrap">
                                        <li>
                                            <div className="author">
                                                <Link href="#"><img src="/assets/img/courses/course_author02.png" alt="img" /></Link>
                                                {/* <Link href="#">Arian Hok</Link> */}
                                            </div>
                                        </li>
                                        <li><i className="flaticon-file" /> 19</li>
                                        {/* <li><i className="flaticon-timer" /> 10h 30m</li> */}
                                        <li><i className="flaticon-user-1" /> 4</li>
                                        
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
                                        <h3 className="title">Master Trainer Program</h3>

                                        <p><strong>A Master Trainer Program</strong> is a structured learning path designed to equip teachers and trainers with advanced skills and methodologies required in today’s fast-evolving educational landscape. These programs focus on practical knowledge, hands-on training, and real-world applications to prepare educators for effective teaching and mentorship.</p>
                                        <p>In RL, Our aim is to bring closer the divide between merely acquiring academic knowledge and applying it in real life through <strong>industry-sensitive training in English Language Teaching, IELTS coaching, and soft skills development.</strong>  Each program is designed to build competence, confidence, and career readiness.</p>
                                        <p>      We stand for quality education, continuous growth, and meaningful impact by helping learners prepare not just for jobs, but for long-term professional success.</p>


                                    </div>


                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>What We offer</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>Reviews</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-content">
                                               

                                                <ul className="list-wrap">
                                                    <li><strong><h6>IELTS Master Trainer Program (IELTS)</h6></strong></li>
                                                    <p>In-depth understanding of IELTS modules (Listening, Reading, Writing, Speaking)</p>
                                                    <p>Band score evaluation and feedback techniques</p>
                                                    <p>Test strategies, mock assessments, and learner support</p>
                                                    <p>International exam standards and ethical training practices</p>
                                                </ul>
                                                <ul className="list-wrap">
                                                    <li><strong><h6>ELT (English Language Teaching) Master Trainer Program</h6></strong></li>
                                                    <p>Advanced English language concepts and usage</p>
                                                    <p>Learner-centered teaching methodologies</p>
                                                    <p>Lesson planning, assessment, and classroom engagement</p>
                                                    <p>Teaching English for academic, professional, and global contexts</p>
                                                </ul>
                                                <ul className="list-wrap">
                                                    <li><strong><h6>Soft Skills Development Programs</h6></strong></li>
                                                    <p>Communication and interpersonal skills training</p>
                                                    <p>Personality development and confidence building</p>
                                                    <p>Leadership, teamwork, and professional etiquette</p>
                                                    <p>Training delivery using activities, role plays, and real-life scenarios</p>
                                                </ul>

                                                <div className="courses__details-inner">
                                                    <h3 className="title">Course Duration - 3 Months</h3>
                                                    <p className="mt-10">The program is structured to ensure effective learning with practical exposure.</p>

                                                    

                                                    
                                                    <p><strong>Structured learning modules</strong></p>
                                                    <p><strong>Interactive training sessions</strong></p>
                                                    <p><strong>Mandatory 20-hour practicum with guided mentorship</strong></p>
                                                    <p><strong>Training delivery using activities, role plays, and real-life scenarios</strong></p>

                                                </div>
                                                

                                                <div className="courses__details-inner">
                                                    <h3 className="title">Eligibility Criteria</h3>
                                                    <p>Candidates from all academic backgrounds are welcome, provided they have an interest in teaching, training, communication, or professional development.</p>
                                                    
                                                </div>
                                                <div className="courses__details-inner">
                                                    <h3 className="title">Why Choose This Program ?</h3>

                                                    <div className="event-details-list">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check-circle" />Industry-relevant curriculum</li>
                                                            <li><i className="fas fa-check-circle" />Practical, hands-on learning</li>
                                                            <li><i className="fas fa-check-circle" />Expert mentorship</li>
                                                            <li><i className="fas fa-check-circle" />Career-focused certifications</li>
                                                            <li><i className="fas fa-check-circle" />Support for global teaching opportunities</li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="courses__details-inner">
                                                    <h3 className="title">Apply Now</h3>
                                                    <p>Take the next step toward becoming a certified educator or professional trainer.
                                                        Contact us today to begin your application and start your journey toward professional excellence.
                                                    </p>

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
                                                                <p>The Master Trainer Program by RL Edu Skills is a transformational journey for aspiring and experienced trainers who want to elevate their impact in the education and training ecosystem. The program is thoughtfully designed to bridge the gap between subject expertise and high-impact delivery, making trainers industry-ready and learner-centric.</p>
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
                                            <h4 className="price"><strong>Costs:</strong>₹40000+GST</h4>
                                            <Link href="https://forms.gle/pbVXm9BY3d5mGwJ17" className="btn">Enroll This Now</Link>
                                            <div className="event-information-wrap">
                                                <h6 className="title">Include This Course</h6>
                                                <ul className="list-wrap">
                                                    {/* <li><i className="flaticon-timer" />Duration <span>6 Months</span></li> */}
                                                    <li><i className="flaticon-file" />Estimated Seat <span>15</span></li>
                                                    <li><i className="flaticon-user-1" />Joined <span>4</span></li>
                                                    <li><i className="flaticon-bars" />Language <span>English</span></li>
                                                    <li><i className="flaticon-flash" />Category <span>Trainer</span></li>
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
                                                <h4 className="title"><Link href="/Internship-details">Internship opportunities</Link></h4>
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