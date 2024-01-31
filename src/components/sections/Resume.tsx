import { resumeEntries } from "../../constants";
import { ResumeEntry } from "../atoms";
import { section } from "..";
import styles from "../../styles";

const Resume = () => (
  <section
    id='resume'
    className={`
    ${styles.paddingY}
    ${styles.flexCenter}
    flex-col
    relative
    `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full white__gradient"/>
    <div
      className="
      w-full
      flex 
      justify-between
      items-center 
      md:flex-row
      flex-col
      sm:mb-16
      mb-6
      relative
      z-[1]
      "
    >
      <h1
        className={styles.heading2}
      >
        Resume
      </h1>
    </div>
    <div className="
      flex
      flex-col
      sm:justify-start
      justify-center
      w-full
      relative
      z-[1]
    ">
      {resumeEntries.map((entry) => (
        <ResumeEntry key={entry.id} {...entry} />
      ))}
    </div>
    <section.Employers />
    <section.Clients />
    
  </section>
)

export default Resume