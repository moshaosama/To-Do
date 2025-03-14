import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../Pages";
import { Button, Spinner } from "..";

const HeaderText = lazy(() => import("../HeaderText/HeaderText"));
const BoxInput = lazy(() => import("../BoxInput/BoxInput"));

const LoginForm = () => {
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
          <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
            <span
              className="text-success"
              style={{ fontWeight: "bold", cursor: "pointer" }}
            >
              Sign Up
            </span>
          </Link>
        </p>
        <Button Title="Sign in" />
      </div>
    </div>
  );
};

export default LoginForm;
