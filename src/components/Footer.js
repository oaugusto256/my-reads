import React from "react";
import { FaHeart, FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="row footer">
      <span>
        Developed by{" "}
        <a
          target="_blank"
          href="https://github.com/tavioalves"
          rel="noopener noreferrer"
        >
          OA
        </a>{" "}
        with <FaHeart color={"#ff283e"} /> and <FaReact color={'#33E0FF'} />
      </span>
    </footer>
  );
};

export default Footer;
