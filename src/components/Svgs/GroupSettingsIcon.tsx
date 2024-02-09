import colors from "tailwindcss/colors";

export default function GroupSettingsIcon({
  color = colors.rose[100],
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width="90"
      height="77"
      viewBox="0 0 90 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M45.082 19.6625H86.1639"
        stroke={color}
        strokeWidth="6.16228"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 19.6625H12.2164"
        stroke={color}
        strokeWidth="6.16228"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M77.9475 56.6361H86.1639"
        stroke={color}
        strokeWidth="6.16228"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 56.6361H45.0818"
        stroke={color}
        strokeWidth="6.16228"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.6493 36.0952C37.7247 36.0952 45.082 28.7378 45.082 19.6625C45.082 10.5869 37.7247 3.22974 28.6493 3.22974C19.5737 3.22974 12.2166 10.5869 12.2166 19.6625C12.2166 28.7378 19.5737 36.0952 28.6493 36.0952Z"
        stroke={color}
        strokeWidth="6.16228"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M61.5148 73.0688C70.5902 73.0688 77.9475 65.7115 77.9475 56.6361C77.9475 47.5607 70.5902 40.2034 61.5148 40.2034C52.4394 40.2034 45.082 47.5607 45.082 56.6361C45.082 65.7115 52.4394 73.0688 61.5148 73.0688Z"
        stroke={color}
        strokeWidth="6.16228"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
