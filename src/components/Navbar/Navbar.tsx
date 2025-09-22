import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const middleSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const leftSection = leftSectionRef.current;
    const middleSection = middleSectionRef.current;
    const rightSection = rightSectionRef.current;

    if (!navbar || !leftSection || !middleSection || !rightSection) return;

    // Create timeline for navbar animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "50px top",
        end: "200px top",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    // Navbar background and styling animation
    tl.to(navbar, {
      backgroundColor: "none",
      padding: "0rem 0",
      duration: 0.3,
    })
      // Left section animation - move up and fade out
      .to(
        leftSection,
        {
          y: -60,
          opacity: 0,
          duration: 0.3,
        },
        0
      )
      // Right section animation - move up and fade out
      .to(
        rightSection,
        {
          y: -60,
          opacity: 0,
          duration: 0.3,
        },
        0
      )
      // Middle section stays and adjusts colors
      .to(
        ".nav-menu-item",
        {
          color: "#374151",
          duration: 0.3,
        },
        0
      )
      // Language selector animation
      .to(
        ".lang-selector",
        {
          color: "#374151",
          duration: 0.3,
        },
        0
      )
      // Center the middle section when others are hidden
      .to(
        middleSection,
        {
          justifyContent: "center",
          duration: 0.3,
        },
        0
      );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const ChevronDown = () => (
    <svg
      className="w-4 h-4 transition-transform duration-200"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ExternalLink = () => (
    <svg
      className="w-4 h-4 transition-transform duration-200"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const Globe = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent px-10 py-6 transition-all duration-300"
      >
        <div className="flex items-center justify-between relative">
          {/* Left Section - Logo */}
          <div
            ref={leftSectionRef}
            className="flex items-center space-x-3 transition-all duration-300"
          >
            <img src="/logo.jpeg" alt="Logo" className="w-16 h-16 rounded-xl" />
          </div>

          {/* Middle Section - Navigation Menu */}
          <div
            ref={middleSectionRef}
            className="hidden lg:flex items-center space-x-6 transition-all duration-300 px-6 py-5 bg-transparent backdrop-blur-2xl rounded-full" 
          >
            <div className="nav-menu-item flex items-center space-x-1 text-white cursor-pointer hover:text-red-400 transition-colors duration-200 group">
              <span className="font-medium">Trading</span>
              <ChevronDown />
            </div>
            <div className="nav-menu-item flex items-center space-x-1 text-white cursor-pointer hover:text-red-400 transition-colors duration-200 group">
              <span className="font-medium">Platforms</span>
              <ChevronDown />
            </div>
            <div className="nav-menu-item flex items-center space-x-1 text-white cursor-pointer hover:text-red-400 transition-colors duration-200 group">
              <span className="font-medium">Learning & support</span>
              <ChevronDown />
            </div>
            <div className="nav-menu-item flex items-center space-x-1 text-white cursor-pointer hover:text-red-400 transition-colors duration-200 group">
              <span className="font-medium">About</span>
              <ChevronDown />
            </div>
            <div className="nav-menu-item flex items-center space-x-1 text-white cursor-pointer hover:text-red-400 transition-colors duration-200 group">
              <span className="font-medium">Partners</span>
              <ExternalLink />
            </div>

            {/* Language Selector in Middle Section */}
            <div className="lang-selector flex items-center space-x-2 text-white cursor-pointer hover:text-red-400 transition-colors duration-200">
              <Globe />
              <span className="font-medium">EN</span>
            </div>
          </div>

          {/* Right Section - Buttons */}
          <div
            ref={rightSectionRef}
            className="flex items-center space-x-4 transition-all duration-300"
          >
            {/* Log In Button */}
            <a href="/login" className="login-btn text-white border border-white px-6 py-2.5 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-200">
              Log in
            </a>

            {/* Open Account Button */}
            <NavLink to="/register" className="cta-btn bg-red-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-red-600 transition-all duration-200 transform hover:scale-105">
              Open account
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-black p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
