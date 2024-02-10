import colors from "tailwindcss/colors";

export default function LeaveGroupIcon({
  color = colors.rose[100],
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width="84"
      height="88"
      viewBox="0 0 84 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M29.4047 44.0476H78.2142"
        stroke={color}
        strokeWidth="9.7619"
        strokeLinecap="round"
      />
      <path
        d="M63.5714 24.5238L76.1926 37.145C80.0046 40.957 80.0046 47.1382 76.1926 50.9502L63.5714 63.5714"
        stroke={color}
        strokeWidth="9.7619"
        strokeLinecap="round"
      />
      <path
        d="M63.5714 5H14.7619C9.37055 5 5 9.37055 5 14.7619V73.3333C5 78.7248 9.37055 83.0952 14.7619 83.0952H63.5714"
        stroke={color}
        strokeWidth="9.7619"
        strokeLinecap="round"
      />
    </svg>
  );
}
