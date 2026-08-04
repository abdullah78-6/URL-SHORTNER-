import {FaLink,FaCopy,FaLock,FaBolt,FaQrcode,FaChartLine,} from "react-icons/fa";
import {motion} from "motion/react"
const tools = [
  {
    icon: <FaLink size={28} />,
    title: "URL Shortener",
    description:
      "Convert long URLs into short, clean, and shareable links within seconds.",
  },
  {
    icon: <FaCopy size={28} />,
    title: "One Click Copy",
    description:
      "Copy your shortened links instantly and share them anywhere with ease.",
  },
  {
    icon: <FaQrcode size={28} />,
    title: "QR Code Ready",
    description:
      "Generate QR codes for every shortened URL for quick mobile sharing.",
  },
  
];

const Tools = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 5, y: 0 }}
    transition={{ duration: 0.6, delay:  0.15 }}
    viewport={{ once: false }}
     className="py-20 bg-gradient-to-b from-white via-[#eef8ff] to-white" id="tools">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful{" "}
            <span className="text-[#314ce0]">Tools</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and share short links
            efficiently from one modern platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {tools.map((tool, index) => (
            <div
             key={index}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#314ce0]/10 text-[#314ce0] flex items-center justify-center">
                {tool.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {tool.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {tool.description}
              </p>

              <button className="mt-6 text-pink-500 font-semibold hover:text-[#314ce0] transition">
                Learn More →
              </button>
            </div>
          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Tools;