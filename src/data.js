import star from "./assets/star.svg";
import balance from "./assets/balance.svg";
import secure from "./assets/secure.svg";
import quote from "./assets/quote.svg";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";
import person3 from "./assets/person3.png";
import airbnb from "./assets/airbnb.png";
import binance from "./assets/binance.png";
import coinbase from "./assets/coinbase.png";
import dropbox from "./assets/dropbox.png";
import insta from "./assets/insta.svg";
import facebook from "./assets/facebook.svg";
import x from "./assets/x.svg";
import linkedIn from "./assets/linkedIn.svg";

// navbar links data
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

// stats section data

export const stats = [
  {
    id: "stat-1",
    count: "3800+",
    content: "User Active",
  },
  {
    id: "stat-2",
    count: "230+",
    content: "TRUSTED BY COMPANY",
  },
  {
    id: "stat-3",
    count: "$230M+",
    content: "TRANSACTION",
  },
];

// Bussiness section data

export const bussinessData = [
  {
    id: "bussiness-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes.",
  },
  {
    id: "bussiness-2",
    icon: secure,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "bussiness-3",
    icon: balance,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

// Testimonials section data

export const testimonials = [
  {
    id: "1",
    name: "Herman Jensen",
    role: "Founder & Leader",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    icon: quote,
    image: person1,
  },
  {
    id: "2",
    name: "Steve Mark",
    role: "Founder & Leader",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    icon: quote,
    image: person2,
  },
  {
    id: "3",
    name: "JensenKenn Gallagher",
    role: "Founder & Leader",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    icon: quote,
    image: person3,
  },
];

// Bussiness model section data

export const bussinessModelData = [
  {
    id: "1",
    image: airbnb,
  },
  {
    id: "2",
    image: binance,
  },
  {
    id: "3",
    image: coinbase,
  },
  {
    id: "4",
    image: dropbox,
  },
];

// Footer data

export const footerLinks = [
  {
    id: "1",
    title: "Useful Links",
    links: ["Content", "How it Works", "Create", "Explore", "Terms & Services"],
  },
  {
    id: "2",
    title: "Community",
    links: ["Help Center", "Partners", "Suggestions", "Blog ", "Newsletters"],
  },
  {
    id: "3",
    title: "Partner",
    links: ["Our Partner", "Become a Partner"],
  },
];

export const footerIcons = [insta, facebook, x, linkedIn];
