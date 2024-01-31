import { format } from 'date-fns'
import { Interweave } from 'interweave'
import { iResumeEntry, valueRealizationText } from '../../constants'

interface iResumeEntryProps extends iResumeEntry{}

const ResumeEntry = ({
  title,
  location,
  startDate, 
  endDate,
  logo,
  companyDesc,
  companyName,
  duties,
}:iResumeEntryProps) => (
  <div className='
    flex
    justify-between
    flex-row
    px-10
    py-[2px]
    w-full
    md:mr-10
    sm:mr-5
    mr-0
    my-2
    text-neutral-50
  '>
    <div className='
      hidden
      sm:block
      rounded-full
      overflow-hidden
      min-w-[90px]
      w-[90px]
      h-[90px]
      basis-[90px]
      flex-grow-0
      flex-shrink-0
      mr-[10px]
    '>
      <img src={logo} alt={`${companyName} logo`} className='w-[90px]
      h-[90px]
      object-contain'/>
    </div>
    <div className='
      flex
      justify-between
      flex-col
      px-2
      py-5
      w-full
    '>
      <h1 className='font-outfit font-thin md:text-[28px] text-[24px]'>{companyName} — {location}</h1>
      <h3 className='font-outfit font-normal italic text-[10px] text-neutral-300'>{companyDesc}</h3>
      <div className='flex xs:flex-row flex-col w-full font-outfit font-medium md:text-[25px] sm:text-[20px] text-[15px]'>
      <div
        className='flex-1'
      >
        <h2 className=''>{title}</h2>
      </div>
      <div><h2 className='flex-1 xs:text-right text-left'>{`${format(startDate, "MMMM y")} — ${format(endDate, "MMMM y")}`}</h2></div>
      </div>
      
      {duties.length &&
        (<ul className='
          list-disc
        '>
          {
            duties.map(duty => {
              let boldClass = 'font-bold'
              let dutyConvert = duty.dutyText
                .replace('Þ', `<span class='${boldClass}'>`).replace('þ', '</span>');
              
              return (
                <li key={duty.id} className='text-justify font-outfit sm:text-[16px] text-[12px]'>
                  {
                    duty.valueRealization
                    ? <span id={`${duty.id}-vr`} className={`italic text-white underline font-semibold`}>{`${valueRealizationText.toUpperCase()}:`}</span>
                    : '' 
                  }
                  {
                    duty.valueRealization
                    ? ' '
                    : ''
                  }
                  <Interweave content={dutyConvert} />
                </li>
              )}
            )
          }
        </ul>)
      }
    </div>
  </div>
)

export default ResumeEntry