import styles from "../../styles";
import { fardLogo } from "../../assets";

const Hero = () => (
  <section 
    id='home'
    className={`
      flex
      md:flex-row
      flex-col
      ${styles.paddingY}
      pt-[80px]
    `}
  >
    <div
      className={`
        flex-1
        ${styles.flexStart}
        flex-col
        xl:px-0
        sm:px-16
        px-6
      `}
    >
      <div
        className="
          flex
          flex-row
          justify-between
          items-center
          w-full
          ss:leading-[100px]
          xs:leading-[75px]
          leading-[64px]
        ">
        <h1
          className="
            flex-1
            font-ydkj
            font-normal
            ss:text-[64px]
            xs:text-[52px]
            text-[42px]
            text-neutral-50
            z-[10]
          ">
          Fard Muhammad<br className="sm:block hidden"/> {' '}
          <span
            className='text-gradient'
          >
            Front-End
          </span><br className="sm:block hidden"/> {' '}
          Web Development
        </h1>
      </div>
    </div>
    <div className="
      absolute w-full xl:w-[1280px]
    ">
      <div className={`
        xl:overflow-visible
        overflow-hidden
        ss:w-[500px]
        ss:h-[500px]
        w-[300px]
        h-[300px]
        absolute
        right-[0]
        -top-[100px]
      `}>
        <img src={fardLogo} alt='Fard Logo' className="
          w-[100%]
          h-[100%]
          relative 
          ml-[20%]
          z-[5]
          opacity-40 
          max-w-[400%] 
          max-h-[400%]"
        />
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 light-blue__gradient" />
    </div>
  </section>
);

export default Hero