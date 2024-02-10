import colors from "tailwindcss/colors";

export default function ViewReportsIcon({
  color = colors.rose[100],
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width="96"
      height="77"
      viewBox="0 0 96 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M48.019 72.8207C45.8735 72.7714 42.5759 70.5439 40.4296 70.5439H4.00024V3.75677H40.4296C42.7064 3.75677 45.7422 6.03361 48.2437 6.03361C50.2959 6.03361 53.3316 3.75677 55.6085 3.75677H92.0378V70.5439H55.6085C53.5593 70.5439 50.0682 72.8678 48.019 72.8207ZM48.019 72.8207V8.31044"
        stroke={color}
        strokeWidth="7.13824"
        strokeMiterlimit="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5261 15.988H37.5199M14.5261 27.3509H37.5199M14.5261 38.7138H37.5199M58.5183 15.988H81.5121M58.5183 27.3509H81.5121"
        stroke={color}
        strokeWidth="7.13818"
        strokeMiterlimit="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
