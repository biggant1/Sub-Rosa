import colors from "tailwindcss/colors";

export default function LogoutIcon({
  color = colors.rose[100],
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width="55"
      height="59"
      viewBox="0 0 54 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.1945 23.6851C24.1945 25.1661 25.3551 26.3668 26.7867 26.3668C28.2183 26.3668 29.379 25.1661 29.379 23.6851H24.1945ZM29.379 2.68173C29.379 1.20067 28.2183 0 26.7867 0C25.3551 0 24.1945 1.20067 24.1945 2.68173H29.379ZM17.4921 12.1985C18.7951 11.5848 19.3702 9.99447 18.7771 8.64655C18.1836 7.29864 16.6465 6.70355 15.3435 7.31735L17.4921 12.1985ZM2.59258 31.859L0 31.8451L0.000519151 31.8901L2.59258 31.859ZM26.7867 56.3164L26.8165 53.6347C26.7968 53.6347 26.7767 53.6347 26.757 53.6347L26.7867 56.3164ZM50.9809 31.859L53.5735 31.8901L53.5731 31.8451L50.9809 31.859ZM38.2299 7.31735C36.9269 6.70355 35.3898 7.29864 34.7964 8.64655C34.2033 9.99447 34.7784 11.5848 36.0815 12.1985L38.2299 7.31735ZM29.379 23.6851V2.68173H24.1945V23.6851H29.379ZM15.3435 7.31735C6.04346 11.6985 0.0535382 21.2733 0 31.8451L5.18478 31.873C5.22774 23.3932 10.0321 15.7128 17.4921 12.1985L15.3435 7.31735ZM0.000519151 31.8901C0.170915 47.0362 12.1762 59.1719 26.8165 58.9982L26.757 53.6347C14.9794 53.7749 5.32171 44.0119 5.18464 31.8279L0.000519151 31.8901ZM26.757 58.9982C41.3973 59.1719 53.4034 47.0362 53.5735 31.8901L48.389 31.8279C48.2518 44.0119 38.5942 53.7749 26.8165 53.6347L26.757 58.9982ZM53.5731 31.8451C53.5196 21.2733 47.5301 11.6985 38.2299 7.31735L36.0815 12.1985C43.5412 15.7128 48.3458 23.3932 48.3887 31.873L53.5731 31.8451Z"
        fill={color}
      />
    </svg>
  );
}