import React, { FC } from "react"
import "./index.css"

interface MyInputProps {
  padding?: string
  placeholder?: string
}

export const MyInput: FC<MyInputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="my-input"
      type="text"
      placeholder={props.placeholder ?? "Default placeholder"}
      style={{
        padding: props.padding ?? "4px 12px",
      }}
    />
  )
}