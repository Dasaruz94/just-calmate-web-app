import React from "react";
import { motion } from "framer-motion";

const CircleProgress = ({ offset, icon }) => {
  const circumference = 2 * Math.PI * 45;
  const dashoffset = circumference - (offset / 100) * circumference;

  return (
    <div className="started__tasks__progress__circle">
    <svg height="100" width="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="#009c8c" />
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#f00"
        strokeWidth="8"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: dashoffset }}
        transform="rotate(-90) translate(-100)"
        transition={{ duration: .8 }}
        strokeLinecap="round"
      />
     {/*
          En version movil no se ocupara por lo pronto. En version escritorio quiero poner un Hover al icono que se haga
          pequeño y suba para que se pueda ver el porcentaje. 
     <text x="50%" y="55%" textAnchor="middle" fill="#000">
        {offset}%
      </text> */}
    </svg>

    <i className={icon + ' started__tasks__progress__circle-icon'}></i>
    </div>
  );
};

export default CircleProgress;