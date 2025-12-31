import Link from "next/link"

const CourseCard = ({ item }) => {
    return (
        <>
            <div className="courses__item-two shine__animate-item">
                <div className="courses__item-two-thumb">
                    <Link href="/Softskilldetails" className="shine__animate-link">
                        <img src={`/assets/img/courses/${item.logo}`} alt="img" />
                    </Link>
                    <div className="author">
                    <Link href="/Softskilldetails"><img src="/assets/img/courses/course_author001.png" alt="img" /></Link>
                    </div>
                </div>
                <div className="courses__item-two-content">
                    <Link href="/Softskilldetails" className="courses__item-tag" style={{ backgroundColor: '#E8F9EF', color: '#04BC53' }}>Soft Skills</Link>
                    <h5 className="title">
                        <Link href="/Softskilldetails">{item.courseTitle}</Link>
                    </h5>
                    <ul className="courses__item-meta list-wrap">
                        <li><i className="flaticon-file" /> 05</li>
                        <li><i className="flaticon-timer" /> 12h 30m</li>
                        <li><i className="flaticon-user-1" /> 35</li>
                    </ul>
                    
                </div>
            </div>
        </>
    )
}

export default CourseCard