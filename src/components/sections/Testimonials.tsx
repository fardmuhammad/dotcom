import { feedback } from "../../constants";
import styles from "../../styles";
import { FeedbackCard } from "../atoms";


const Testimonials = () => (
  <section 
    id='testimonials'
    className={`
      ${styles.paddingY}
      ${styles.flexCenter}
      flex-col
      relative
    `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
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
        References and <br className="sm:block hidden"/>Testimonials
      </h1>
      {/* <div
        className="w-full md:mt-0 mt-6"
      >
        <p className={`
          ${styles.paragraphOutfit}
          text-ultraCondensed
          text-left
          max-w-[450-px]
        `}>
          Recommendations of Fard’s work from colleagues and supervisors over the years
        </p>
      </div> */}
    </div>
    <div className="
      flex
      flex-wrap
      sm:justify-start
      justify-center
      w-full
      feedback-container
      relative
      z-[1]
    ">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card}/>
      ))}
    </div>
  </section>
)

export default Testimonials