import * as React from "react";
import { SVGProps } from "react";
const BlurFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={313}
    height={262}
    viewBox="0 0 313 262"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_28_3728)">
      <rect
        width={360}
        height={162}
        transform="translate(-23.33 100)"
        fill="#FFFAFF"
        fillOpacity={0.12}
      />
    </g>
    <defs>
      <filter
        id="filter0_f_28_3728"
        x={-123.33}
        y={0}
        width={560}
        height={362}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={0}
          result="effect1_foregroundBlur_28_3728"
        />
      </filter>
    </defs>
  </svg>
);
export default BlurFrame;
