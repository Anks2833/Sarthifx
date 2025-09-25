import { useState } from "react";
import { Search, ArrowRight, Mail } from "lucide-react";

const NewsroomPage = () => {
  const [activeTab, setActiveTab] = useState("press-releases");
  const [searchQuery, setSearchQuery] = useState("");

  const pressReleases = [
    {
      id: 1,
      date: "September 17, 2025",
      title:
        "Sarthifx launches monthly, skill-based demo trading tournament...",
      description:
        "Join Sarthifx's free monthly trading tournaments with $10,000 virtual funds, real cash prizes, and skill-based scoring to boost trading education.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      category: "product",
    },
    {
      id: 2,
      date: "September 11, 2025",
      title:
        "Sarthifx secures triple win in Africa and MENA as it nears 26th...",
      description:
        "Sarthifx secures triple recognition at the Global Forex Awards 2025, reaffirming trust, innovation, and client experience across Africa and MENA.",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      category: "awards",
    },
    {
      id: 3,
      date: "August 4, 2025",
      title: "Sarthifx named a Best Places to Work™ Innovative Culture 202...",
      description:
        "Sarthifx Paraguay is recognised by Great Place to Work® as a 2025 Best Places to Work™ Innovative Culture.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
      category: "company",
    },
  ];

  const newsItems = [
    {
      id: 1,
      date: "August 21, 2025",
      title: "Over a Billion People Have Limited Financial Access: How...",
      description:
        "Financial access remains unequal worldwide, with over a billion people lacking reliable banking. Peer-to-peer platforms encourage direct, flexible...",
      source: "Finance Magnates",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      date: "August 19, 2025",
      title: "User safety, fraud, and ransomware trends:...",
      description:
        "Derek Swift of Sarthifx highlights how AI has made online scams more sophisticated, targeting user behaviour and trust. Sarthifx combats this with multi...",
      source: "FNG",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      date: "August 11, 2025",
      title: "Scaling QA to match the speed of engineering innovation",
      description:
        "Sarthifx recognised the need to modernise its QA processes to keep pace. Sarthifx deployed Octomind to reduce test maintenance, aid non-technical tea...",
      source: "Octomind",
      logo: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
    },
  ];

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
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Newsroom</h1>
        <p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Stay updated with the latest announcements, news, and media highlights
          from Sarthifx.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-base md:text-lg rounded-full border border-white/20 bg-transparent focus:outline-none focus:border-white/40 transition-colors"
              style={{ color: "var(--text-primary)" }}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab("press-releases")}
            className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-medium transition-colors ${
              activeTab === "press-releases"
                ? "bg-white/20 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Press releases
          </button>
          <button
            onClick={() => setActiveTab("sarthifx-news")}
            className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-medium transition-colors ${
              activeTab === "sarthifx-news"
                ? "bg-white/20 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Sarthifx in the news
          </button>
        </div>
      </section>

      {/* Press Releases Section */}
      {activeTab === "press-releases" && (
        <section
          className="py-16 md:py-24 px-6 md:px-12"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Sarthifx press releases
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {pressReleases.map((release) => (
                <article key={release.id} className="group cursor-pointer">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={release.image}
                      alt={release.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <time
                    className="text-sm block mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {release.date}
                  </time>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {release.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {release.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors">
                See all press releases <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Sarthifx in the News Section */}
      {activeTab === "sarthifx-news" && (
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Sarthifx in the news
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {newsItems.map((item) => (
                <article key={item.id} className="group cursor-pointer">
                  <div
                    className="aspect-video rounded-xl overflow-hidden mb-4 flex items-center justify-center p-6"
                    style={{ background: "var(--bg-accent)" }}
                  >
                    <img
                      src={item.logo}
                      alt={item.source}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <time
                    className="text-sm block mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.date}
                  </time>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors">
                See all media mentions <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Press Enquiries Section */}
      <section
        className="py-16 md:py-24 px-6 md:px-12"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              For press enquiries
            </h2>
            <div
              className="space-y-4 text-base md:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>
                Get in touch with our PR & Communications team at{" "}
                <span style={{ color: "var(--text-accent-blue)" }}>
                  pr@sarthifx.com
                </span>
                .
              </p>
              <p>
                Please note the Sarthifx PR & Communications team is only able
                to respond to media enquiries at this time. If you're a Sarthifx
                customer and need help with your account, please head to our
                Help Centre.
              </p>
            </div>
            <button
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--text-accent-orange)" }}
            >
              <Mail size={18} /> Contact us
            </button>
          </div>
          <div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                alt="Professional woman working on tablet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsroomPage;
