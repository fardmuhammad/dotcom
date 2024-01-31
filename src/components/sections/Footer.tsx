import styles from "../../styles";
import { sublogoFM } from "../../assets";
import { footerLinks, socialMedia, copyrightText } from "../../constants";

const Footer = () => (
  <section className={`
    ${styles.flexCenter}
    ${styles.paddingY}
    flex-col
  `}>
    <div className={`
      ${styles.flexStart}
      md:flex-row
      flex-col
      mb-8
      w-full
    `}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img 
          src={sublogoFM} 
          alt="Fard Muhammad"
          className="
            w-[266px]
            h-[120px]
            min-w-[200px]
            object-contain
          "
        />
        <p className={`
          ${styles.paragraph}
          mt-4
          font-extraCondensed
          text-dimWhite
          max-w-[280px]
          tracking-[.05rem]
        `}>
          Available for front-end development work <br className="hidden xs:block"/>in the LA area or remote in the US
        </p>
      </div>
      <div className="
        flex-[1.5] 
        w-full 
        flex 
        flex-row 
        justify-between 
        flex-wrap 
        md:mt-0 
        mt-10
      ">
        {footerLinks.map(footerLink => (
          <div key={footerLink.id} className={`
            flex
            flex-col
            ss:my-0
            my:4
            min-w-[150px]
          `}>
            <h4 className={`
              font-ydkj
              font-condensed
              text-[18px]
              leading-[27px]
              text-neutral-50
            `}>
              {footerLink.title}
            </h4>
            <ul className="
              list-none mt-4
            ">
              {footerLink.links.map((link, index) => (
                <li key={link.id} className={`
                  font-outfit
                  font-normal
                  text-[16px]
                  leading-[24px]
                  text-dimWhite
                  hover:text-secondary
                  cursor-pointer
                  ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}
                `}>
                  <a href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className={`
      w-full
      flex
      justify-between
      items-center
      md:flex-row
      flex-col
      pt-6
      border-t-[1px]
      border-t-[#3f3e45]
    `}>
      <p className={`
        font-outfit
        font-thin
        text-[18px]
        text-center
        leading-[27px]
        text-dimWhite
      `}>
        {copyrightText}
      </p>
      <div className="
        flex
        flex-row
        md:mt-0
        mt-6
      ">
        {socialMedia.map((social, index) => (
          <a href={social.link}>
          <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`
              w-[21px]
              h-[21px]
              object-contain
              cursor-pointer
              ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}
            `}
          />
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer