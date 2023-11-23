import React, { FC } from "react";
import "./index.css";
interface MyButtonProps {
    color?: string;
    background?: string;
    big?: boolean;
    children?: React.ReactNode;
}
export declare const MyButton: FC<MyButtonProps>;
export {};
