import NavBar from "@/components/NavBar";
import Link from "next/link";
import { getSortedCoursesData } from '../lib/courses';

export default function Courses({ allCoursesData }) {
  return (
    <div>
      <NavBar />
      <h1> Courses </h1>
      <section>
        <ul>
          {allCoursesData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/courses/${id}`}>{title}</Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const allCoursesData = getSortedCoursesData();

  return {
    props: {
      allCoursesData,
    },
  };
}