// import Head from 'next/head'

// const PageHead = ({ headTitle }) => {
//     return (
//         <>
//             <Head>
//                 <title>
//                     {headTitle ? headTitle : "RL Global Solution : Education & Skill Development"}
//                 </title>
//             </Head>
//         </>
//     )
// }

// export default PageHead

import Head from "next/head";

const PageHead = ({ headTitle }) => {
  const defaultTitle = "RL Edu Skills : Master Technical & Language Prowess";
  const defaultDescription =
    "Master technical and language skills with RL Edu Skills. Enhance career readiness, communication, and professional expertise through our programs.";
  const defaultKeywords =
    "RL EDU Skills, Education, Skills Development, Career Enhancement, Professional Training, Student Programs, College Training, Skill Building, School Programs, soft skills, Technical skills, Technical Programs, Foreign language Programs, corporate training, online courses, vocational training, offline courses, categories, recent, trending , courses, recent trending courses , softskills training courses, python programming courses, internships computer science, web development, master trainer program, digital marketing courses, data science courses, machine learning courses, AI courses, cloud computing courses, cyber security courses, communication skills, leadership skills, time management skills, problem-solving skills, critical thinking skills, teamwork skills, adaptability skills, creativity skills, interpersonal skills, emotional intelligence skills, public speaking skills, negotiation skills, conflict resolution skills, Business English course, adobe tools course, programming languages course, graphic tools, Communicative English Trainer, IELTS Trainer, Digital Marketing Trainer, Web Development Trainer, become a trainer, Skills, Stories, Success, smart, learning, career-focused, studenst enchancement program, ready learners, right programming language , program , programming language, technical skills, soft skills, programming, blog, technical blog, soft skills blog, education, course, skil developement, soft skills, training, institute, rl global solution, enterprise training, corporate training,development, sucess stories";
  return (
    <Head>
      <title>{headTitle ? headTitle : defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={defaultKeywords} />
      {/* Canonical URL */}
      <link rel="canonical" href={"https://rleduskills.com"} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={headTitle || defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:url" content={"https://rleduskills.com"} />
      <meta property="og:type" content="website" />
     

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={headTitle || defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      


    </Head>
  );
};

export default PageHead;
