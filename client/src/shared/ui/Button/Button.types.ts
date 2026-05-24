import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

type NextLink = typeof import("next/link").default;

/** Общая часть варианта `button` и `link`. */
export type SharedButtonProps = {
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export type ButtonAsLinkProps = SharedButtonProps &
  Omit<
    ComponentPropsWithoutRef<NextLink>,
    "children" | "className"
  > & {
    as: "link";
    href: string;
  };

export type ButtonAsButtonProps = SharedButtonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className"
  > & {
    as?: "button";
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;
