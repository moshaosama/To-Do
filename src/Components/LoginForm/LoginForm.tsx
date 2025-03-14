import { lazy, Suspense } from "react";
import globalStyle from "../../Style/GlobalStyle.module.css";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";

const HeaderText = lazy(() => import("../HeaderText/HeaderText"));
const BoxInput = lazy(() => import("../BoxInput/BoxInput"));

const LoginForm = () => {
  const { Container } = globalStyle;
  return (
    <div className={Container}>
      <Suspense fallback={<Spinner />}>
        <HeaderText />
      </Suspense>
      <div className="border p-3 my-5 px-5 rounded">
        <h3 style={{ fontWeight: "bold" }}>Login</h3>
        <p>Enter your email below to login to your account.</p>

        <form action="">
          <Suspense fallback={<Spinner />}>
            <BoxInput Label="Email" Type="text" placeHolder="m@example.com" />
            <BoxInput
              Label="Password"
              Type="password"
              placeHolder="Your Password..."
            />
          </Suspense>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <span className="text-success" style={{ fontWeight: "bold" }}>
            Sign Up
          </span>
        </p>
        <Button Title="Sign in" />
      </div>
    </div>
  );
};

export default LoginForm;
