import Allcourses from "@/components/courses/Softskills.js"
import FilterCourses from "@/components/courses/FilterCourses"
import Layout from "@/components/layout/Layout"
import { useState } from "react"
import Softskilldetails from "@/pages/Softskilldetails.js"

export default function Courses() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Soft Skills Training" headTitle="Industry-Ready Soft Skills Training | RL Edu Skills" description="Enhance your professional journey with RL Edu Skills' Soft Skills Training. Master communication, teamwork, and leadership skills to excel in any industry. Enroll now!">
                <section className="all-courses-area section-py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 order-2 order-lg-0">
                                <FilterCourses />
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="tab-content" id="myTabContent">
                                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <Allcourses />
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