import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-blue-100 bg-gradient-to-r from-[#b0b8e6]  bg-gray-200 ">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center text-center">

          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-[#314ce0]">Link</span>
              <span className="text-pink-500">Short</span>
            </h1>

            <p className="mt-3 text-sm text-gray-900 leading-6 max-w-xs">
              Create short, clean and secure URLs in seconds.
              Share links effortlessly with a fast and reliable
              URL shortening platform.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-base font-semibold text-gray-900">
              Features
            </h2>

            <ul className="mt-3 space-y-2 text-sm text-gray-900">
              <li className="hover:text-[#314ce0] transition-colors cursor-pointer">
                URL Shortening
              </li>

              <li className="hover:text-[#314ce0] transition-colors cursor-pointer">
                Instant Copy
              </li>

              <li className="hover:text-[#314ce0] transition-colors cursor-pointer">
                Secure Links
              </li>

              <li className="hover:text-[#314ce0] transition-colors cursor-pointer">
                Responsive Design
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-base font-semibold text-gray-900">
              Contact
            </h2>

            <p className="mt-3 text-sm text-gray-900">
              Have questions or feedback?
            </p>

            <p className="mt-1 text-sm font-medium text-[#314ce0]">
              support@linkshort.com
            </p>
          </div>

        </div>

        <div className="mt-8 pt-5 border-t border-gray-200 flex flex-col items-center justify-center gap-3 text-center">

          <p className="text-xs md:text-sm text-gray-900">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#314ce0]">
              Link
            </span>
            <span className="font-semibold text-pink-500">
              Short
            </span>
            . All rights reserved.
          </p>

          <div className="flex justify-center items-center gap-5 text-xs md:text-sm text-gray-900">
            <p className="cursor-pointer hover:text-[#314ce0] transition">
              Privacy
            </p>

            <p className="cursor-pointer hover:text-[#314ce0] transition">
              Terms
            </p>

            <p className="cursor-pointer hover:text-[#314ce0] transition">
              Support
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;