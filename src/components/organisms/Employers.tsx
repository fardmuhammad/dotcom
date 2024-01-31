import { employers } from '../../constants';
import styles from '../../styles';

const Employers = () => (
  <>
    <div className={`${styles.flexCenter} my-10 font-ydkj text-neutral-50 text-[18px]`}>
      Other employers
    </div>
    <div className={`${styles.flexCenter} flex-wrap w-[80%]`}>
      {employers.map((employer) => (
        <div key={employer.id} className={`
          flex-1
          ${styles.flexCenter}
          sm:min-w-[192px];
          min-w-[120px]
          mb-[20px]
        `}
        >
          <img src={employer.logo} 
            className='
              sm:w-[192px]
              w-[100px]
              object-contain
            '
          />
        </div>
      ))}
    </div>
  </>
)

export default Employers