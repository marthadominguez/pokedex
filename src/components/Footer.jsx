import React from "react";
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="fixed flex items-center justify-center text-sm top-1/2 -left-28 rotate-90 w-64 h-6 text-slate-400 tracking-wider rounded-t-lg sm:text-base sm:w-72 sm:h-8 sm:-left-32 sm:bg-slate-300 sm:text-slate-500">
      <p>Martha L. Domínguez</p>
      <p className="mx-2">|</p>
      <a
        target="_blank"
        rel="noreferrer"
        className="link"
        href="https://www.linkedin.com/in/martha-liliana-dom%C3%ADnguez-09b722136"
      >
        <Icon className="text-base hover:text-slate-800 sm:text-lg" icon="akar-icons:linkedin-box-fill" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="link"
        href="https://github.com/marthadominguez"
      >
        <Icon className="ml-2 text-base hover:text-slate-800 sm:text-lg" icon="akar-icons:github-fill" />
      </a>
    </footer>
  );
};

export default Footer;
