import React from "react";
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="fixed flex items-center justify-center top-1/2 -left-32 rotate-90 w-72 h-8 bg-slate-300 text-slate-600 tracking-wider rounded-t-lg">
      <p>Martha L. Domínguez</p>
      <p className="mx-2">|</p>
      <a
        target="_blank"
        rel="noreferrer"
        className="link"
        href="https://www.linkedin.com/in/martha-liliana-dom%C3%ADnguez-09b722136"
      >
        <Icon className="text-xl hover:text-slate-800" icon="akar-icons:linkedin-box-fill" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="link"
        href="https://github.com/marthadominguez"
      >
        <Icon className="ml-2 text-xl hover:text-slate-800" icon="akar-icons:github-fill" />
      </a>
    </footer>
  );
};

export default Footer;
