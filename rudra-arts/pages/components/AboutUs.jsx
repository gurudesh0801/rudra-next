"use client";

import { motion } from "framer-motion";

const aboutData = [
  {
    title: "Legacy of Shivaji Maharaj",
    description:
      "Our creations draw inspiration from the valor and wisdom of Chhatrapati Shivaji Maharaj, preserving his legacy through exquisite craftsmanship.",
    borderColor: "border-amber-600",
    bgColor: "bg-amber-50",
    textColor: "text-amber-900",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="currentColor"
          d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,5A2,2 0 0,0 15,7A2,2 0 0,0 17,9A2,2 0 0,0 19,7A2,2 0 0,0 17,5M7,15A2,2 0 0,0 5,17A2,2 0 0,0 7,19A2,2 0 0,0 9,17A2,2 0 0,0 7,15M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z"
        />
      </svg>
    ),
  },
  {
    title: "Art with Purpose",
    description:
      "Each artifact tells a story—be it a badge, sword, or statue—crafted with devotion to India's rich heritage and cultural roots.",
    borderColor: "border-emerald-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-900",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="currentColor"
          d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7L16,11.2V18H14V14H10V18H8V11.2L12,7.7Z"
        />
      </svg>
    ),
  },
  {
    title: "Traditional Techniques",
    description:
      "We use age-old methods blended with modern design to ensure every piece remains timeless, authentic, and inspiring.",
    borderColor: "border-rose-600",
    bgColor: "bg-rose-50",
    textColor: "text-rose-900",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="currentColor"
          d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5M7.5,10.5A1.5,1.5 0 0,1 9,12A1.5,1.5 0 0,1 7.5,13.5A1.5,1.5 0 0,1 6,12A1.5,1.5 0 0,1 7.5,10.5M16.5,10.5A1.5,1.5 0 0,1 18,12A1.5,1.5 0 0,1 16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Preserving Culture",
    description:
      "Rudra Arts isn't just about art—it's a movement to revive, honor, and share our glorious history with generations to come.",
    borderColor: "border-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-900",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="currentColor"
          d="M12,3L2,12H5V20H19V12H22L12,3M12,8A1,1 0 0,1 13,9A1,1 0 0,1 12,10A1,1 0 0,1 11,9A1,1 0 0,1 12,8M7,14A1,1 0 0,1 8,15A1,1 0 0,1 7,16A1,1 0 0,1 6,15A1,1 0 0,1 7,14M17,14A1,1 0 0,1 18,15A1,1 0 0,1 17,16A1,1 0 0,1 16,15A1,1 0 0,1 17,14Z"
        />
      </svg>
    ),
  },
];

export default function AboutUs() {
  return (
    <div
      className="relative w-full py-20 px-6 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/images/about-bg.jpg')`,
      }}
    >
      {/* Decorative historical elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 opacity-20">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="text-amber-400"
          >
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            className="text-amber-400"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold font-tangerine mb-6 text-amber-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Rudra Arts
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-lg text-amber-100 mb-4">
            Journey into the soul of India's glorious past.
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-xl text-white font-medium">
            At Rudra Arts, we celebrate history through handcrafted masterpieces
            inspired by Maratha pride.
          </p>
        </motion.div>

        {/* Enhanced Zig-Zag Cards with historical elements */}
        <div className="flex flex-col gap-16 relative">
          {/* Decorative connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-amber-400 bg-opacity-30 -translate-x-1/2"></div>

          {aboutData.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* SVG decoration */}
              <div
                className={`hidden md:flex absolute top-0 ${
                  idx % 2 === 0
                    ? "right-0 translate-x-1/2"
                    : "left-0 -translate-x-1/2"
                } items-center justify-center w-16 h-16 rounded-full ${
                  item.bgColor
                } border-4 ${item.borderColor} z-20`}
              >
                {item.svg}
              </div>

              <motion.div
                className={`relative ${item.bgColor} ${
                  item.textColor
                } rounded-lg shadow-xl px-8 py-6 w-full md:w-1/2
                  ${idx % 2 === 0 ? "md:pr-16" : "md:pl-16"}
                  ${idx % 2 === 0 ? "border-r-4" : "border-l-4"} ${
                  item.borderColor
                }
                `}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Decorative corner elements */}
                <div
                  className={`absolute top-0 ${
                    idx % 2 === 0 ? "left-0" : "right-0"
                  } w-8 h-8 border-t-4 ${item.borderColor} ${
                    idx % 2 === 0 ? "border-l-4" : "border-r-4"
                  } rounded-tl-lg`}
                ></div>
                <div
                  className={`absolute bottom-0 ${
                    idx % 2 === 0 ? "right-0" : "left-0"
                  } w-8 h-8 border-b-4 ${item.borderColor} ${
                    idx % 2 === 0 ? "border-r-4" : "border-l-4"
                  } rounded-br-lg`}
                ></div>

                <h3 className="text-2xl font-bold mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
