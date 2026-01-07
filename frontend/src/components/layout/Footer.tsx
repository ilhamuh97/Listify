import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-4">
      <a
        href="https://github.com/ilhamuh97"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:underline"
      >
        <FaGithub size={20} />
        <span>ilhamuh97</span>
      </a>
    </footer>
  );
};

export default Footer;
