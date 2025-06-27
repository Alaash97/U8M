type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How do I get started with your advertising services?',
    answer:
      'Simply reach out through our contact form or book a free consultation, and our team will guide you through the onboarding process.',
  },
  {
    question: 'What types of businesses do you work with?',
    answer:
      "We work with Berlin's startups, small businesses, and established brands across various industries looking to boost their visibility and reach.",
  },
  {
    question: 'how many episodes per a campaign?',
    answer:
      '4 episodes per campaign , each episode is 3-4 mintues long. This allows us to create engaging and informative content that resonates with your audience.',
  },
  {
    question: 'How long does it take to launch a campaign?',
    answer:
      'Timelines vary based on campaign size, but most projects are up and running within 2 to 3 weeks after kickoff.',
  },
];
