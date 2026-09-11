import camp from "@/assets/WhatsApp_Image_2026-09-10_at_1.32.55_AM.jpg.asset.json";
import coaching from "@/assets/WhatsApp_Image_2026-09-10_at_1.32.53_AM_1.jpg.asset.json";
import balls from "@/assets/WhatsApp_Image_2026-09-10_at_1.32.56_AM.jpg.asset.json";
import trophy from "@/assets/WhatsApp_Image_2026-09-10_at_1.33.03_AM.jpg.asset.json";
import champions from "@/assets/WhatsApp_Image_2026-09-10_at_1.33.03_AM_2.jpg.asset.json";
import ceremony from "@/assets/WhatsApp_Image_2026-09-10_at_1.33.04_AM.jpg.asset.json";
import award from "@/assets/WhatsApp_Image_2026-09-10_at_1.33.04_AM_1.jpg.asset.json";
import pakistan from "@/assets/WhatsApp_Image_2026-09-10_at_1.32.16_AM.jpg.asset.json";
import mcifcLogo from "@/assets/MARK_COX_INTERNATIONAL_FOOTBALL_CONCULTENCY.jpg.asset.json";
import aslLogo from "@/assets/ASL_ELITE_SPORTS_LOGO.jpg.asset.json";

export const photos = {
  camp: {
    src: camp.url,
    alt: "Mark Cox on the pitch at the National Stadium, Dhaka, during the Bangladesh U-20 camp",
  },
  coaching: {
    src: coaching.url,
    alt: "Mark Cox giving instructions to players during a training session in Dhaka",
  },
  balls: {
    src: balls.url,
    alt: "Mark Cox carrying a net of footballs across the pitch before a training session",
  },
  trophy: {
    src: trophy.url,
    alt: "Mark Cox holding the SAFF U-20 Championship trophy in the Maldives",
  },
  champions: {
    src: champions.url,
    alt: "Bangladesh U-20 squad and staff celebrating as SAFF U20 Championship Maldives 2026 champions",
  },
  ceremony: {
    src: ceremony.url,
    alt: "Bangladesh U-20 champions and officials at the SAFF U-20 Champion 2026 reception ceremony",
  },
  award: {
    src: award.url,
    alt: "Mark Cox receiving recognition alongside the SAFF U-20 Championship trophy at the reception ceremony",
  },
  pakistan: {
    src: pakistan.url,
    alt: "Mark Cox with a player during football development work in northern Pakistan",
  },
} as const;

export const logos = {
  mcifc: { src: mcifcLogo.url, alt: "Mark Cox International Football Consultancy" },
  asl: { src: aslLogo.url, alt: "ASL Elite Sports" },
};

export const links = {
  whatsapp: "https://wa.me/923260522098",
  whatsappDisplay: "+92 326 0522098",
  email: "mailto:MCOX.IFC@PROTON.ME",
  emailDisplay: "MCOX.IFC@PROTON.ME",
  video1: "https://youtube.com/shorts/DcVwmnyrYP4?si=iKwCtgWSte3AuyLw",
  video2: "https://youtube.com/shorts/eKcjFUPxN44?si=clCumWnLE72hj-O",
  aslFacebook: "https://www.facebook.com/aslelitesports/",
  aslInstagram: "https://www.instagram.com/aslelitesports/",
  aslLinkedin: "https://www.linkedin.com/company/asl-elite-sports",
  aslEmail: "mailto:aslelitesports@gmail.com",
};

export const SITE_URL = "https://mcifc-footballexpert.lovable.app";

export const abs = (path: string) => `${SITE_URL}${path}`;

export const share = {
  home: abs(photos.camp.src),
  about: abs(photos.coaching.src),
  services: abs(photos.balls.src),
  achievements: abs(photos.trophy.src),
  journey: abs(photos.champions.src),
  contact: abs(photos.ceremony.src),
};

export const descriptor =
  "Football Technical Direction • Coaching • Player Development • Talent Identification • International Consultancy";
