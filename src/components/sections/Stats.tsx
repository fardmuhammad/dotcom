import { stats } from "../../constants"
import styles from "../../styles"

const diffYears = (d2: Date, d1:Date) => {
  let diff = (d2.getTime() - d1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 365.25);
  return Math.abs(Math.round(diff));
}

const Stats = () => {
  const now = new Date();
  return (
    <section className={`${styles.flexCenter}
      flex-row
      flex-wrap
      sm:mb-20
      mb-6
    `}>
      {stats.map((stat) => (
        <div key={stat.id}
          className={`
            flex-1
            flex
            justify-start
            items-center
            flex-row
            m-3
          `}>
            <h4
              className='
                font-ydkj
                font-condensed
                xs:text-[40px]
                text-[30px]
                xs:leading-[53px]
                leading-[43px]
                text-neutral-50
              '>
              {diffYears(now, stat.date)}
            </h4>
            <p
              className='
                font-ydkj
                font-extraCondensed
                xs:text-[20px]
                text-[15px]
                xs:leading-[26px]
                leading-[21px]
                text-gradient uppercase ml-3
              '>
              {stat.title}
            </p>
          </div>
      ))}
    </section>
  )
}

export default Stats;
