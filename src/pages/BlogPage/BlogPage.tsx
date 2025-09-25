import { useState } from "react";
import {
  Search,
  Play,
  Newspaper,
  Video,
  BarChart3,
  Layers,
  Laptop,
  Bell,
  MoreHorizontal,
} from "lucide-react";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All", icon: Newspaper },
    { id: "videos", label: "Videos", icon: Video },
    { id: "markets", label: "Markets", icon: BarChart3 },
    { id: "trade-types", label: "Trade types", icon: Layers },
    { id: "platforms", label: "Platforms", icon: Laptop },
    { id: "news", label: "News & updates", icon: Bell },
    { id: "others", label: "Others", icon: MoreHorizontal },
  ];

  const featuredArticles = [
    {
      id: 1,
      date: "September 2, 2025",
      title:
        "Silver prices hit 14-year highs driving a potential commodities rally",
      image:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      date: "September 1, 2025",
      title:
        "Can Bitcoin ETF inflows shift the asset into its next bull cycle?",
      image:
        "https://images.unsplash.com/photo-1518544866-3c0f1b39b7a1?w=150&h=150&fit=crop",
    },
  ];

  const articles = [
    {
      id: 1,
      date: "September 24, 2025",
      title:
        "Will Bitcoin price overcome liquidation fears with 401(k) adoption on the horizon?",
      description:
        "Yes, according to analysts, while Bitcoin price in 2025 faces immediate risks from $12.5 billion in potential liquidations, the push to open $9.3 trillion in 401(k) retirement assets to crypto provides a powerful long-term adoption driver.",
      image:
        "https://images.unsplash.com/photo-1518544866-3c0f1b39b7a1?w=400&h=300&fit=crop",
      category: "markets",
    },
    {
      id: 2,
      date: "September 23, 2025",
      title:
        "Will the 100B OpenAI deal ignite the next Nvidia stock supercycle?",
      description:
        "Nvidia's $100 billion partnership with OpenAI lifted its stock to a record $183.68 this week.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      category: "markets",
    },
    {
      id: 3,
      date: "September 22, 2025",
      title: "Why gold prices are signalling recession risks in 2025",
      description:
        "Gold prices at $3,700 per ounce are signalling rising U.S. recession risks, with Moody's Analytics putting the probability of a downturn at 48% - the highest since the 2020 pandemic.",
      image:
        "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=300&fit=crop",
      category: "markets",
    },
  ];

  const videos = [
    {
      id: 1,
      date: "June 6, 2025",
      title: "How oil trading shaped global markets and what comes next",
      description:
        "From the Texas oil booms to modern energy crises, we trace oil's impact on global markets and economies.",
      thumbnail:
        "https://images.unsplash.com/photo-1611975083096-2b6b7e18d711?w=400&h=300&fit=crop",
      duration: "12:34",
    },
    {
      id: 2,
      date: "May 28, 2025",
      title: "Bitcoin's surge: ETF effect or smart money move?",
      description:
        "We examine Bitcoin's impressive $110,000 breakthrough alongside significant market developments.",
      thumbnail:
        "https://images.unsplash.com/photo-1518544866-3c0f1b39b7a1?w=400&h=300&fit=crop",
      duration: "15:42",
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
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="max-w-2xl mb-10">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search articles, videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-base rounded-full border border-white/20 bg-transparent focus:outline-none focus:border-white/40 transition-colors"
              style={{ color: "var(--text-primary)" }}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 flex items-center gap-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-white/20 text-white shadow-md"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon size={16} /> {category.label}
              </button>
            );
          })}
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center md:text-left">
          Sarthifx Blog
        </h1>

        {/* Featured Content Layout */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {/* Hero Image */}
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-2xl overflow-hidden relative shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop"
                alt="Stacked shipping boxes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-8">
            {featuredArticles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <time
                      className="text-xs mb-1 block"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {article.date}
                    </time>
                    <h3 className="text-base md:text-lg font-semibold leading-snug group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section
        className="py-20 px-6 md:px-12"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-14">Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
            {articles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <time
                  className="text-sm mb-2 block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {article.date}
                </time>
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p
                  style={{ color: "var(--text-secondary)" }}
                  className="leading-relaxed text-sm"
                >
                  {article.description}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center">
            <button className="px-8 py-3 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-all">
              See all articles
            </button>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-14">Videos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
            {videos.map((video) => (
              <article key={video.id} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play size={28} className="text-white ml-1" />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  {/* Logo */}
                  <div className="absolute top-4 left-4 text-white font-bold text-sm uppercase tracking-wide">
                    sarthifx
                  </div>
                </div>
                <time
                  className="text-sm mb-2 block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {video.date}
                </time>
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
                <p
                  style={{ color: "var(--text-secondary)" }}
                  className="leading-relaxed text-sm"
                >
                  {video.description}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center">
            <button className="px-8 py-3 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-all">
              See all videos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
