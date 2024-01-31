import * as img from "../assets";

export interface iDentification {
  id: string;
}

export interface iTitled extends iDentification {
  title: string;
}

export interface iNavLink extends iTitled {};

export interface iFeatures extends iTitled {
  icon: string;
  content: string;
}

export interface iFeedback extends iTitled {
  content: string;
  name: string;
  img: string;
}

export interface iStats extends iTitled {
  value: string;
}

export interface iFooterLink extends iDentification{
  name: string;
  link: string;
}

export interface iFooterLinkGroup extends iTitled {
  links: iFooterLink[];
}

export interface iSocialMedia extends iDentification {
  icon: string;
  link: string;
}

export interface iClients extends iDentification {
  logo: string;
}

export interface iDuty extends iDentification {
  valueRealization?: boolean;
  dutyText: string
}

export interface iResumeEntry extends iTitled {
  logo: string;
  companyName: string;
  location: string;
  companyDesc: string; 
  startDate: Date;
  endDate: Date | "Present";
  duties: iDuty[];
}

export interface iEducation extends iDentification {
  logo: string;
  schoolName: string;
  startDate: Date;
  endDate: Date;
  location: string;
  degree: string;
  concentration?: string;
}

export const valueRealizationText = "value realization";

export const navLinks: iNavLink[] = [
  {
    id: "home",
    title: "Home",
  },
  /* {
    id: "work",
    title: "Work",
  }, */
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "testimonials",
    title: "References",
  }
  /* {
    id: "contact",
    title: "Contact",
  }, */
];

