import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
        <button type="button" className="slick-prev">
            <i className="flaticon-chevron"></i>
        </button>
    ),
    nextArrow: (
        <button type="button" className="slick-next">
            <i className="flaticon-chevron"></i>
        </button>
    ),
}

export default function TestimonalSlider2() {
    return (
        <>
            <Slider {...settings} className="testimonial-active">
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>RL Edu Skills was built with a clear mission: to make skill education accessible, practical, and aligned with real industry needs. Our vision is to empower students, institutions, and educators through structured training, continuous innovation, and a strong focus on employability, entrepreneurship, and lifelong learning.</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">Founder</h4>
                        <span className="designation">RL EDU SKILLS</span>
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>RL Edu Skills stands out as a reliable skilling partner that bridges the gap between academic learning and industry expectations. Their structured programs, outcome-driven approach, and alignment with NEP and employability goals make them an ideal choice for schools aiming to future-proof students with relevant technical and soft skills.</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">School Principal's</h4>

                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>As a trainer, RL Edu Skills provides a clear curriculum framework, real-world project orientation, and strong academic support. The organization values trainers as mentors, not just instructors, enabling us to focus on practical learning, student engagement, and measurable skill outcomes rather than just syllabus completion.</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">Technical Trainer</h4>
                        <span className="designation">RL EDU SKILLS</span>
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>RL Edu Skills helped me move beyond theory and understand how skills are applied in real careers. The training is practical, easy to follow, and industry-relevant, with constant guidance and feedback. It boosted my confidence, clarity, and readiness for internships, interviews, and professional environments.</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">Technical Trainee</h4>
                        <span className="designation">RL EDU SKILLS</span>
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>RL Edu Skills adds strong academic value through Value Added Courses, domain-specific programs, CSR initiatives, and internship opportunities. Their industry-aligned training integrates smoothly with the curriculum and enhances student employability and career readiness.</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">College HOD's</h4>
                        
                    </div>
                </div>
            </Slider>
        </>
    )
}
