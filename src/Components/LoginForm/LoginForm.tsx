import globalStyle from "../../Style/GlobalStyle.module.css";
import HeaderText from "../HeaderText/HeaderText";

const LoginForm = () => {
  const { Container } = globalStyle;
  return (
    <div className={Container}>
      <HeaderText />
    </div>
  );
};

export default LoginForm;
