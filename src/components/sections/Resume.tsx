import { resumeEntries } from "../../constants";
import { ResumeEntry } from "../atoms";
import { organisms } from "..";
import styles from "../../styles";

const Resume = () => (
  <section
    id='resume'
    className={`
    ${styles.paddingY}
    ${styles.flexCenter}
    flex-col
    relative
    pt-[80px]
    -mt-[80px]
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
    <organisms.Education />
    <div className={`${styles.flexCenter} my-10 font-ydkj text-neutral-50 text-[18px]`}>
      Work History
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
    <organisms.Employers />
    <organisms.Clients />
    
  </section>
)

export default Resume