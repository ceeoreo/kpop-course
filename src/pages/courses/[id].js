import NavBar from "@/components/NavBar";
import Head from "next/head";
import { getCourseData, getAllCourseIds } from '../../lib/courses';
// import Date from "@/components/date";

export default function Course({ courseData }) {
  return (
    <div>
      <Head>
        <title>{courseData.title}</title>
      </Head>
      <NavBar />
      <div>
        {courseData.title}
        <br />
        {date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: courseData.contentHtml }} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllCourseIds();
  
  return {
    paths, 
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const courseData = await getCourseData(params.id);

  return {
    props: {
      courseData,
    }
  }
}