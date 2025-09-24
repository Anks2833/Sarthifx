import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../../sections/HeroSection/HeroSection";
import TradeWithConfidenceSection from "../../sections/TradeWithConfSection/TradeWithConfSection";
import AllMarkets from "../../components/AllMarkets/AllMarkets";
import TradeDayNightSection from "../../components/TradeDayNightSection/TradeDayNightSection";
// import TradeYourWaySection from "../../components/TradeWay/TradeWay";
import PaymentMethodsSection from "../../components/PaymentMethods/PaymentMethods";
import CustomerSupportSection from "../../components/CustomerSupport/CustomerSupport";
import TestimonialsSection from "../../components/Testimonials/Testimonials";
import GetStartedSection from "../../components/GetStartedSection/GetStartedSection";
import JoinTradersSection from "../../components/JoinTraderSection/JoinTraderSection";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const hero = heroRef.current;
    const heroContent = heroContentRef.current;

    if (!navbar || !hero || !heroContent) return;

    // Navbar scroll animation
    gsap.to(navbar, {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      padding: "0.5rem 0",
      boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
      scrollTrigger: {
        trigger: hero,
        start: "top -50px",
        end: "bottom top",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    // Navbar text color change
    gsap.to(".nav-text", {
      color: "#333",
      scrollTrigger: {
        trigger: hero,
        start: "top -50px",
        end: "bottom top",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    // Hero content width animation
    gsap.to(heroContent, {
      maxWidth: "800px",
      scrollTrigger: {
        trigger: hero,
        start: "top center",
        end: "bottom center",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <TradeWithConfidenceSection />
      <AllMarkets />
      <TradeDayNightSection />
      {/* <TradeYourWaySection /> */}
      <PaymentMethodsSection />
      <CustomerSupportSection />
      <TestimonialsSection />
      <GetStartedSection />
      <JoinTradersSection />
    </div>
  );
};

export default LandingPage;
