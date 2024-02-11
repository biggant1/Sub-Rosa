import { Inter } from "next/font/google";
import type { ChangeEventHandler, ReactNode } from "react";

const inter = Inter({ weight: "600", subsets: ["latin"] });
const lighterRed = "#9F1239";
const faintGray = "rgba(217, 203, 205, 0.67)";

export default function LabeledInput({
  label,
  name = "",
  defaultValue,
  disabled = false,
  multiline = false,
  className = "",
  onChange,
  additionalComponent,
}: {
  label: string;
  name?: string;
  defaultValue?: string;
  disabled?: boolean;
  multiline?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  additionalComponent?: ReactNode;
}) {
  return (
    <div className={`w-4/6 ${className}`}>
      <p
        className={`text-3xl ${inter.className}`}
        style={{ color: `${disabled ? "black" : lighterRed}` }}
      >
        {label}
      </p>
      <div className="flex gap-2 flex-shrink-0 min-w-full">
        {multiline ? (
          <TextArea
            disabled={disabled}
            name={name}
            defaultValue={defaultValue}
            onChange={onChange}
          ></TextArea>
        ) : (
          <Input
            disabled={disabled}
            name={name}
            defaultValue={defaultValue}
            onChange={onChange}
          ></Input>
        )}
        {additionalComponent}
      </div>
    </div>
  );
}

function Input({
  disabled,
  name,
  defaultValue,
  onChange,
}: {
  disabled: boolean;
  name: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      type="text"
      name={name}
      style={{
        outlineColor: `${disabled ? "black" : lighterRed}`,
        background: `${disabled ? faintGray : ""}`,
      }}
      disabled={disabled}
      defaultValue={defaultValue}
      {...{ onChange: onChange }}
      className="min-w-full h-12 bg-transparent outline-2 text-black outline rounded-sm mt-1 pl-2"
    />
  );
}

function TextArea({
  disabled,
  name,
  defaultValue,
  onChange,
}: {
  disabled: boolean;
  name: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <textarea
      style={{
        outlineColor: `${disabled ? "black" : lighterRed}`,
        background: `${disabled ? faintGray : ""}`,
      }}
      name={name}
      disabled={disabled}
      defaultValue={defaultValue}
      {...onChange}
      className="min-w-full h-64 bg-transparent outline-2 text-black outline rounded-sm mt-1 pl-2 pt-2"
    />
  );
}
