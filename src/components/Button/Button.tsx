import React from "react";
import "./Button.scss";

interface ButtonType {
  title: string;
}
export const Button = ({ title }: ButtonType) => {
  return <button className="button">{title}</button>;
};
