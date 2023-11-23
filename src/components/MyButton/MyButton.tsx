import React, { FC } from "react"
import "./index.css"

interface MyButtonProps {
  color?: string
  background?: string
  big?: boolean
  children?: React.ReactNode
}

export const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`btn ${props.big ? "big" : null}`}
      style={{
        color: props.color ?? "black",
        background: props.background ?? "transparent",
      }}
    >
      {children}
    </button>
  )
}