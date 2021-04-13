import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Login() {
  const [registrationFormStatus, setRegistrationFormStatus] = useState(false);
  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0
  })
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500
  })

  const loginBtnProps = useSpring({borderBottom: registrationFormStatus ? 'solid 0px transparent' : 'solid 2px #1059FF'})
  const registerBtnProps = useSpring({borderBottom: registrationFormStatus ? 'solid 2px #1059FF' : 'solid 0px transparent'})

  function registerClicked() {
    setRegistrationFormStatus(true);
  }

  function loginClicked() {
    setRegistrationFormStatus(false);
  }

  return (
    <div className="login">
      <div className="login-register-wrapper">
        <div className="nav-buttons">
          <animated.button onClick={loginClicked} id="loginBtn" style={loginBtnProps}>
            Login
          </animated.button>
          <animated.button onClick={registerClicked} id="registerBtn" style={registerBtnProps}>
            Register
          </animated.button>
        </div>
        <div className="form-group">
          <animated.form action="" id="loginform" style={loginProps}>
            <LoginForm />
          </animated.form>
          <animated.form action="" id="registerform" style={registerProps}>
            <RegisterForm />
          </animated.form>
        </div>
        <animated.div className="forgot-panel" style={loginProps}>
          <a href="#">Forgot your password?</a>
        </animated.div>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username">Username</label>
      <input type="text" id="username" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" />
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" />
      <label for="email">E-Mail</label>
      <input type="email" id="email" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <label for="confirmpassword">Confirm Password</label>
      <input type="password" id="confirmpassword" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

export default Login;
