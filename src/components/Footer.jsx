import React from "react";
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center m-auto w-64 h-6 bg-slate-300 text-slate-600 tracking-wider rounded-t-lg text-sm sm:w-72 sm:h-8 sm:-left-32 sm:fixed sm:rotate-90 sm:top-1/2">
      <p className="text-md">Martha L. Domínguez</p>
      <p className="mx-2">|</p>
      <a
        target="_blank"
        rel="noreferrer"
        className="link"
        href="https://www.linkedin.com/in/martha-liliana-dom%C3%ADnguez-09b722136"
      >
        <Icon className="text-md hover:text-slate-800 sm:text-lg" icon="akar-icons:linkedin-box-fill" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="link"
        href="https://github.com/marthadominguez"
      >
        <Icon className="ml-2 text-md hover:text-slate-800 sm:text-lg" icon="akar-icons:github-fill" />
      </a>
    </footer>
  );
};

export default Footer;
