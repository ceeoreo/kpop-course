import CourseListStyles from "../styles/CourseList.module.css";
import CourseStyles from "../styles/Course.module.css";
import Image from "next/image";
export default function CourseList() {
  return (
    <>
      <h2 className={CourseListStyles.featured}> Featured Courses</h2>
      <div className={CourseListStyles.container}>
        <div className={CourseStyles.container}>
          <ul> 
            <li> 
              <Image 
                src="/nct-127.jpg"
                width={260}
                height={210}
                alt="Picture of Kpop group NCT 127"
              />
            </li>
            <li className={CourseStyles.course__info}>Course name: NCT 127</li>
            <li className={CourseStyles.course__info}>Duration:1 HR</li>
            <li className={CourseStyles.course__info}>Summary</li>
          </ul>
        </div> 
      </div>
    </>
  )
}