import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  MotionValue,
} from "framer-motion";

// Type definitions
interface FormField {
  label: string;
  value: string;
  type: "email" | "password" | "text";
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
  progress: MotionValue<number>;
}

const GetStartedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transform scroll progress to step activation
  const step1Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const step2Progress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const step3Progress = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Sign up",
      subtitle: "Sign up in minutes. Practise with a zero-risk demo account.",
      color: "bg-gray-200",
      textColor: "text-gray-900",
      form: {
        fields: [
          { label: "Email", value: "john@email.com", type: "email" },
          { label: "Password", value: "••••••••••••", type: "password" },
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
      subtitle: "Use your favourite local payment method to fund your account.",
      color: "bg-red-500",
      textColor: "text-white",
      form: {
        fields: [
          { label: "Card Number", value: "1234 •••• •••• 3423", type: "text" },
          { label: "Amount", value: "USD $ 4200.00", type: "text" },
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
      color: "bg-gray-900",
      textColor: "text-white",
      form: {
        fields: [
          { label: "Bid", value: "1.06851", type: "text" },
          { label: "Ask", value: "1.06870", type: "text" },
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

  const StepCard = ({ step, index, progress }: StepCardProps) => {
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });

    return (
      <motion.div
        className={`${step.color} ${step.textColor} rounded-3xl overflow-hidden relative min-h-[500px] flex items-center`}
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 100,
        }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          type: "spring",
          stiffness: 100,
        }}
        style={{
          scale: useTransform(progress, [0, 1], [0.9, 1]),
          rotateX: useTransform(progress, [0, 1], [10, 0]),
        }}
      >
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full p-8 lg:p-12">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 + 0.5 }}
          >
            <motion.h3
              className="text-5xl font-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 + 0.7 }}
            >
              {step.title}
            </motion.h3>

            <motion.p
              className={`text-lg leading-relaxed ${step.textColor} opacity-80`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 + 0.9 }}
            >
              {step.subtitle}
            </motion.p>
          </motion.div>

          {/* Right Side - Person + Form */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 + 0.6 }}
          >
            {/* Background Person */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              {/* Person representation */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.person.bg} flex items-center justify-center`}
              >
                {/* Person silhouette */}
                <div className="absolute bottom-0 right-8 w-32 h-48">
                  {/* Body */}
                  <div
                    className={`absolute bottom-0 w-full h-32 bg-gradient-to-t ${step.person.clothes} rounded-t-2xl`}
                  ></div>
                  {/* Head */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full">
                    {/* Face features */}
                    <div className="absolute top-4 left-3 w-1 h-1 bg-gray-700 rounded-full"></div>
                    <div className="absolute top-4 right-3 w-1 h-1 bg-gray-700 rounded-full"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b border-gray-700 rounded-b-full"></div>
                  </div>
                </div>

                {/* Background elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
              </div>

              {/* Floating Form */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-2xl min-w-[280px]"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="space-y-4">
                  {step.form.fields.map(
                    (field: FormField, fieldIndex: number) => (
                      <motion.div
                        key={fieldIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.3 + 1.2 + fieldIndex * 0.1,
                        }}
                      >
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                          {field.label}
                        </label>
                        <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900">
                          {field.type === "password" ? (
                            <motion.span
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              {field.value}
                            </motion.span>
                          ) : (
                            field.value
                          )}
                        </div>
                      </motion.div>
                    )
                  )}

                  {/* Form Buttons */}
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3 + 1.5 }}
                  >
                    {step.form.buttons ? (
                      <div className="grid grid-cols-2 gap-3">
                        {step.form.buttons.map(
                          (btnText: string, btnIndex: number) => (
                            <motion.button
                              key={btnIndex}
                              className={`py-3 px-4 rounded-full font-semibold ${
                                btnText === "Buy"
                                  ? "bg-green-500 text-white"
                                  : btnText === "Sell"
                                  ? "bg-red-500 text-white"
                                  : "bg-gray-900 text-white"
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {btnText}
                            </motion.button>
                          )
                        )}
                      </div>
                    ) : (
                      <motion.button
                        className="w-full py-3 bg-gray-900 text-white rounded-full font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {step.form.button}
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Step Number */}
        <motion.div
          className="absolute top-6 left-6 w-12 h-12 bg-black/10 rounded-full flex items-center justify-center text-2xl font-bold"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.3 + 0.3, type: "spring" }}
        >
          {step.id}
        </motion.div>

        {/* Floating decorative elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    );
  };

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-black text-gray-900 mb-6">
            Get started in 3 simple steps
          </h2>

          {/* Progress Indicators */}
          <motion.div
            className="flex justify-center items-center space-x-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  className={`w-4 h-4 rounded-full ${
                    activeStep >= index ? "bg-red-500" : "bg-gray-300"
                  }`}
                  animate={{
                    scale: activeStep === index ? 1.3 : 1,
                    backgroundColor:
                      activeStep >= index ? "#ef4444" : "#d1d5db",
                  }}
                />
                {index < steps.length - 1 && (
                  <motion.div
                    className="w-8 h-0.5 bg-gray-300 mx-2"
                    animate={{
                      backgroundColor:
                        activeStep > index ? "#ef4444" : "#d1d5db",
                    }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Steps Container */}
        <div ref={containerRef} className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              onViewportEnter={() => setActiveStep(index)}
              viewport={{ amount: 0.5 }}
            >
              <StepCard
                step={step}
                index={index}
                progress={
                  index === 0
                    ? step1Progress
                    : index === 1
                    ? step2Progress
                    : step3Progress
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-red-500 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Trading Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