export const features: iFeatures[] = [
  {
    id: "feature-1",
    icon: img.star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: img.shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: img.send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback: iFeedback[] = [
  {
    id: "feedback-1",
    content:
      "Hire Fard!!! Not only is he a great developer, and constantly questing to better his coding, but also himself. Fard adds a special dose of extra character you didn’t realize you needed in your team, but certainly are better for. I’ve had the pleasure of knowing Fard for over 20 years, and 3 different companies; and hope to work with him again.",
    name: "Armando Rosario",
    title: "Head of Innovation,\nTealium Labs",
    img: img.people01,
  },
  {
    id: "feedback-2",
    content:
      "Fard is a top-notch developer. Hard-working and razor sharp, he is great under pressure for important deadlines and also great when not under pressure. He’s a quick learner and, at Liquidus, was able to absorb and become efficient in multiple javascript frameworks according to the requirements of the project. These included React, Angular and Vue. As a manager, when there was a critical production issue, I felt no more sense of relief than getting a message from Fard that read, “On it.” He’s a great team member as well and lots of fun to have in the office.",
    name: "Ian Baaske",
    title: "Technology Manager, Enova",
    img: img.people02,
  },
  {
    id: "feedback-3",
    content:
      "Fard consistently excels in creating intuitive user interfaces, optimizing web performance, and collaborating with his peers. His problem-solving skills and technical expertise have significantly improved our FinTech product’s user experience. Fard is a dedicated team player with a positive attitude, strong communication skills, and a commitment to staying current with industry trends. I highly recommend Fard, and if you have the chance to work with Fard, you’ll be fortunate to have a talented and motivated professional on your team.",
    name: "Brandon Kleszynski",
    title: 'Lead Software Engineer\nSTA Group',
    img: img.people03,
  },
];

export const resumeEntries: iResumeEntry[] = [
  {
    id: 'dkg',
    logo: img.dkg,
    title: 'UI Developer',
    companyName: 'Dillon Kane Group',
    companyDesc: 'A group of affiliated companies that invests in, builds, and revitalizes technology solution businesses.',
    location: 'Chicago, IL (remote from Los Angeles)',
    startDate: new Date('2/26/2020'),
    endDate: new Date('11/17/2023'),
    duties: [
      {
        id: 'dkg-duty1',
        dutyText: 'Built, debugged, and maintained interactive components, charts, and reports pages using TypeScript-based React.js, REST API with asynchronous programming, Styled-Components, and Node.js for the ÞTruStageþ Digital Storefront platform; allowing clients and lenders to view loan information concisely.'
      },
      {
        id: 'dkg-duty2',
        dutyText: 'Used Microsoft Azure for the deployment of the platform’s single-page applications, and Azure DevOps for ticket management.'
      },
      {
        id: 'dkg-duty3',
        valueRealization: true,
        dutyText: 'Increased efficiency for TruStage’s Loan Officer Experience Reports page by reducing the number of calls to its data sources by 50% and using a Redux reducer for state management.'
      },
    ]
  },
  {
    id: 'liquidus',
    logo: img.liquidus,
    title: 'Senior Software Engineer',
    companyName: 'Liquidus Marketing',
    companyDesc: 'A boutique ad agency specializing in online marketing for Fortune 500 clients and local retailers.',
    location: 'Chicago, IL',
    startDate: new Date('5/17/2010'),
    endDate: new Date('8/30/2019'),
    duties: [
      {
        id: 'lqds-duty1',
        dutyText: 'Developed custom banner ads for national campaigns and local retailers in multiple device formats using JavaScript, CSS, jQuery, and Vue.'
      },
      {
        id: 'lqds-duty2',
        dutyText: 'Animated and programmed dynamically generated video for ÞComcastþ VOD shopping channels.'
      },
      {
        id: 'lqds-duty3',
        dutyText: 'Built out the front end for Single-Page-Application landing pages displaying weekly digital circular ads for major retailers using Vue.js, Angular, and React.js'
      },
      {
        id: 'lqds-duty4',
        dutyText: 'Engineered the “Retail Carousel”, allowing retailers to display a custom-built inventory in a single banner ad, which increased conversions vs benchmark.'
      },
      {
        id: 'lqds-duty5',
        valueRealization: true,
        dutyText: 'Applied knowledge of advertising, motion graphics, and front-end evelopment to create more engaging banner frameworks than previously available, increasing interactions by 150%.'
      },
    ]
  },  
  {
    id: 'jackbox',
    logo: img.jackbox,
    title: 'Game Developer',
    companyName: 'Jackbox Games',
    companyDesc: 'A game publisher known for the “Jackbox Party Pack” party game series and the classic trivia game “YOU DON’T KNOW JACK”.',
    location: 'Chicago, IL',
    startDate: new Date('9/21/2011'),
    endDate: new Date('2/7/2012'),
    duties: [
      {
        id: 'jkbx-duty1',
        dutyText: 'Worked on the Facebook and iOS editions of their signature game series, “YOU DON’T KNOW JACK” (YDKJ), which later won the “Social Game of the Year” award at the Spike Video Game Awards.'
      },
      {
        id: 'jkbx-duty2',
        dutyText: 'Built the Dis-or-Dat and Gibberish Question modes of the game with the company’s proprietary game development tools.'
      },
      {
        id: 'jkbx-duty3',
        dutyText: 'Tested prototypes of the question modes against sample data.'
      },
      {
        id: 'jkbx-duty4',
        dutyText: 'Implemented asynchronous play for gamers to play against anyone else in real time, simulating a multiplayer experience.'
      },
      {
        id: 'jkbx-duty5',
        valueRealization: true,
        dutyText: 'Implemented long-standing enthusiasm of the YDKJ series to recreate two of the game’s classic modes from the original PC game, allowing fans familiar with the original game to experience it in a brand-new medium, increasing reach.'
      },
    ]
  },  
  {
    id: 'kunoichi',
    logo: img.kunoichi,
    title: 'Developer/Animator',
    companyName: 'Kunoichi, Inc.',
    companyDesc: 'A boutique creative agency specializing in developing microsites and motion graphics for major clients.',
    location: 'Chicago, IL',
    startDate: new Date('4/6/2009'),
    endDate: new Date('5/14/2010'),
    duties: [
      {
        id: 'kuno-duty1',
        dutyText: 'Developed the “Littlest Pet Shop” website for ÞHasbroþ.'
      },
      {
        id: 'kuno-duty2',
        dutyText: 'Programmed the main games and provided motion graphics and compositing for the interstitial sequences in the minigame series “G.I. Joe: Operation H.I.S.S”.'
      },
      {
        id: 'kuno-duty3',
        dutyText: 'Engineered rich media banner ads for ÞAllstate Insuranceþ.'
      },
      {
        id: 'kuno-duty4',
        valueRealization: true,
        dutyText: 'Used knowledge of web development, motion graphics, and audio/video editing to create immersive interactive experiences in the form of websites, online games, and advertising, increasing viewership by 75%.'
      },
    ]
  },  
]

export const stats: iStats[] = [
  {
    id: "stats-1",
    title: "Years of Front-End Experience",
    value: "18",
  },
  {
    id: "stats-2",
    title: "Years of JS Development Experience",
    value: "11",
  },
  {
    id: "stats-3",
    title: "Years of React/TS Experience",
    value: "3",
  },
];

export const footerLinks: iFooterLinkGroup[] = [
  {
    id: 'otherPlaces',
    title: "Other places",
    links: [
      {
        id: "github",
        name: "Github",
        link: "https://www.github.com/fardmuhammad",
      },
      {
        id: "heyitsfard",
        name: "Entertainment",
        link: "https://www.heyitsfard.com/",
      },
      {
        id: "youtube",
        name: "YouTube",
        link: "https://www.youtube.com/@WTFG78",
      },                                                                             
    ],
  },
  /* {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  }, */
];

export const socialMedia: iSocialMedia[] = [
  {
    id: "social-media-1",
    icon: img.instagram,
    link: "https://www.instagram.com/fardmuhammad",
  },
  {
    id: "social-media-2",
    icon: img.facebook,
    link: "https://www.facebook.com/mrfardmuhammad",
  },
  {
    id: "social-media-3",
    icon: img.twitter,
    link: "https://www.twitter.com/fardmuhammad",
  },
  {
    id: "social-media-4",
    icon: img.linkedin,
    link: "https://www.linkedin.com/in/fardmuhammad",
  },
];

export const employers: iClients[] = [
  {
    id: 'motorola',
    logo: img.motorola,
  },
  {
    id: 'ogilvy',
    logo: img.ogilvy,
  },
  {
    id: 'arcww',
    logo: img.arcww,
  },
]

export const clients: iClients[] = [
  {
    id: "client-1",
    logo: img.comcast,
  },
  {
    id: "client-2",
    logo: img.cbs,
  },
  {
    id: "client-3",
    logo: img.hasbro,
  },
  {
    id: "client-4",
    logo: img.jimHenson,
  },
  {
    id: "client-5",
    logo: img.bestBuy,
  },
  {
    id: "client-6",
    logo: img.target,
  },
  {
    id: "client-7",
    logo: img.walmart,
  },
  {
    id: "client-8",
    logo: img.walgreens,
  },
];

export const schools: iEducation[] = [
  {
    id: 'depaul',
    schoolName: 'DePaul University',
    logo: img.depaul,
    startDate: new Date(2004, 7, 1),
    endDate: new Date(2008, 5, 15),
    degree: 'Master\'s Degree',
    concentration: 'Computer Graphics & Animation',
    location: 'Chicago, IL',
  },
  {
    id: 'iit',
    schoolName: 'Illinois Institute of Technology',
    logo: img.iit,
    startDate: new Date(1998, 7, 1),
    endDate: new Date(2001, 11, 16),
    degree: 'Bachelor\'s Degree',
    concentration: 'Computer Science',
    location: 'Chicago, IL',
  },
  {
    id: 'wyoung',
    schoolName: 'Whitney Young Magnet High School',
    logo: img.wyoung,
    startDate: new Date(1994, 8, 6),
    endDate: new Date(1998, 5, 15),
    degree: 'High School Diploma with Honors',
    location: 'Chicago, IL',
  }
]
const currentYear = new Date().getFullYear();
export const copyrightText = `©${currentYear} Fard Muhammad. All Rights Reserved.`