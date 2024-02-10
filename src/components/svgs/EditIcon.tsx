import type { AriaRole } from "react";
import colors from "tailwindcss/colors";

/**  this is clearly not an edit icon and is clearly the create a report icon */
export default function EditIcon({
  color = colors.rose[100],
  role = "",
  tabIndex,
  className = "",
}: {
  color?: string;
  role?: AriaRole;
  tabIndex?: number;
  className?: string;
}) {
  return (
    <svg
      width="55"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={role}
      tabIndex={tabIndex}
    >
      <path
        d="M42.9168 11.5219L22.6707 31.768C20.6545 33.7841 14.6697 34.7179 13.3327 33.3809C11.9957 32.0438 12.9083 26.0591 14.9244 24.043L35.1919 3.77566C35.6917 3.23037 36.2967 2.79204 36.9707 2.48708C37.6445 2.18211 38.3733 2.01679 39.1129 2.00121C39.8523 1.98566 40.5874 2.12008 41.2736 2.39641C41.9597 2.67275 42.5828 3.08531 43.1051 3.60908C43.6273 4.13285 44.0382 4.757 44.3126 5.44389C44.587 6.13079 44.7197 6.86615 44.702 7.60564C44.6844 8.34514 44.517 9.07347 44.2103 9.74654C43.9035 10.4196 43.4635 11.0236 42.9168 11.5219Z"
        stroke={color}
        strokeWidth="2.58699"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.1002 6.42844H10.489C8.23754 6.42844 6.07848 7.32279 4.48648 8.91479C2.8945 10.5068 2 12.666 2 14.9174V36.1398C2 38.3913 2.8945 40.5504 4.48648 42.1423C6.07848 43.7344 8.23754 44.6287 10.489 44.6287H33.8336C38.5237 44.6287 40.2003 40.8087 40.2003 36.1398V25.5286"
        stroke={color}
        strokeWidth="2.58699"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
