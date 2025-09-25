import { useState } from "react";

const EconomicCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(25);
  const [selectedMonth, setSelectedMonth] = useState("SEP 2025");
  const [importanceFilter, setImportanceFilter] = useState([
    "LOW",
    "MEDIUM",
    "HIGH",
  ]);
  const [eventTypeFilter, setEventTypeFilter] = useState(["ECONOMIC EVENTS"]);
  const [countryFilter, setCountryFilter] = useState([]);
  const [expandedFAQ, setExpandedFAQ] = useState({ "what-show": true });

  const toggleFAQ = (faqId) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const economicEvents = [
    {
      time: "14:40",
      country: "IT",
      flag: "🇮🇹",
      event: "6-Month BOT Auction",
      importance: "LOW",
      actual: "2.044%",
      forecast: null,
      previous: "2.012%",
    },
    {
      time: "15:00",
      country: "ZA",
      flag: "🇿🇦",
      event: "PPI YoY AUG",
      importance: "HIGH",
      actual: "2.1%",
      forecast: "1.3%",
      previous: "1.5%",
    },
    {
      time: "15:00",
      country: "ZA",
      flag: "🇿🇦",
      event: "PPI MoM AUG",
      importance: "HIGH",
      actual: "0.3%",
      forecast: "-0.3%",
      previous: "0.7%",
    },
    {
      time: "15:30",
      country: "GB",
      flag: "🇬🇧",
      event: "CBI Distributive Trades SEP",
      importance: "MEDIUM",
      actual: "-28",
      forecast: null,
      previous: "-32",
    },
    {
      time: "15:30",
      country: "GB",
      flag: "🇬🇧",
      event: "Treasury Stock 2038 Auction",
      importance: "LOW",
      actual: "3.981%",
      forecast: null,
      previous: null,
    },
    {
      time: "15:30",
      country: "LU",
      flag: "🇱🇺",
      event: "Balance of Trade JUL",
      importance: "LOW",
      actual: "-€600M",
      forecast: null,
      previous: "-€630M",
    },
    {
      time: "15:30",
      country: "GR",
      flag: "🇬🇷",
      event: "Total Credit YoY AUG",
      importance: "LOW",
      actual: "7%",
      forecast: null,
      previous: "7.2%",
    },
    {
      time: "17:00",
      country: "TR",
      flag: "🇹🇷",
      event: "Foreign Exchange Reserves SEP/19",
      importance: "LOW",
      actual: "$84.5B",
      forecast: null,
      previous: null,
    },
    {
      time: "17:30",
      country: "BR",
      flag: "🇧🇷",
      event: "IPCA mid-month CPI YoY SEP",
      importance: "LOW",
      actual: "5.1%",
      forecast: null,
      previous: "4.95%",
    },
  ];

  const volatilityData = [
    { pair: "GBP/USD", pips: "41.45", color: "text-yellow-500" },
    { pair: "EUR/USD", pips: "32.64", color: "text-yellow-500" },
    { pair: "EUR/USD", pips: "36.59", color: "text-yellow-500" },
    { pair: "USD/TRY", pips: "359.69", color: "text-yellow-500" },
    { pair: "USD/BRL", pips: "490.07", color: "text-yellow-500" },
  ];

  const howToSteps = [
    {
      number: "1",
      title: "Select a date",
      description:
        "Choose a specific date on the calendar or use the Recent & Next slider to view upcoming or past events.",
    },
    {
      number: "2",
      title: "Search for events",
      description:
        'Use the search bar or filter by "Event Type" to find specific events.',
    },
    {
      number: "3",
      title: "Filter by region, currency, or importance",
      description:
        'Narrow your search by setting the "Countries" or "Importance" filter relevant to your trading strategy.',
    },
    {
      number: "4",
      title: "Plan your trades",
      description:
        "Click on events to view details, assess potential market impacts, and make informed trading decisions",
    },
  ];

  const faqs = [
    {
      id: "what-show",
      question: "What does the economic calendar show?",
      answer:
        "Each economic event shows the date, time, and country. You'll also see actual, forecasted and previous values, which tell you what the market expects and how it performed before. This can help you understand potential market movements.",
    },
    {
      id: "customise",
      question:
        "Can I customise the economic calendar to show only certain types of events?",
      answer:
        "Yes, you can filter events by importance level (Low, Medium, High), event type (Economic Events, Holidays), and specific countries or regions to focus on the events most relevant to your trading strategy.",
    },
    {
      id: "importance-levels",
      question: "What do Low, Medium, and High importance levels mean?",
      answer:
        "These levels indicate the potential market impact of economic events. High importance events typically cause significant market movements, Medium events have moderate impact, and Low importance events usually have minimal market influence.",
    },
    {
      id: "update-frequency",
      question: "How often is the economic calendar updated?",
      answer:
        "The economic calendar is updated in real-time as new economic data becomes available and events are scheduled or rescheduled by various economic institutions worldwide.",
    },
    {
      id: "clickable-icons",
      question:
        "What do the clickable icons on the economic calendar mean, and how can I use them?",
      answer:
        "The icons provide additional information and tools for each economic event, including volatility measurements, historical data, and links to detailed analysis to help you make informed trading decisions.",
    },
  ];

  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(i);
    }
    return days;
  };

  const toggleImportanceFilter = (level) => {
    setImportanceFilter((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  return (
    <div
      className="pt-20"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Economic Calendar
        </h1>
        <p
          className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Stay updated on key economic events in real-time with our calendar.
          Analyse how the events affect financial markets to strategically plan
          your trades.
        </p>
      </section>

      {/* Calendar Interface */}
      <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-white/5 rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:w-80 space-y-6">
              {/* Recent & Next Slider */}
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">Recent & Next</span>
                </div>
                <div className="relative">
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-red-500 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <button>◀</button>
                  <span className="font-semibold">{selectedMonth}</span>
                  <button>▶</button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                    <div
                      key={i}
                      className="py-2 font-semibold"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {generateCalendarDays().map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`py-2 rounded hover:bg-white/20 transition-colors ${
                        day === selectedDate
                          ? "bg-red-500 text-white font-semibold"
                          : "text-white"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div
                  className="mt-4 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  (GMT+05:30) 15:29
                </div>
              </div>

              {/* Filters */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Filters</h3>

                {/* Importance Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Importance</h4>
                  <div className="flex gap-2">
                    {["LOW", "MEDIUM", "HIGH"].map((level) => (
                      <button
                        key={level}
                        onClick={() => toggleImportanceFilter(level)}
                        className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                          importanceFilter.includes(level)
                            ? "bg-white/20 text-white"
                            : "bg-white/10 text-gray-400 hover:bg-white/15"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Event Type Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Event Type</h4>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-white/10 rounded text-sm">
                      HOLIDAYS
                    </button>
                    <button className="px-3 py-1 bg-white/20 rounded text-sm font-semibold">
                      ECONOMIC EVENTS
                    </button>
                  </div>
                </div>

                {/* Countries Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Countries</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="g7" />
                      <label htmlFor="g7" className="text-sm">
                        G7
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="eu" />
                      <label htmlFor="eu" className="text-sm">
                        European Union
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="all" />
                      <label htmlFor="all" className="text-sm">
                        All Countries
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Calendar Content */}
            <div className="flex-1">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">28 events</h3>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-white/10 rounded">
                      🔍
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded">
                      ❓
                    </button>
                  </div>
                </div>

                {/* Events Table Header */}
                <div
                  className="grid grid-cols-6 gap-4 py-3 border-b border-white/10 text-sm font-semibold"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <div>Time</div>
                  <div>Country</div>
                  <div className="col-span-2">Event</div>
                  <div>Importance</div>
                  <div>Actual/Forecast/Previous</div>
                </div>
              </div>

              {/* Current Date Header */}
              <div className="mb-4">
                <div className="text-lg font-semibold">2025 Sep 25</div>
              </div>

              {/* Past Events Indicator */}
              <div className="mb-6">
                <div
                  className="flex items-center gap-2"
                  style={{ color: "var(--text-accent-orange)" }}
                >
                  <span>⬆</span>
                  <span className="font-semibold">Past Events</span>
                </div>
              </div>

              {/* Events List */}
              <div className="space-y-4">
                {economicEvents.map((event, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-yellow-500 pl-4 py-2 hover:bg-white/5 rounded"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 sm:gap-4 items-center text-sm">
                      <div className="font-semibold">{event.time}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{event.flag}</span>
                        <span>{event.country}</span>
                      </div>
                      <div className="col-span-1 sm:col-span-2">
                        <div className="font-semibold">{event.event}</div>
                      </div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            event.importance === "HIGH"
                              ? "bg-red-500 text-white"
                              : event.importance === "MEDIUM"
                              ? "bg-yellow-500 text-black"
                              : "bg-gray-500 text-white"
                          }`}
                        >
                          {event.importance}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          {event.actual && (
                            <span className="font-semibold">
                              {event.actual}
                            </span>
                          )}
                          {event.forecast && (
                            <span style={{ color: "var(--text-secondary)" }}>
                              ({event.forecast})
                            </span>
                          )}
                          {event.previous && (
                            <span style={{ color: "var(--text-secondary)" }}>
                              [{event.previous}]
                            </span>
                          )}
                          <div className="flex gap-1 ml-2">
                            <button className="w-4 h-4 bg-red-500 rounded-sm text-xs">
                              📈
                            </button>
                            <button className="w-4 h-4 bg-blue-500 rounded-sm text-xs">
                              📊
                            </button>
                            <button className="w-4 h-4 bg-gray-500 rounded-sm text-xs">
                              💹
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Volatility Indicators */}
              <div className="mt-8 space-y-3">
                {volatilityData.map((data, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-yellow-500/10 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      💱
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{data.pair}</div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        We measured{" "}
                        <span className={data.color}>{data.pips} pips</span>{" "}
                        volatility in the 4 hours after past events.
                      </div>
                    </div>
                    <button
                      className="text-sm font-semibold hover:opacity-80 transition-opacity"
                      style={{ color: "var(--text-accent-orange)" }}
                    >
                      VIEW LEVELS
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Read Calendar */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Laptop Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-orange-200 to-orange-400 rounded-2xl p-8">
                <div className="bg-gray-900 rounded-xl p-4 aspect-video relative overflow-hidden">
                  {/* Laptop Screen Content */}
                  <div className="h-full bg-white rounded-lg p-3">
                    <div className="h-full bg-gradient-to-br from-blue-50 to-white rounded flex flex-col">
                      {/* Mock browser tabs */}
                      <div className="flex gap-2 mb-2">
                        <div className="w-16 h-2 bg-gray-300 rounded"></div>
                        <div className="w-12 h-2 bg-red-400 rounded"></div>
                        <div className="w-14 h-2 bg-gray-300 rounded"></div>
                      </div>
                      {/* Mock chart area */}
                      <div className="flex-1 bg-gradient-to-br from-blue-100 to-green-100 rounded relative">
                        <div className="absolute inset-2 grid grid-cols-12 gap-1 opacity-30">
                          {[...Array(60)].map((_, i) => (
                            <div
                              key={i}
                              className={`${
                                i % 4 === 0 ? "bg-blue-400" : "bg-gray-300"
                              } rounded-sm`}
                            ></div>
                          ))}
                        </div>
                        {/* Mock economic event popup */}
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          Economic Event
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                How to read our economic calendar
              </h2>

              <div className="space-y-8">
                {howToSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                      style={{
                        background: "var(--text-accent-orange)",
                        color: "white",
                      }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p style={{ color: "var(--text-secondary)" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Economic calendar FAQs
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-white/10 pb-6">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-4 text-left hover:bg-white/5 transition-colors rounded-lg px-4"
                >
                  <span className="text-lg sm:text-xl font-semibold pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform flex-shrink-0 ${
                      expandedFAQ[faq.id] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedFAQ[faq.id] && (
                  <div className="px-4 pb-4">
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EconomicCalendarPage;
