import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <section id="intro">
        <HeroSection />
        <Featured />
      </section>
      <section id="services">
        <OffersSection />
        <FinancilaFreedom />
      </section>
      {/* <section id="future">
        <FinancialFuture />
        <IntroSection />
      </section> */}
      <section id="faq">
        <JoinSection />
        <FAQ />
      </section>
    </main>
  );
}
