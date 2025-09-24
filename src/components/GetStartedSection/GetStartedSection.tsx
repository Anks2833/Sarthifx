import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  CreditCard,
  DollarSign,
  TrendingUp,
  TrendingDown,
  User,
  Check,
} from "lucide-react";

// Type definitions
interface FormField {
  label: string;
  value: string;
  type: "email" | "password" | "text";
  icon?: any;
}

interface FormData {
  fields: FormField[];
  button?: string;
  buttons?: string[];
}

interface PersonData {
  position: string;
  bg: string;
  clothes: string;
}

interface Step {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  textColor: string;
  form: FormData;
  person: PersonData;
}

interface StepCardProps {
  step: Step;
  index: number;
  isActive: boolean;
}

const GetStartedSection = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: 1,
      title: "Sign up",
      subtitle: "Sign up in minutes. Practice with a zero-risk demo account.",
      color: "primary",
      textColor: "primary",
      form: {
        fields: [
          {
            label: "Email",
            value: "john@email.com",
            type: "email",
            icon: Mail,
          },
          {
            label: "Password",
            value: "••••••••••••",
            type: "password",
            icon: Lock,
          },
        ],
        button: "Sign up",
      },
      person: {
        position: "right",
        bg: "from-gray-400 to-gray-600",
        clothes: "from-white to-gray-100",
      },
    },
    {
      id: 2,
      title: "Deposit",
      subtitle: "Use your favorite local payment method to fund your account.",
      color: "secondary",
      textColor: "primary",
      form: {
        fields: [
          {
            label: "Card Number",
            value: "1234 •••• •••• 3423",
            type: "text",
            icon: CreditCard,
          },
          {
            label: "Amount",
            value: "USD $ 4,200.00",
            type: "text",
            icon: DollarSign,
          },
        ],
        button: "Deposit Now",
      },
      person: {
        position: "right",
        bg: "from-blue-400 to-cyan-500",
        clothes: "from-blue-600 to-blue-800",
      },
    },
    {
      id: 3,
      title: "Trade",
      subtitle: "Start your trading journey.",
      color: "accent",
      textColor: "primary",
      form: {
        fields: [
          { label: "Bid", value: "1.06851", type: "text", icon: TrendingDown },
          { label: "Ask", value: "1.06870", type: "text", icon: TrendingUp },
        ],
        buttons: ["Buy", "Sell"],
      },
      person: {
        position: "right",
        bg: "from-blue-300 to-blue-500",
        clothes: "from-orange-400 to-yellow-500",
      },
    },
  ];

  const StepCard = ({ step, index, isActive }: StepCardProps) => {
    return (
      <motion.div
        className="rounded-2xl overflow-hidden relative min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] flex items-center cursor-pointer"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: isActive
            ? "2px solid var(--text-accent-orange)"
            : "2px solid var(--border-primary)",
          color: "var(--text-primary)",
        }}
        onClick={() => setActiveStep(index)}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        {/* Gradient overlay for active state */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full p-4 sm:p-6 lg:p-8">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-3 sm:space-y-4 order-2 lg:order-1">
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
              animate={isActive ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
            >
              {step.title}
            </motion.h3>

            <p
              className="text-sm sm:text-base leading-relaxed opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              {step.subtitle}
            </p>

            {/* Progress indicator for this step */}
            <motion.div
              className="flex items-center space-x-2 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: isActive
                    ? "var(--text-accent-orange)"
                    : "var(--text-secondary)",
                }}
                animate={isActive ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
              />
              <span
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                Step {step.id} of {steps.length}
              </span>
            </motion.div>
          </div>

          {/* Right Side - Person + Form */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Background Person */}
            <div className="relative w-full h-48 sm:h-64 lg:h-72 rounded-2xl overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--text-accent-blue), var(--text-accent-orange))`,
                }}
                animate={{
                  background: [
                    "linear-gradient(135deg, var(--text-accent-blue), var(--text-accent-orange))",
                    "linear-gradient(225deg, var(--text-accent-orange), var(--text-accent-blue))",
                    "linear-gradient(135deg, var(--text-accent-blue), var(--text-accent-orange))",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Enhanced person silhouette */}
                <div className="absolute bottom-0 right-4 sm:right-6 w-16 sm:w-24 h-20 sm:h-32">
                  {/* Body */}
                  <motion.div
                    className="absolute bottom-0 w-full h-12 sm:h-20 rounded-t-2xl"
                    style={{
                      background: `linear-gradient(to top, var(--bg-secondary), var(--bg-accent))`,
                    }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Head */}
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-8 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--border-primary)" }}
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <User size={16} className="text-white" />
                  </motion.div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute top-2 sm:top-3 left-2 sm:left-3 w-4 sm:w-6 h-4 sm:h-6 rounded-lg opacity-60"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-3 sm:w-4 h-3 sm:h-4 rounded-full opacity-60"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>

              {/* Enhanced Floating Form */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl p-3 sm:p-4 shadow-2xl min-w-[220px] sm:min-w-[260px] backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(var(--bg-primary-rgb), 0.95)",
                  border: "1px solid var(--border-secondary)",
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="space-y-3">
                  {step.form.fields.map(
                    (field: FormField, fieldIndex: number) => {
                      const IconComponent = field.icon;
                      return (
                        <motion.div
                          key={fieldIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: fieldIndex * 0.2 }}
                        >
                          <label
                            className="block text-xs font-medium mb-1.5 flex items-center space-x-2"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {IconComponent && <IconComponent size={14} />}
                            <span>{field.label}</span>
                          </label>
                          <div
                            className="w-full px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-[1.02]"
                            style={{
                              backgroundColor: "var(--bg-secondary)",
                              border: "1px solid var(--border-secondary)",
                              color: "var(--text-primary)",
                            }}
                          >
                            {field.value}
                          </div>
                        </motion.div>
                      );
                    }
                  )}

                  {/* Enhanced Form Buttons */}
                  <motion.div
                    className="pt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {step.form.buttons ? (
                      <div className="grid grid-cols-2 gap-2">
                        {step.form.buttons.map(
                          (btnText: string, btnIndex: number) => (
                            <motion.button
                              key={btnIndex}
                              className="py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-1"
                              style={{
                                backgroundColor:
                                  btnText === "Buy"
                                    ? "var(--text-accent-blue)"
                                    : btnText === "Sell"
                                    ? "var(--text-accent-orange)"
                                    : "var(--bg-accent)",
                                color: "var(--text-primary)",
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {btnText === "Buy" ? (
                                <TrendingUp size={14} />
                              ) : (
                                <TrendingDown size={14} />
                              )}
                              <span>{btnText}</span>
                            </motion.button>
                          )
                        )}
                      </div>
                    ) : (
                      <motion.button
                        className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2"
                        style={{
                          backgroundColor: "var(--text-accent-orange)",
                          color: "var(--text-primary)",
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Check size={14} />
                        <span>{step.form.button}</span>
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Step Number */}
        <motion.div
          className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-lg font-bold shadow-lg"
          style={{
            backgroundColor: isActive
              ? "var(--text-accent-orange)"
              : "var(--border-primary)",
            color: "var(--text-primary)",
          }}
          animate={isActive ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
        >
          {step.id}
        </motion.div>

        {/* Active indicator glow */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: "0 0 20px rgba(255, 165, 0, 0.3)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 overflow-hidden relative"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl opacity-20 bg-gradient-to-br from-blue-400 to-purple-400"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-xl opacity-20 bg-gradient-to-br from-orange-400 to-pink-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Get started in 3 simple steps
          </motion.h2>

          {/* Enhanced Progress Indicators */}
          <motion.div
            className="flex justify-center items-center space-x-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  className="relative cursor-pointer"
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border-2"
                    style={{
                      backgroundColor:
                        activeStep >= index
                          ? "var(--text-accent-orange)"
                          : "transparent",
                      borderColor:
                        activeStep >= index
                          ? "var(--text-accent-orange)"
                          : "var(--text-secondary)",
                    }}
                    animate={activeStep === index ? { scale: [1, 1.3, 1] } : {}}
                    transition={{
                      duration: 1.5,
                      repeat: activeStep === index ? Infinity : 0,
                    }}
                  />
                  {/* Step label */}
                  <motion.div
                    className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap"
                    style={{ color: "var(--text-secondary)" }}
                    animate={{ opacity: activeStep === index ? 1 : 0.6 }}
                  >
                    {step.title}
                  </motion.div>
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    className="w-8 sm:w-12 h-0.5 mx-3 transition-all duration-500"
                    style={{
                      backgroundColor:
                        activeStep > index
                          ? "var(--text-accent-orange)"
                          : "var(--text-secondary)",
                    }}
                    animate={{
                      scaleX: activeStep > index ? 1 : 0.5,
                    }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Steps Container */}
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isActive={activeStep === index}
            />
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-10 lg:mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
            style={{
              backgroundColor: "var(--text-accent-orange)",
              color: "var(--text-primary)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Trading Now</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <TrendingUp size={20} />
            </motion.div>
          </motion.button>

          {/* Additional info */}
          <motion.p
            className="mt-4 text-xs sm:text-sm opacity-75"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ delay: 1 }}
          >
            No fees on your first deposit • Practice with demo account first
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
