import { IconProps } from "@/app/lib/types";
import { ComponentPropsWithoutRef } from "react";
import colors from "tailwindcss/colors";

export default function SubmitInputIcon({
  color = colors.rose[900],
  ...rest
}: IconProps) {
  return (
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M20.0834 37.1667L44.0001 37.1667M44.0001 37.1667L33.7501 26.9167M44.0001 37.1667L33.7501 47.4167"
        stroke={color}
        strokeWidth="5.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.25 23.5L54.25 50.8334"
        stroke={color}
        strokeWidth="5.125"
        strokeLinecap="round"
      />
      <path
        d="M3 37.1667C3 21.0605 3 13.0071 8.00371 8.00372C13.0071 3.00001 21.0605 3.00001 37.1667 3.00001C53.273 3.00001 61.3262 3.00001 66.3298 8.00372C71.3334 13.0071 71.3334 21.0605 71.3334 37.1667C71.3334 53.273 71.3334 61.3262 66.3298 66.3298C61.3262 71.3334 53.273 71.3334 37.1667 71.3334C21.0605 71.3334 13.0071 71.3334 8.00372 66.3298C4.67657 63.0028 3.5617 58.3277 3.18826 50.8334"
        stroke={color}
        strokeWidth="5.125"
        strokeLinecap="round"
      />
    </svg>
  );
}
