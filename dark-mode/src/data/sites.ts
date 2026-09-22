import { images } from "./images";

export interface SiteData {
  id: number;
  name: string;
  url: string;
  image: string;
  sponsored: boolean;
}

const sites: SiteData[] = [
  {
    id: 1,
    name: "Raul Brito",
    url: "https://raulvbrito.com",
    image: images.raulvbrito,
    sponsored: false,
  },
  {
    id: 2,
    name: "Lazy",
    url: "https://lazy.so",
    image: images.lazy,
    sponsored: false,
  },
  {
    id: 3,
    name: "Mobbin",
    url: "https://www.mobbin.com/?via=darkmodedesign",
    image: images.mobbin,
    sponsored: true,
  },
  {
    id: 4,
    name: "YOIN",
    url: "https://yoin-fragrance.netlify.app",
    image: images.yoin,
    sponsored: false,
  },
  {
    id: 5,
    name: "Loaf",
    url: "https://loaf.agency",
    image: images.loaf,
    sponsored: false,
  },
  {
    id: 6,
    name: "GitHub",
    url: "https://github.com/home",
    image: images.github,
    sponsored: false,
  },
  {
    id: 7,
    name: "Michał Piszczek",
    url: "https://piszczek.pl",
    image: images.piszczek,
    sponsored: false,
  },
  {
    id: 8,
    name: "Longtitude",
    url: "https://longitudedesign.com",
    image: images.longtitude,
    sponsored: false,
  },
  {
    id: 9,
    name: "Tiny Computer Co.",
    url: "https://tinycomputer.co",
    image: images.tinyComputer,
    sponsored: false,
  },
  {
    id: 10,
    name: "frame.io",
    url: "https://frame.io",
    image: images.frameIo,
    sponsored: false,
  },
  {
    id: 11,
    name: "Pablo Miguez",
    url: "https://www.pablomiguez.dev",
    image: images.pabloMiguez,
    sponsored: false,
  },
  {
    id: 12,
    name: "Breeder",
    url: "https://breeder.studio",
    image: images.breeder,
    sponsored: false,
  },
  {
    id: 13,
    name: "Rasa",
    url: "https://rasaapp.com",
    image: images.rasa,
    sponsored: false,
  },
];

export default sites;

