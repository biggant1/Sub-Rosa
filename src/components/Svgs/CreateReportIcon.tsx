import colors from "tailwindcss/colors";

export default function CreateReportIcon({
  color = colors.rose[100],
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width="91"
      height="91"
      viewBox="0 0 91 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M81.1175 9.47754C79.2934 7.79981 76.8783 6.91415 74.4021 7.01488C71.9259 7.11561 69.5907 8.1945 67.9089 10.0148L37.1039 40.8199L31.8652 58.7298L49.7751 53.4911L80.5802 22.91C81.515 22.0742 82.2724 21.0591 82.8072 19.9249C83.3421 18.7907 83.6435 17.5605 83.6936 16.3076C83.7438 15.0546 83.5415 13.8043 83.099 12.631C82.6564 11.4577 81.9826 10.3853 81.1175 9.47754Z"
        fill={colors.rose[900]}
      />
      <path
        d="M81.1175 9.47754C79.2934 7.79981 76.8784 6.91415 74.4021 7.01488C71.9259 7.11561 69.5907 8.1945 67.9089 10.0148L37.1039 40.8199L31.8652 58.7298L49.7751 53.4911L80.5802 22.91C81.515 22.0742 82.2724 21.0591 82.8072 19.9249C83.3421 18.7907 83.6435 17.5605 83.6936 16.3076C83.7438 15.0546 83.5415 13.8043 83.099 12.631C82.6564 11.4577 81.9826 10.3853 81.1175 9.47754Z"
        stroke={color}
        strokeWidth="8.95496"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.2978 5H9.47797C8.29046 5 7.1516 5.47173 6.31191 6.31142C5.47222 7.15111 5.00049 8.28998 5.00049 9.47748V81.1171C5.00049 82.3046 5.47222 83.4435 6.31191 84.2832C7.1516 85.1229 8.29046 85.5946 9.47797 85.5946H81.1176C82.3051 85.5946 83.444 85.1229 84.2837 84.2832C85.1234 83.4435 85.5951 82.3046 85.5951 81.1171V45.2973"
        stroke={color}
        strokeWidth="8.95496"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}