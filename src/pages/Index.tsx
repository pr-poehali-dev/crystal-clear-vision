import {
  InteractiveBackground,
  Header,
  HeroSection,
  IntroSection,
  LicenseSection,
  PainSection,
  BenefitsSection,
  StepsSection,
  ClientsSection,
  AboutSection,
  StatsSection,
  ReviewsSection,
  ContactSection,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen text-white relative bg-black">
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <IntroSection />
          <LicenseSection />
          <PainSection />
          <BenefitsSection />
          <StepsSection />
          <ClientsSection />
          <AboutSection />
          <StatsSection />
          <ReviewsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
