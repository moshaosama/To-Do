import { Suspense } from "react";
import { BoxInput, Button, HeaderText, Spinner } from "..";
import { Container } from "../../Pages";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className={Container}>
      <Suspense fallback={<Spinner />}>
        <HeaderText />
      </Suspense>
      <div className="border p-3 my-5 px-5 rounded">
        <h3 style={{ fontWeight: "bold" }}>SignUp</h3>
        <p>Enter your information to create an account.</p>

        <form action="">
          <Suspense fallback={<Spinner />}>
            <BoxInput Label="Email" Type="text" placeHolder="m@example.com" />
            <BoxInput
              Label="Password"
              Type="password"
              placeHolder="Your Password..."
            />
            <BoxInput
              Label="Confirm Password"
              Type="password"
              placeHolder="Your Confirm Password..."
            />
          </Suspense>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
            <span
              className="text-success"
              style={{ fontWeight: "bold", cursor: "pointer" }}
            >
              Sign In
            </span>
          </Link>
        </p>
        <Button Title="create an account" />
      </div>
    </div>
  );
};

export default SignupForm;
