import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import Blog2 from "@/components/sections/Blog2"
import Brand2 from "@/components/sections/Brand2"
import Categories2 from "@/components/sections/Categories2"
import Course3 from "@/components/sections/Course3"
import Cta4 from "@/components/sections/Cta4"
import Cta2 from "@/components/sections/Cta2"

import Testimonial3 from "@/components/sections/Testimonial3"

export default function Home1() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner1 />
                <Categories2 />
                <Course3 />
                <Cta2 />
               
                
                <Blog2 />
                 <div className="area-bg" data-background="/assets/img/bg/area_bg.jpg">
                    <Testimonial3 />
                    <Brand2 />
                </div>
                <Cta4 />
            </Layout>
        </>
    )
}