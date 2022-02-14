import React from "react";
import { Icon } from "@iconify/react";

const EmptyState = ({texto}) => {
  return (
    <div className="flex flex-col items-center m-auto w-4/5 pb-4">
      <div className="mt-8 text-slate-800 text-center w-max">{texto}</div>
      <Icon icon="ic:twotone-catching-pokemon" className="mt-4 text-9xl text-slate-300"/>
    </div>
  );
};

export default EmptyState;
