import { FaYoutube, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white border-t py-4 flex flex-col items-center gap-3">
      
      {/* Social Links */}
      <div className="flex items-center gap-6 text-lg">
        
        <a
          href="https://x.com/whensachinexpln"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black transition transform hover:scale-110"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://www.youtube.com/@WhenSachinExplains"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-500 transition transform hover:scale-110"
        >
          <FaYoutube />
        </a>

        <a
          href="https://www.instagram.com/whensachinexplains/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition transform hover:scale-110"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/company/when-sachin-explains/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 transition transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500 text-center">
        © 2026 When Sachin Explains. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;