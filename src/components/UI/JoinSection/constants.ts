import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Partnering with your team completely changed how we approach marketing. The branding campaign you ran gave our product a fresh identity—and our sales skyrocketed.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "From the first meeting to the final campaign, the process was seamless. The creative team truly understood our brand and delivered outstanding results.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Thanks to your advertising strategies, our startup gained the visibility we needed. We've seen massive growth in traffic and engagement across all platforms.",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "What impressed me most was the attention to detail. Every piece of content felt tailor-made for our audience—and it worked. Our brand has never looked better.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Your branding expertise brought our vision to life. We’ve had more customer inquiries in the past month than we had in the last year.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];


export const desktopHeaderPhrase = ['Trusted by Brands', ' Like Yours'];
