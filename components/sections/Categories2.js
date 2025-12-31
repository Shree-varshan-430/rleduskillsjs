import Link from "next/link"

export default function Categories2() {
    return (
        <>
            <section className="categories-area section-py-130">
                <div className="container">
                    <div className="row align-items-center justify-content-center mb-55">
                        <div className="col-xl-7 col-lg-8 col-md-10">
                            <div className="categories__title-wrap text-center text-lg-start m-0">
                                <div className="section__title mb-0">
                                    <span className="sub-title">Unique online courses</span>
                                    <h2 className="title tg-svg">Browse By <span className="position-relative"><span className="svg-icon" id="svg-5" data-svg-icon="assets/img/icons/title_shape.svg" />Categories</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-md-6">
                            <div className="tg-button-wrap mt-4 mt-lg-0 justify-content-center justify-content-lg-end">
                                <Link href="/courses" className="btn btn-border tg-svg"><span className="text">All
                                    Categories</span> <span className="svg-icon" id="svg-6" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div className="col">
                            <div className="categories__item-two tg-svg">
                                <Link href="/Softskills">
                                    <div className="icon">
                                        <span className="svg-icon" id="cat_svg1" data-svg-icon="\categories_icon.svg" />
                                        <i className="flaticon-improve-1 mycollection-improve" />
                                    </div>
                                    <div className="info">
                                        <span className="name">Soft skills</span>
                                        <span className="courses">19 Courses</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="categories__item-two tg-svg">
                                <Link href="/Technicalprogram">
                                    <div className="icon">
                                        <span className="svg-icon" id="cat_svg2" data-svg-icon="assets/img/icons/categories_icon.svg" />
                                        <i className="mycollection-technical-support" />
                                    </div>
                                    <div className="info">
                                        <span className="name">Technical Programs</span>
                                        <span className="courses">10 Courses</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="categories__item-two tg-svg">
                                <Link href="/Languages">
                                    <div className="icon">
                                        <span className="svg-icon" id="cat_svg3" data-svg-icon="assets/img/icons/categories_icon.svg" />
                                        <i className="flaticon-countries" />
                                    </div>
                                    <div className="info">
                                        <span className="name">Language Programs</span>
                                        <span className="courses">22 Courses</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="categories__item-two tg-svg">
                                <Link href="/Colleges">
                                    <div className="icon">
                                        <span className="svg-icon" id="cat_svg4" data-svg-icon="assets/img/icons/categories_icon.svg" />
                                        <i className="mycollection-graduation-hat-and-diploma" />
                                    </div>
                                    <div className="info">
                                        <span className="name">Colleges Programs</span>
                                        <span className="courses">15 Courses</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="categories__item-two tg-svg">
                                <Link href="/SchoolStudents">
                                    <div className="icon">
                                        <span className="svg-icon" id="cat_svg5" data-svg-icon="assets/img/icons/categories_icon.svg" />
                                        <i className="mycollection-school-1" />
                                    </div>
                                    <div className="info">
                                        <span className="name">School Programs </span>
                                        <span className="courses">14 Courses</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="categories__item-two tg-svg">
                                <Link href="/Technicalprogram">
                                    <div className="icon">
                                        <span className="svg-icon" id="cat_svg6" data-svg-icon="assets/img/icons/categories_icon.svg" />
                                        <i className="mycollection-corporate"/>
                                    </div>
                                    <div className="info">
                                        <span className="name">Corporate Training</span>
                                        <span className="courses">24 Courses</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categories__shapes-two">
                    <div className="categories__shapes-item-two rotateme">
                        <img src="/assets/img/objects/categories_shape05.png" alt="shape" />
                    </div>
                    <div className="categories__shapes-item-two" data-aos="fade-up">
                        <img src="/assets/img/objects/categories_shape02.png" alt="shape" />
                    </div>
                </div>
            </section>
        </>
    )
}
