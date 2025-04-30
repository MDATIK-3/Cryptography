import React from "react";

function ArrawPathEquation() {
  return (
    <div className="flex justify-center">
      <svg
        className="w-96 h-20"
        viewBox="0 0 400 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M 80,50 C 120,50 150,20 200,20 S 280,50 320,50"
          stroke="#06B6D4
"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
        <polygon
          points="315,50 305,45 305,55"
          fill="#06B6D4
"
        />
        <rect
          x="140"
          y="5"
          width="120"
          height="30"
          rx="15"
          fill="#EEF2FF"
          stroke="#C7D2FE"
        />
        <text
          x="200"
          y="25"
          textAnchor="middle"
          fill="#06B6D4
"
          fontFamily="sans-serif"
          fontSize="16"
        >
          C = P
          <tspan fontSize="12" dy="-5">
            {" "}
            e
          </tspan>{" "}
          <tspan fontSize="15" dy="5">
            {" "}
            mod n
          </tspan>
        </text>
      </svg>
    </div>
  );
}

export default ArrawPathEquation;
