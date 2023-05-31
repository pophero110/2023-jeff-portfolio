export interface JobDetail {
  id: number;
  position: string;
  company: string;
  workPeriod: string;
  bulletPoints: string[];
  companyDescription?: string;
  companyLink: string;
}

export const jobDetails: JobDetail[] = [
  {
    id: 0,
    position: "Full Stack Software Engineering Student",
    company: "Interapt",
    workPeriod: "Mar 2023 - Jun 2023",
    bulletPoints: [
      "Acted as a leader and mentor in two group projects, showcasing strong programming skills and project management skills",
      "Utilized the principles of Agile, Extreme Programming, and Object-Oriented Programming (OOP) to drive the development of projects",
      "Enhanced proficiency in Java, Spring Boot, and Angular to proficiently construct professional full-stack applications",
    ],
    companyDescription:
      "A food delivery platform providing authentic asian food to customers in North America",
    companyLink:
      "https://generalassemb.ly/education/software-engineering-immersive",
  },
  {
    id: 1,
    position: "Software Engineer",
    company: "Chowbus",
    workPeriod: "Mar 2022 - Nov 2022",
    bulletPoints: [
      "Increased efficiency of marketing campaigns by automating processes, resulting in a 25% increase in user engagement and a 15% increase in conversions",
      "Collaborated with cross-functional teams, including designers, product managers, and QA engineers to deliver software releases on time and with high quality",
      "Played an integral role in the development of new features, successfully resolved 25 bugs, and refactored 1000 lines of code",
    ],
    companyDescription:
      "A food delivery platform providing authentic asian food to customers in North America",
    companyLink: "https://www.chowbus.com",
  },

  {
    id: 3,
    position: "Software QA Analyst",
    company: "Chowbus",
    workPeriod: "Jan 2022 - Mar 2022",
    bulletPoints: [
      "Collaborated with the development team to ensure software ±uality through manual and automated testing, resulting in a 15% reduction in bugs reported by users",
      "Designed, executed, and maintained test cases, and reported and tracked defects and bugs, resulting in a 20% increase in test coverage",
      "Provided on-site support to ensure proper testing coverage and timely delivery of software releases, resulting in a 40% reduction in support tickets",
    ],
    companyDescription:
      "A food delivery platform providing authentic asian food to customers in North America",
    companyLink: "https://www.chowbus.com",
  },

  {
    id: 4,
    position: "Operation Manager",
    company: "Chowbus",
    workPeriod: "Aug 2021 - Dec 2021",
    bulletPoints: [
      "Manage a team of dispatchers, customer care specialists, as well as driver managers to ensure operation excellence",
      "Optimize delivery times, earnings, restaurant satisfaction with couriers, and customer satisfaction with couriers; help make our couriers as efficient and effectively as possible",
      "Directly participate in the Customer Care rotation in supporting Customer, Driver, and Restaurant care in resolving all issues.",
    ],
    companyDescription:
      "A food delivery platform providing authentic asian food to customers in North America",
    companyLink: "https://www.chowbus.com",
  },
];
