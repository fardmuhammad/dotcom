import { schools } from "../../constants";
import styles from "../../styles";
import { format } from "date-fns";

const Education = () => (
  <>
    <div className={`
      ${styles.flexCenter}
      mb-10
      mt-2
      font-ydkj 
      text-neutral-50
      text-[18px]
    `}>
      Education
    </div>
    <div className={`
      flex
      justify-between
      xs:flex-row
      flex-col
      font-outfit
      content-stretch
      text-neutral-50
      xl:w-[1280px]
      w-[90%]
    `}>
      {schools.map((school, index) => (
        <div key={school.id} className={`
          flex
          flex-col
          
          items-center
          text-center
          ${index < schools.length - 1 ? 'xs:mr-[30px] mb-[15px]': 'sm:mr-0 mb-0'}
          sm:my-0
          mr-0
          sm:text-[18px]
          text-[16px]
        `}>
          <div 
            id={`${school.id}_logo`}
            className={`
              w-[72px]
              h-[72px]
              min-w-[72px]
              min-h-[72px]
              rounded-full
              overflow-hidden
              mb-[8px]
              flex-basis-[72px]
              flex-0
              hidden 
              sm:block
            `}
          >
            <img src={school.logo} alt={school.schoolName} className={`
              w-full
              h-full
              object-contain
              min-w-[72px]
              min-h-[72px]
            `} />
          </div>
          <div className={`
            
          `}>
            <h1 className={`font-semibold`}>{school.schoolName}</h1>
            <h1 className={`font-normal`}>{school.location}</h1>
            <h2 className={`font-semibold`}>{school.degree}</h2>
            {school.concentration && (<h2 className={`font-semibold`}>{school.concentration}</h2>)}
            <h2 className={`font-normal`}>{format(school.startDate, 'MMM y')} — {format(school.endDate, 'MMM y')}</h2>
          </div>
        </div>
      ))}  
    </div>
  </>
)


export default Education;