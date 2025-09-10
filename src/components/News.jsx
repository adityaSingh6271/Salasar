const News = () => {
  const newsItems = [
    {
      id: 1,
      image: "/left-Image1.png",
      date: "March 7, 2025",
      title: "Expanding Horizons with New Developments",
      side: "left",
    },
    {
      id: 2,
      image: "/Right-Image1.png",
      date: "February 28, 2025",
      title: "Setting New Goals, Welcoming Fresh Talent",
      side: "right",
    },
    {
      id: 3,
      image: "/left-Image2.png",
      date: "August 3, 2025",
      title: "Strategic Partnership for Stronger Growth",
      side: "left",
    },
    {
      id: 4,
      image: "/Right-Image2.png",
      date: "May 11, 2025",
      title: "Modern Interior Concepts for Smarter Living",
      side: "right",
    },
  ];

  return (
    <div className="mt-5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="lg:w-1/2">
            <h1
              className="text-5xl lg:text-6xl leading-tight text-gray-900 mb-4"
              style={{ fontFamily: "Gambetta" }}
            >
              Discover Our Recent News And Achievements
            </h1>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <p
              className="text-gray-600 text-lg leading-relaxed"
              style={{ fontFamily: "Instrument Sans, sans-serif" }}
            >
              Stay updated on milestones and activities. Recent events show our
              dedication to growth and creativity.
            </p>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="group flex gap-6">
              {/* Image */}
              <div className="flex-shrink-0 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ width: "201px", height: "300px" }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-4 flex-1">
                <p
                  className="text-sm text-[#000000] uppercase tracking-wide"
                  style={{ fontFamily: "Instrument Sans, sans-serif" }}
                >
                  {item.date}
                </p>

                <h3
                  className="text-2xl lg:text-3xl leading-tight text-gray-900"
                  style={{ fontFamily: "Instrument Sans, sans-serif" }}
                >
                  {item.title}
                </h3>

                <button
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#000000] rounded-full text-[#000000] hover:bg-gray-50 transition-colors duration-200 w-fit"
                  style={{ fontFamily: "Instrument Sans, sans-serif" }}
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
