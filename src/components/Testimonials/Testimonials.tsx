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
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  // Customer testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      text: "Deriv is an easy and smooth trading experience, better than any other platform. Also, the peer-to-peer transaction, I find it revolutionary and the best for us traders in third-world countries.",
      author: "tinashe kurebwaseka",
      country: "Zimbabwe",
    },
    {
      id: 2,
      rating: 5,
      text: "Deriv is the best trading platform. I never had difficulty in trading for more than 5 years. Thank you Deriv for your present in trading world.",
      author: "ezra hutabarat",
      country: "Indonesia",
    },
    {
      id: 3,
      rating: 5,
      text: "I'm happy with the service provided. Deriv always updates me on what's happening and gives daily status report of accounts. And the staff is very responsive and always ready to assist.",
      author: "Wandile S'busiso Ninela",
      country: "South Africa",
    },
    {
      id: 4,
      rating: 5,
      text: "Deriv is by far the best binary options brokerage. It has over 5 different types of binary options unlike other brokers. The payments are fast and it's really amazing. Thanks Deriv.",
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
      text: "I've been using Deriv for 3 years now and it's been a fantastic journey. The platform is stable, spreads are competitive, and the educational resources are top-notch.",
      author: "ahmed hassan",
      country: "Egypt",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.ceil(testimonials.length / 4)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 4));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(testimonials.length / 4) - 1 : prev - 1
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
            className={`w-5 h-5 ${
              i < rating ? "text-green-500" : "text-gray-300"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );

  // Testimonial card component
  const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
    >
      <StarRating rating={testimonial.rating} delay={index * 0.2} />

      <motion.p
        className="text-gray-700 text-sm leading-relaxed flex-1 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {testimonial.text}
      </motion.p>

      <motion.div
        className="border-t pt-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 + 0.5 }}
      >
        <div className="font-medium text-gray-900 text-sm">
          {testimonial.author}
        </div>
        <div className="text-gray-500 text-xs mt-1">{testimonial.country}</div>
      </motion.div>
    </motion.div>
  );

  // Get current testimonials to display
  const getCurrentTestimonials = (): Testimonial[] => {
    const startIndex = currentIndex * 4;
    return testimonials.slice(startIndex, startIndex + 4);
  };

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-black text-gray-900 mb-4">
            What our customers say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
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
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft />
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mb-12">
            {Array.from({ length: Math.ceil(testimonials.length / 4) }).map(
              (_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-red-500" : "bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              )
            )}
          </div>
        </div>

        {/* Trustpilot Section */}
        <motion.div
          className="flex items-center justify-center space-x-6 pt-8 border-t border-gray-200"
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
                <FaStar className="w-8 h-8 text-green-500" />
              </motion.div>
            ))}
          </div>

          {/* Trustpilot Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-gray-800">Trustpilot</span>
          </motion.div>
        </motion.div>

        {/* Auto-play Control */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isAutoPlay ? "Pause Auto-play" : "Resume Auto-play"}
          </button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "67,448", label: "Reviews" },
            { number: "4.4/5", label: "Rating" },
            { number: "Excellent", label: "Overall" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl font-bold text-gray-900 mb-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
