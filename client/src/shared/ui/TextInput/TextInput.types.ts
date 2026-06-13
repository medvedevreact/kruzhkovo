import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type SharedTextInputProps = {
  label?: string;
  error?: string;
  /** className на враппере */
  className?: string;
  /** className непосредственно на input/textarea */
  fieldClassName?: string;
};

export type TextInputAsInputProps = SharedTextInputProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
    as?: "input";
  };

export type TextInputAsTextareaProps = SharedTextInputProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> & {
    as: "textarea";
  };

export type TextInputProps = TextInputAsInputProps | TextInputAsTextareaProps;
