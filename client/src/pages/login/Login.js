import "./login.css";
import { useRef } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/auth/slice";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
function Login(props) {
  const email = useRef();
  const password = useRef();
  const jwt = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (jwt !== null) {
      history.push("/dashboard");
    }
  }, [jwt, history]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      signIn({ email: email.current.value, password: password.current.value })
    );
  };

  return (
    <div className="login">
      <h3 className="loginLogo">
        <FaSignInAlt /> Login
      </h3>
      <span className="loginDesc">Please Login to get Support</span>

      <form action="" className="loginBox" onSubmit={handleClick}>
        <div className="form-group">
          <input
            placeholder="Email"
            required
            type="email"
            className="loginInput"
            ref={email}
          />
        </div>

        <div className="form-group">
          <input
            placeholder="password"
            required
            minLength={6}
            className="loginInput"
            type="password"
            ref={password}
          />
        </div>
        {/* <a className="loginForget">Forgot Password?</a> */}
        <button className="loginButton">Submit</button>
      </form>
      <p className="loginForget">Forgot Password?</p>
    </div>
  );
}

export default withRouter(Login);
