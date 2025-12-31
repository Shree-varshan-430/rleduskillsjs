import Link from "next/link"
const CourseCard = ({ item }) => {
    return (
        <>
            <div className="courses__item-two shine__animate-item">
                <div className="courses__item-two-thumb">
                    <Link href="/Languageprogramdetails" className="shine__animate-link">
                        <img src={`/assets/img/courses/${item.logo}`} alt="img" />
                    </Link>
                    <div className="author">
                    <Link href="/Languageprogramdetails"><img src="/assets/img/courses/course_author001.png" alt="img" /></Link>
                    </div>
                </div>
                <div className="courses__item-two-content">
                    <Link href="#" className="courses__item-tag" style={{ backgroundColor: '#F5F0FF', color: '#560EF0' }}>Language</Link>
                    <h5 className="title"><Link href="/Languageprogramdetails">{item.courseTitle}</Link></h5>
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