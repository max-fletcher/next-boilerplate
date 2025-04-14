import { ReactNode } from "react"

export type TButtonProps = {
  classes?: string
  Icon?: ReactNode | null,
  text?: string,
  disabled?: boolean,
  rest?: any;
}

export type TIconTypes = {
  classes?: string,
  width?: number,
  height?: number,
  isActive?: boolean,
}