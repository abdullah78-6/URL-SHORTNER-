import React from "react";
import {FaQuestionCircle,FaLink,FaCopy,FaShieldAlt,FaBolt,} from "react-icons/fa";
const Help = () => {
  const helpItems = [
    {
      icon: <FaLink />,
      title: "How do I shorten a URL?",
      description:
        "Paste your long URL into the input field and click the 'Shorten URL' button. Your shortened link will be generated instantly.",
    },
    {
      icon: <FaCopy />,
      title: "How do I copy my shortened URL?",
      description:
        "After your short URL is created, simply use the Copy button to copy it to your clipboard and share it anywhere.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Are my links secure?",
      description:
        "Yes. All generated links are served securely, helping provide a safe and reliable experience.",
    },
    {
      icon: <FaBolt />,
      title: "Why use LinkShort?",
      description:
        "LinkShort creates clean, shareable links quickly while providing a simple, fast, and responsive experience.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8fcff] to-[#eef8ff]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#314ce0]/10 flex items-center justify-center text-[#314ce0] text-3xl">
            <FaQuestionCircle />
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Help <span className="text-pink-500">&</span>{" "}
            <span className="text-[#314ce0]">Support</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
            Find answers to the most common questions about using LinkShort.
            Everything you need to shorten, manage, and share your links.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-blue-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#314ce0]/10 text-[#314ce0] flex items-center justify-center text-xl">
                {item.icon}
              </div>

              <h2 className="mt-5 text-xl font-semibold text-gray-900">
                {item.title}
              </h2>

              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-blue-100 rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Still Need Help?
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-7">
            If you have any questions, suggestions, or encounter any issues
            while using LinkShort, feel free to reach out through the contact
            section. We're always happy to help.
          </p>

          <div className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#314ce0] text-white font-semibold">
            support@linkshort.com
          </div>
        </div>

      </div>
    </section>
  );
};

export default Help;