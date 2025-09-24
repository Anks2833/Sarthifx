import { useState } from "react";

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
}

const GetStartedSection = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: 1,
      title: "Sign up",
      subtitle: "Sign up in minutes. Practise with a zero-risk demo account.",
      color: "primary",
      textColor: "primary",
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
      color: "secondary",
      textColor: "primary",
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
      color: "accent",
      textColor: "primary",
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

  const StepCard = ({ step }: StepCardProps) => {
    return (
      <div
        className="rounded-2xl overflow-hidden relative min-h-[400px] sm:min-h-[500px] flex items-center"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "2px solid var(--border-primary)",
          color: "var(--text-primary)",
        }}
      >
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full p-6 sm:p-8 lg:p-12">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-black"
              style={{ color: "var(--text-primary)" }}
            >
              {step.title}
            </h3>

            <p
              className="text-base sm:text-lg leading-relaxed opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              {step.subtitle}
            </p>
          </div>

          {/* Right Side - Person + Form */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Background Person */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden">
              {/* Person representation */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--text-accent-blue), var(--text-accent-orange))`,
                }}
              >
                {/* Person silhouette */}
                <div className="absolute bottom-0 right-6 sm:right-8 w-24 sm:w-32 h-32 sm:h-48">
                  {/* Body */}
                  <div
                    className="absolute bottom-0 w-full h-20 sm:h-32 rounded-t-2xl"
                    style={{
                      background: `linear-gradient(to top, var(--bg-secondary), var(--bg-accent))`,
                    }}
                  ></div>
                  {/* Head */}
                  <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-12 sm:h-16 rounded-full"
                    style={{ backgroundColor: "var(--border-primary)" }}
                  >
                    {/* Face features */}
                    <div
                      className="absolute top-3 sm:top-4 left-2 sm:left-3 w-1 h-1 rounded-full"
                      style={{ backgroundColor: "var(--bg-primary)" }}
                    ></div>
                    <div
                      className="absolute top-3 sm:top-4 right-2 sm:right-3 w-1 h-1 rounded-full"
                      style={{ backgroundColor: "var(--bg-primary)" }}
                    ></div>
                    <div
                      className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b rounded-b-full"
                      style={{ borderColor: "var(--bg-primary)" }}
                    ></div>
                  </div>
                </div>

                {/* Background elements */}
                <div
                  className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 rounded-lg opacity-60"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                ></div>
                <div
                  className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-4 sm:w-6 h-4 sm:h-6 rounded-full opacity-60"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                ></div>
              </div>

              {/* Floating Form */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4 sm:p-6 shadow-2xl min-w-[250px] sm:min-w-[280px]"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-secondary)",
                }}
              >
                <div className="space-y-3 sm:space-y-4">
                  {step.form.fields.map(
                    (field: FormField, fieldIndex: number) => (
                      <div key={fieldIndex}>
                        <label
                          className="block text-xs sm:text-sm font-medium mb-1"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {field.label}
                        </label>
                        <div
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
                          style={{
                            backgroundColor: "var(--bg-secondary)",
                            border: "1px solid var(--border-secondary)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {field.value}
                        </div>
                      </div>
                    )
                  )}

                  {/* Form Buttons */}
                  <div className="pt-3 sm:pt-4">
                    {step.form.buttons ? (
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {step.form.buttons.map(
                          (btnText: string, btnIndex: number) => (
                            <button
                              key={btnIndex}
                              className={`py-2 sm:py-3 px-3 sm:px-4 rounded-full font-semibold text-sm sm:text-base transition-colors duration-200`}
                              style={{
                                backgroundColor:
                                  btnText === "Buy"
                                    ? "var(--text-accent-blue)"
                                    : btnText === "Sell"
                                    ? "var(--text-accent-orange)"
                                    : "var(--bg-accent)",
                                color: "var(--text-primary)",
                              }}
                            >
                              {btnText}
                            </button>
                          )
                        )}
                      </div>
                    ) : (
                      <button
                        className="w-full py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-200"
                        style={{
                          backgroundColor: "var(--text-accent-orange)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {step.form.button}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step Number */}
        <div
          className="absolute top-4 sm:top-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold"
          style={{
            backgroundColor: "var(--border-primary)",
            color: "var(--bg-primary)",
          }}
        >
          {step.id}
        </div>
      </div>
    );
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Get started in 3 simple steps
          </h2>

          {/* Progress Indicators */}
          <div className="flex justify-center items-center space-x-4 mt-6 lg:mt-8">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300`}
                  style={{
                    backgroundColor:
                      activeStep >= index
                        ? "var(--text-accent-orange)"
                        : "var(--text-secondary)",
                  }}
                />
                {index < steps.length - 1 && (
                  <div
                    className="w-6 sm:w-8 h-0.5 mx-2 transition-colors duration-300"
                    style={{
                      backgroundColor:
                        activeStep > index
                          ? "var(--text-accent-orange)"
                          : "var(--text-secondary)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Container */}
        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="cursor-pointer"
              onClick={() => setActiveStep(index)}
            >
              <StepCard step={step} index={index} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <button
            className="px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--text-accent-orange)",
              color: "var(--text-primary)",
            }}
          >
            Start Trading Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
