import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function Faq() {
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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Find Answers Here" headTitle="RL Edu Skills FAQ – Student, Teacher & Career Queries" description="Get answers to common questions about RL Edu Skills. Learn about our skill development programs, courses, certifications.">
                <section className="faq-area section-py-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-10">
                                <div className="faq-wrap">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                <button className={isActive.key == 1 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What is RL Education & Skill Development?
                                                </button>
                                            </h2>
                                            <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>RL EDU SKILLS is a skill development and career-focused training platform that helps students and professionals build industry-relevant technical and soft skills. We focus on practical learning, career readiness, and global opportunities.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                <button className={isActive.key == 2 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Why are skill development programs important today?
                                                </button>
                                            </h2>
                                            <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>In today’s competitive job market, degrees alone are not enough. Skill development programs help learners gain job-ready skills, practical exposure, and industry confidence, making them more employable and future-ready.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                <button className={isActive.key == 3 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    What types of skills does RL EDU SKILLS focus on?
                                                </button>
                                            </h2>
                                            <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>RL EDU SKILLS focuses on:

                                                        <ul>
                                                            <li>Technical Skills (AI, Full Stack Development, Cloud, Cybersecurity, Data Science, Python)</li>
                                                            <li>Soft Skills (Communication, Leadership, Professional Etiquette)</li>
                                                            <li>Career Skills (Interview preparation, resume building, workplace readiness)</li>
                                                            <li>Global Skills (German language & international career pathways)</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                                <button className={isActive.key == 4 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Who can enroll in RL EDU SKILLS programs?
                                                </button>
                                            </h2>
                                            <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Our programs are designed for:

                                                        <ul>
                                                            <li>College students</li>
                                                            <li>Fresh graduates</li>
                                                            <li>Working professionals</li>
                                                            <li>Career switchers</li>
                                                            <li>Learners aiming for international careers</li>
                                                            <li>No matter your background, RL EDU SKILLS helps you upskill at your level.</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                                <button className={isActive.key == 5 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    How does RL EDU SKILLS help in career growth?
                                                </button>
                                            </h2>
                                            <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p><ul>
                                                        <li>Industry-relevant curriculum</li>
                                                        <li>Hands-on practical training</li>
                                                        <li>Real-world project exposure</li>
                                                        <li>Career guidance and mentoring</li>
                                                        <li>Placement and job-oriented support (where applicable)</li>
                                                    </ul></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(6)}>
                                                <button className={isActive.key == 6 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    Are RL EDU SKILLS courses beginner-friendly?
                                                </button>
                                            </h2>
                                            <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Yes. Most RL EDU SKILLS courses are beginner-friendly and structured from fundamentals to advanced concepts. Learners receive guided training, doubt-clearing sessions, and continuous support.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(7)}>
                                                <button className={isActive.key == 7 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                    What makes RL EDU SKILLS different from other training institutes?
                                                </button>
                                            </h2>
                                            <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>RL EDU SKILLS stands out because of:<ul>

                                                        <li>Skill-first, career-oriented approach</li>
                                                        <li>Industry-aligned curriculum</li>
                                                        <li>Practical learning over theory</li>
                                                        <li>Focus on employability and global careers</li>
                                                        <li>Expert trainers with real-world experience</li>
                                                    </ul></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(8)}>
                                                <button className={isActive.key == 8 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                    Does RL EDU SKILLS provide certification?
                                                </button>
                                            </h2>
                                            <div className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Yes. Upon successful completion, learners receive certifications that validate their skills, which can be added to resumes and professional profiles.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(9)}>
                                                <button className={isActive.key == 9 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                    How do skills training programs improve employability?
                                                </button>
                                            </h2>
                                            <div className={isActive.key == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Skills training improves employability by:
                                                        <ul>
                                                            <li>Closing the gap between education and industry needs</li>
                                                            <li>Enhancing practical knowledge</li>
                                                            <li>Building confidence for interviews and workplaces</li>
                                                            <li>Making candidates job-ready from day one</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(10)}>
                                                <button className={isActive.key == 10 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                    Are soft skills really important for jobs?
                                                </button>
                                            </h2>
                                            <div className={isActive.key == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Absolutely. Employers highly value communication, teamwork, leadership, and problem-solving skills. RL EDU SKILLS integrates soft skills training to help learners succeed in real workplace environments.
                                                        
                                                    </p>
                                                </div>
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