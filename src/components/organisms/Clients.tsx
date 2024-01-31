import { clients } from '../../constants';
import styles from '../../styles';

const Clients = () => (
  <>
    <div className={`${styles.flexCenter} mt-7 mb-5 font-ydkj text-neutral-50 text-[18px]`}>
      Clients include
    </div>
    <div className={`${styles.flexCenter} flex-wrap w-[80%]`}>
      {clients.map((client) => (
        <div key={client.id} className={`
          flex-1
          ${styles.flexCenter}
          sm:min-w-[192px]
          min-w-[120px]
          sm:mx-[30px]
          mx-[15px]
          sm:mb-[10px]
          mb-[20px]
        `}
        >
          <img src={client.logo} 
            className='
              sm:w-[192px]
              w-[100px]
              sm:h-[100px]
              h-[40px]
              object-contain
            '
          />
        </div>
      ))}
    </div>
  </>
)

export default Clients