import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

// Type definitions
interface Testimonial {
  id: number;
  rating: number;
  text: string;
  author: string;
  country: string;
}

interface StarRatingProps {
  rating: number;
  delay?: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay, _setIsAutoPlay] = useState<boolean>(true);

  // Customer testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      text: "Sarthifx is an easy and smooth trading experience, better than any other platform. Also, the peer-to-peer transaction, I find it revolutionary and the best for us traders in third-world countries.",
      author: "tinashe kurebwaseka",
      country: "Zimbabwe",
    },
    {
      id: 2,
      rating: 5,
      text: "Sarthifx is the best trading platform. I never had difficulty in trading for more than 5 years. Thank you Sarthifx for your present in trading world.",
      author: "ezra hutabarat",
      country: "Indonesia",
    },
    {
      id: 3,
      rating: 5,
      text: "I'm happy with the service provided. Sarthifx always updates me on what's happening and gives daily status report of accounts. And the staff is very responsive and always ready to assist.",
      author: "Wandile S'busiso Ninela",
      country: "South Africa",
    },
    {
      id: 4,
      rating: 5,
      text: "Sarthifx is by far the best binary options brokerage. It has over 5 different types of binary options unlike other brokers. The payments are fast and it's really amazing. Thanks Sarthifx.",
      author: "philip sserugunda",
      country: "Uganda",
    },
    {
      id: 5,
      rating: 5,
      text: "Great platform with excellent customer service. The trading tools are intuitive and the mobile app works perfectly. Withdrawals are processed quickly without any issues.",
      author: "maria gonzalez",
      country: "Spain",
    },
    {
      id: 6,
      rating: 5,
      text: "I've been using Sarthifx for 3 years now and it's been a fantastic journey. The platform is stable, spreads are competitive, and the educational resources are top-notch.",
      author: "ahmed hassan",
      country: "Egypt",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) =>
          (prev + 1) % Math.ceil(testimonials.length / getCardsPerView())
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  // Get cards per view based on screen size
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // sm
    }
    return 3; // default
  };

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % Math.ceil(testimonials.length / getCardsPerView())
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.ceil(testimonials.length / getCardsPerView()) - 1
        : prev - 1
    );
  };

  // Star rating component
  const StarRating = ({ rating, delay = 0 }: StarRatingProps) => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: delay + i * 0.1,
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          <FaStar
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              i < rating ? "text-yellow-400" : "opacity-30"
            }`}
            style={{
              color:
                i < rating
                  ? "var(--text-accent-orange)"
                  : "var(--text-secondary)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );

  // Testimonial card component
  const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => (
    <motion.div
      className="p-4 sm:p-6 rounded-2xl shadow-lg h-full flex flex-col"
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-secondary)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
    >
      <StarRating rating={testimonial.rating} delay={index * 0.2} />

      <motion.p
        className="text-sm sm:text-base leading-relaxed flex-1 mb-4 sm:mb-6"
        style={{ color: "var(--text-secondary)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {testimonial.text}
      </motion.p>

      <motion.div
        className="pt-4"
        style={{
          borderTopColor: "var(--border-secondary)",
          borderTopWidth: "1px",
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 + 0.5 }}
      >
        <div
          className="font-medium text-sm sm:text-base"
          style={{ color: "var(--text-primary)" }}
        >
          {testimonial.author}
        </div>
        <div
          className="text-xs sm:text-sm mt-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {testimonial.country}
        </div>
      </motion.div>
    </motion.div>
  );

  // Get current testimonials to display
  const getCurrentTestimonials = (): Testimonial[] => {
    const cardsPerView = getCardsPerView();
    const startIndex = currentIndex * cardsPerView;
    return testimonials.slice(startIndex, startIndex + cardsPerView);
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            What our customers say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mb-8">
            <motion.button
              onClick={goToPrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border-secondary)",
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "var(--bg-accent)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border-secondary)",
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "var(--bg-accent)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Trustpilot Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6 sm:pt-8"
          style={{
            borderTopColor: "var(--border-secondary)",
            borderTopWidth: "1px",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Trustpilot Stars */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                <FaStar
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  style={{ color: "var(--text-accent-orange)" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Trustpilot Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <FaStar
              className="w-6 h-6 sm:w-8 sm:h-8"
              style={{ color: "var(--text-accent-orange)" }}
            />
            <span
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Trustpilot
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
