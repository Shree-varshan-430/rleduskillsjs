import Link from "next/link"
import Slider from "react-slick"

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow slick-prev" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <i className="fas fa-arrow-left"></i>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <i className="fas fa-arrow-right"></i>
    </button>
  );


const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '110px',
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                centerPadding: '0',
            }
        },
    ]
}

export default function CourseSlider1() {
    return (
        <>
            <Slider {...settings} className="row courses-slider-active">
                <div className="col">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/Softskills" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb01.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author001.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="/Softskills" className="courses__item-tag" style={{ backgroundColor: '#E8F9EF', color: '#04BC53' }}>English</Link>
                            <h5 className="title"><Link href="/Softskills">Soft Skills training courses</Link></h5>
                            <ul className="courses__item-meta list-wrap">
                                <li><i className="flaticon-file" /> 05</li>
                                <li><i className="flaticon-timer" /> 12h 30m</li>
                                <li><i className="flaticon-user-1" /> 35</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/Technicalprogram" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb02.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author002.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="/Technicalprogram" className="courses__item-tag" style={{ backgroundColor: '#F7EEFA', color: '#BC18E4' }}>Technical</Link>
                            <h5 className="title"><Link href="/Technicalprogram">Python Programming Course</Link></h5>
                            <ul className="courses__item-meta list-wrap">
                                <li><i className="flaticon-file" /> 08</li>
                                <li><i className="flaticon-timer" /> 16h 30m</li>
                                <li><i className="flaticon-user-1" /> 45</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/internship-details" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb03.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author003.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="/internship-details" className="courses__item-tag" style={{ backgroundColor: '#FFF0F9', color: '#FF109F' }}>Internship</Link>
                            <h5 className="title"><Link href="/internship-details">Internship Computer Science</Link></h5>
                            <ul className="courses__item-meta list-wrap">
                                <li><i className="flaticon-file" /> 12</li>
                                <li><i className="flaticon-timer" /> 2 Mon</li>
                                <li><i className="flaticon-user-1" /> 60</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/Technicalprogram" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb04.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author004.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="/Technicalprogram" className="courses__item-tag" style={{ backgroundColor: '#FFF3D3', color: '#F5B204' }}>Development</Link>
                            <h5 className="title"><Link href="/Technicalprogram">Web Development
                                Fully Complete Guideline</Link></h5>
                            <ul className="courses__item-meta list-wrap">
                                <li><i className="flaticon-file" /> 08</li>
                                <li><i className="flaticon-timer" /> 20h 00m</li>
                                <li><i className="flaticon-user-1" /> 40</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/MasterTrainerprogram" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb05.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author002.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="/MasterTrainerprogram" className="courses__item-tag" style={{ backgroundColor: '#F5F0FF', color: '#560EF0' }}>English</Link>
                            <h5 className="title"><Link href="/MasterTrainerprogram">Master Trainer Program (IELTS/ELT/Soft Skills)</Link></h5>
                            <ul className="courses__item-meta list-wrap">
                                <li><i className="flaticon-file" /> 10</li>
                                <li><i className="flaticon-timer" /> 20h 00m</li>
                                <li><i className="flaticon-user-1" /> 30</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/Softskills" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb06.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author004.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="/Softskills" className="courses__item-tag" style={{ backgroundColor: '#E8F9EF', color: '#04BC53' }}>English</Link>
                            <h5 className="title"><Link href="/Softskills">Business English Course</Link></h5>
                            <ul className="courses__item-meta list-wrap">
                                <li><i className="flaticon-file" /> 09</li>
                                <li><i className="flaticon-timer" /> 16h 30m</li>
                                <li><i className="flaticon-user-1" /> 30</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/Technicalprogram" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb07.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author001.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="/Technicalprogram" className="courses__item-tag" style={{ backgroundColor: '#FFF3D3', color: '#F5B204' }}>Graphic Design</Link>
                            <h5 className="title"><Link href="/Technicalprogram">Adobe Tools for Graphic Tools</Link></h5>
                            <ul className="courses__item-meta list-wrap">
                                <li><i className="flaticon-file" /> 19</li>
                                <li><i className="flaticon-timer" /> 10h 30m</li>
                                <li><i className="flaticon-user-1" /> 18</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/contact" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb08.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author002.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="/Technicalprogram" className="courses__item-tag" style={{ backgroundColor: '#DEF3FF', color: '#0496E9' }}>Technology</Link>
                            <h5 className="title"><Link href="/Technicalprogram">Trendy Course (AIML/Data Science)</Link></h5>
                            <ul className="courses__item-meta list-wrap">
                                <li><i className="flaticon-file" /> 16</li>
                                <li><i className="flaticon-timer" /> 12h 00m</li>
                                <li><i className="flaticon-user-1" /> 19</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    )
}
