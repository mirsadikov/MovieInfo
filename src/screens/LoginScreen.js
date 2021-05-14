import React, { useEffect } from "react";

const LoginScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="signin">
      <div className="container">
        <h1>Sign in</h1>
        <form onSubmit={submitHandler}>
          <label>
            <p>Email</p>
            <input
              type="email"
              name="userLogin"
              placeholder="example@mail.com"
              id="userLogin"
            />
          </label>

          <label>
            <p>Password</p>
            <input
              type="password"
              name="userPassword"
              placeholder="At least 8 characters"
              id="userPassword"
            />
          </label>
          <button type="submit" id="submit" className="signinBtn">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginScreen;
