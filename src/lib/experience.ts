import bangladeshFf from "@/assets/experience/bangladesh-ff.svg.asset.json";
import manchesterUnited from "@/assets/experience/manchester-united.ico.asset.json";
import saff from "@/assets/experience/saff.png.asset.json";
import stokeCity from "@/assets/experience/stoke-city.ico.asset.json";
import theFa from "@/assets/experience/the-fa.png.asset.json";
import wolves from "@/assets/experience/wolves.svg.asset.json";
import { logos } from "@/lib/media";

export type ExperienceItem = {
  number: string;
  organisation: string;
  country?: string;
  location?: string;
  role: string;
  ageGroup?: string;
  period?: string;
  category: string;
  description: string;
  achievement?: string;
  services?: string[];
  logo?: { src: string; alt: string };
  mark?: string;
  featured?: boolean;
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    number: "01",
    organisation: "Manchester United",
    country: "England",
    role: "Lead Coach & Scout",
    ageGroup: "U6–U14",
    category: "Elite academy experience",
    description:
      "Worked within Manchester United's youth environment, combining coaching and talent identification across the early academy age groups.",
    logo: { src: manchesterUnited.url, alt: "Manchester United official crest" },
  },
  {
    number: "02",
    organisation: "Stoke City",
    country: "England",
    role: "Lead Foundation Coach",
    ageGroup: "U6–U11",
    category: "Academy coaching",
    description:
      "Worked within Stoke City's foundation-stage academy environment, focusing on early player development, technical foundations and the progression of young players.",
    logo: { src: stokeCity.url, alt: "Stoke City official crest" },
  },
  {
    number: "03",
    organisation: "Wolverhampton Wanderers",
    country: "England",
    role: "Lead Development Coach",
    ageGroup: "U7–U14",
    category: "Player development",
    description:
      "Worked across the development pathway with young players, supporting technical, tactical and individual development within a Premier League academy environment.",
    logo: { src: wolves.url, alt: "Wolverhampton Wanderers official crest" },
  },
  {
    number: "04",
    organisation: "The Football Association",
    country: "England",
    role: "Coach Developer • Mentor • Educator",
    category: "Coach education",
    description:
      "Supported coach development and education, bringing practical academy experience into the mentoring and development of other coaches.",
    logo: { src: theFa.url, alt: "The Football Association official mark" },
  },
  {
    number: "05",
    organisation: "Talent Identification & Scouting",
    role: "Talent Identification • Scouting • Player Development",
    category: "Specialist experience",
    description:
      "Developed specialist experience in talent identification and scouting, combining formal qualifications with practical experience across different football environments.",
    mark: "TI",
  },
  {
    number: "06",
    organisation: "International Football Development",
    role: "International Coaching & Technical Leadership",
    category: "International football",
    description:
      "Built extensive international experience across multiple football environments, with a focus on player development, coach education, academy systems, grassroots football and technical leadership.",
    mark: "IF",
  },
  {
    number: "07",
    organisation: "Legends Academy",
    country: "Pakistan",
    role: "Lead Coach",
    category: "Pakistan",
    description:
      "Contributed to player development and youth football development in Pakistan, bringing international academy coaching experience to a growing football environment.",
    mark: "LA",
  },
  {
    number: "08",
    organisation: "Zang Bazar FC",
    location: "Lower Chitral, Pakistan",
    role: "Technical Director",
    period: "2025",
    category: "Technical leadership",
    description:
      "Appointed Technical Director to support Zang Bazar FC during the inaugural Lower Chitral District Cup, contributing tactical organisation, team development and football structure.",
    achievement: "Inaugural Lower Chitral District Cup — Champions, 2025",
    mark: "ZB",
  },
  {
    number: "09",
    organisation: "Bangladesh U-20 National Team",
    country: "Bangladesh",
    role: "Consultant Coach",
    period: "2026",
    category: "National team football",
    description:
      "Joined the Bangladesh U-20 national team setup ahead of the 2026 SAFF U-20 Championship, initially appointed as a consultant coach for the tournament period.",
    logo: { src: bangladeshFf.url, alt: "Bangladesh Football Federation official crest" },
  },
  {
    number: "10",
    organisation: "SAFF U-20 Championship",
    location: "Maldives",
    role: "Champions — Bangladesh U-20",
    period: "2026",
    category: "Champions",
    description:
      "Led Bangladesh U-20 to the SAFF U-20 Championship title, defeating India on penalties in the final.",
    achievement: "SAFF U-20 Champions — Bangladesh, 2026",
    logo: { src: saff.url, alt: "South Asian Football Federation identity" },
    featured: true,
  },
  {
    number: "11",
    organisation: "Mark Cox International Football Consultancy",
    role: "International Football Consultant",
    period: "Current / Ongoing",
    category: "Current consultancy",
    description:
      "Building on extensive experience in coaching, technical leadership, player development, talent identification and international football development, Mark Cox International Football Consultancy provides independent football expertise to clubs, academies, federations, football organisations and development projects.",
    services: [
      "Technical Direction",
      "Coaching",
      "Player Development",
      "Academy Development",
      "Talent Identification",
      "Coach Education",
      "Grassroots Development",
      "International Football Consultancy",
    ],
    logo: { src: logos.mcifc.src, alt: logos.mcifc.alt },
    current: true,
  },
];

export const progression = [
  "Academy Coaching",
  "Player Development",
  "Coach Education",
  "Talent Identification",
  "International Development",
  "Technical Leadership",
  "National Team Football",
  "International Consultancy",
];