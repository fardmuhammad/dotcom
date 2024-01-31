import { useState } from "react";
import { close, menu, sublogoFM } from '../../assets';
import { navLinks } from "../../constants";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
  return (
    <nav className={`w-full py-6 flex justify-center items-center navbar fixed top-0 left-0 bg-primary z-50 px-[50px]`}>
        <div className={`
            xl:w-[1280px]
            w-full
            flex
            justify-between
            items-center
        `}>
            <a href="#home">
                <img src={sublogoFM} alt='Fard Muhammad' className="w-[124px] h-[32px] object-contain object-left"/>
            </a>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`
                        font-outfit
                        font-normalStretch
                        font-normal
                        cursor.pointer
                        text-[16px] 
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                        text-neutral-50`
                    }>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img 
                    src={toggle ? close : menu}
                    alt="menu toggle" 
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`
                        ${toggle ? 'flex' : 'hidden'} 
                        p-6 
                        bg-black-gradient
                        absolute
                        top-20
                        right-0
                        mx-4
                        my-2
                        min-w-[140px]
                        rounded-xl
                        sidebar
                    `}
                >
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`
                                font-outfit
                                font-condensed
                                font-normal
                                cursor.pointer
                                text-[16px] 
                                ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}
                                text-neutral-50`
                            }>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar