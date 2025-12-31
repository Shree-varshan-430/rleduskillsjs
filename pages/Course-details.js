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
            <Layout headerStyle={3} footerStyle={1} headTitle="Skill Development Programs for Schools | RL Edu Skills" description="Explore RL Edu Skills - school programs for students and educators. Enhance skills in communication, life skills, digital literacy, and teaching innovation.">
                <section className="courses__breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="courses__breadcrumb-content">
                                    <Link href="#" className="category">School Programs</Link>
                                    <h1 className="title">School Skill Development Programs</h1>
                                    <p>For Students & Educators | RL Education & Skill Development</p>

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
                                        <h3 className="title">School Skill Development Programs</h3>

                                        <p>RL Education & Skill Development offers a comprehensive suite of skill-based learning programs designed to support holistic student growth and modern teaching excellence. Our school programs are carefully structured for KG to Grade 12 students and faculty members, focusing on academic enrichment, life skills, digital readiness, and future-focused competencies.</p>
                                        <p>All programs are available in short-term and long-term formats and can be delivered through offline training, based on school timings</p>

                                    </div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Programs for Students</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>Programs for Faculty & Educators</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-content">
                                                <p>Our student programs are designed to build strong foundations, confidence, creativity, and future readiness from an early age through activity-based and experiential learning.</p>
                                                <p><strong>Language & Communication Skills</strong>

                                                    <ul>
                                                        <li>We help students develop strong communication abilities essential for academic success and global exposure.</li>
                                                        <li>Communicative English Training using activity-based LSRW methodology</li>
                                                        <li>Cambridge-Based English Program for global fluency, public speaking, and creative writing</li>
                                                        <li>IELTS Coaching for students aiming for international education</li>
                                                        <li>German Language Training for study and career pathways in Germany</li>
                                                    </ul>

                                                </p>
                                                <p><strong>Life Skills, Mental & Emotional Well-being</strong>

                                                    <ul>
                                                        <li>NLP for School Children to improve focus, confidence, and emotional control</li>
                                                        <li>Mindfulness & Mental Resilience through journaling and meditation</li>
                                                        <li>Emotional Intelligence & Conflict Resolution for healthier relationships and self-awareness</li>

                                                    </ul>

                                                </p>
                                                <div className="courses__details-inner">
                                                    <h3 className="title">Why Schools Choose RL Education & Skill Development</h3>

                                                    <div className="event-details-list">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check-circle" />Age-appropriate, curriculum-aligned programs</li>
                                                            <li><i className="fas fa-check-circle" />Expert trainers with education experience</li>
                                                            <li><i className="fas fa-check-circle" />Practical, activity-based learning models</li>
                                                            <li><i className="fas fa-check-circle" />Customizable training for students and teachers</li>
                                                            <li><i className="fas fa-check-circle" />Focus on academic excellence, life skills, and future readiness</li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="courses__details-inner">
                                                    <h3 className="title">Our Approach</h3>
                                                    <p>At RL Education & Skill Development, we believe education should prepare learners not just for exams, but for life. Our programs act as a modern educational toolkit, empowering students with confidence and skills, while enabling teachers with innovative methodologies and digital expertise.</p>
                                                    <p>Together, we help schools build future-ready students and empowered educators.</p>
                                                </div>
                                            </div>


                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-content">
                                                <p>Our faculty development programs equip teachers with modern teaching methodologies, digital tools, and leadership skills to meet the demands of 21st-century classrooms.</p>
                                                <p><strong>Teaching Innovation & Pedagogy</strong>

                                                    <ul>
                                                        <li>AI for Educators – integrating AI into classroom teaching</li>
                                                        <li>Gamification in Teaching for higher student engagement</li>
                                                        <li>Flipped Classroom Strategies for self-paced and interactive learning</li>
                                                        <li>Differentiated Learning Techniques to support diverse learners</li>
                                                        <li>Cambridge-Based English Pedagogy for advanced English teaching methods</li>
                                                    </ul>

                                                </p>
                                                <p><strong>Technology & Digital Education</strong>

                                                    <ul>
                                                        <li>Blended Learning & EdTech Tools for hybrid classrooms</li>
                                                        <li>Adaptive Learning & AI-Powered Assessments for personalized education</li>
                                                        <li>Cybersecurity Awareness for Educators to protect student data and online safety</li>

                                                    </ul>

                                                </p>


                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-4">

                                       

                                            <div className="event-cost-wrap">

                                                <Link href="/public/assests/Brochures/RL Brochure - Schools.pdf" className="btn">Download</Link>
                                                <div className="event-information-wrap">


                                                </div>
                                            </div>
                                       


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}