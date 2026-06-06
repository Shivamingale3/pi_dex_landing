import HeroSection from "@/components/Hero/HeroSection";
import Container from "@/components/Container";
import MonitorsSection from "@/components/Monitors/MonitorsSection";
import AlertsSection from "@/components/Alerts/AlertsSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import QuickStartSection from "@/components/QuickStart/QuickStartSection";
import CommandsSection from "@/components/Commands/CommandsSection";
import AboutSection from "@/components/About/AboutSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container>
        <MonitorsSection />
      </Container>
      <Container>
        <AlertsSection />
      </Container>
      <Container>
        <FeaturesSection />
      </Container>
      <Container>
        <QuickStartSection />
      </Container>
      <Container>
        <CommandsSection />
      </Container>
      <Container>
        <AboutSection />
      </Container>
      <Footer />
    </>
  );
}
