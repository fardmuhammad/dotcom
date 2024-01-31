import { quotes } from "../../assets"
import { iFeedback } from "../../constants"

interface iFeedbackCardProps extends iFeedback {};

const FeedbackCard = ({ content, title, name, img }:iFeedbackCardProps) => (
  <div className="
    flex
    justify-between
    flex-col
    px-10
    py-12
    rounded-[20px]
    max-w-[370px]
    md:mr-10
    sm:mr-5
    mr-0
    my-5
    feedback-card">
      <img src={quotes} alt='double_quotes'
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="
        font-outfit
        text-[18px]
        leading-[32px]
        text-neutral-50
        my-10
      ">
        {content}
      </p>
      <div className="flex">
        <img 
          src={img}
          alt={name}
          className="w-[48px] h-[48px] object-contain"
        />
        <div className="flex flex-col ml-4">
        <h4 className="
          font-ydkj
          font-normal
          text-[20px]
          leading-[32px]
          text-neutral-50
        ">
          {name}
        </h4>
          <p className="
            font-ydkj
            font-condensed
            font-normal
            text-[16px]
            leading-[24px]
            text-dimWhite
            white-space-pre-line
          ">
            {title}
          </p>
        </div>
      </div>
  </div>
)

export default FeedbackCard