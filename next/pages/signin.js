import Head from "next/head";

export default function signin() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>MovieInfo | Sign in</title>
      </Head>
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
    </>
  );
}
