import { memo } from "react";
import style from "./Button.module.css";

type ButtonProps = { Title: string };

const Button = memo(({ Title }: ButtonProps) => {
  return <button className={style.Button}>{Title}</button>;
});

export default Button;
