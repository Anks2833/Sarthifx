import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const backgroundRef = useRef(null);

  // Framer Motion scroll tracking for the width reduction effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Transform values based on scroll - subtle width reduction
  const backgroundWidth = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100%", "95%"]
  );
  const backgroundHeight = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100%", "95%"]
  );

  useEffect(() => {
    const hero = heroRef.current;
    const heroContent = heroContentRef.current;

    if (!hero || !heroContent) return;

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
    <section
      ref={heroRef}
      className="relative h-screen bg-white flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Trading Background Image with blur effect */}
      <motion.div
        ref={backgroundRef}
        className="absolute z-0"
        style={{
          width: backgroundWidth,
          height: backgroundHeight,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
      >
        {/* Primary background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop')",
            filter: "blur(8px) brightness(0.4)",
            transform: "scale(1.1)", // Prevent blur edges from showing
          }}
        ></div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Left Content */}
        <motion.div
          ref={heroContentRef}
          className="max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-white mb-4">
            <span className="text-3xl font-extrabold">Trading for</span>
          </div>
          <h1 className="text-7xl font-extrabold text-white leading-tight mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Anyone
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-extrabold"
            >
              Anywhere
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-extrabold"
            >
              Anytime
            </motion.div>
          </h1>
          <motion.p
            className="text-gray-300 text-lg mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Widest range of products, markets, platforms with 24/7 customer
            support.
          </motion.p>
          <motion.button
            className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-all transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Open account
          </motion.button>
        </motion.div>

        {/* Right Content - Person Image */}
        <div className="hidden lg:block lg:mt-28">
          <img
            src="/HeroSectionImage.webp"
            alt="Trader"
            className="w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Trustpilot Rating */}
      <motion.div
        className="w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="flex justify-center items-center space-x-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-10 backdrop-blur-sm px-6 py-5">
          <div className="flex space-x-1">
            <img
              src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/683928506676896290d68f91_trustpilot-stars.svg"
              alt="Star"
              className="w-32"
            />
          </div>
          <span className="text-white text-sm">
            4.4 out of 5 based on 67,448 reviews
          </span>
          <img
            src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df573bf331c84b6c69e7_others-trustpilot.svg"
            alt="Trustpilot"
            className="w-20"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
