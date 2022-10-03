import type { ButtonHTMLAttributes } from "react"

export enum Variants {
  default = "default",
  primary = "primary",
  secondary = "secondary",
}

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variants
}
