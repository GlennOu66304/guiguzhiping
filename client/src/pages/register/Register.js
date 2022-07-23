import React, { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
// import { register } from "../../redux/auth/slice";
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  // const dispatch = useDispatch();
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("password doesn't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("http://localhost:8800/api/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }

      // dispatch(
      //   register({
      //     username: username.current.value,
      //     email: email.current.value,
      //     password: password.current.value,
      //   })
      // );
    }
  };

  return (
    <div className="register">
{/* logo */}
      <h3 className="registerLogo">
        <FaUserAlt /> Register{" "}
      </h3>

      <span className="registerDesc">Please create an account</span>


      <form onSubmit={handleClick}>
        <div className="form-group">
          <input placeholder="Username" required ref={username} />
        </div>
        <div className="form-group">
          <input placeholder="Email" required type="email" ref={email} />
        </div>
        <div className="form-group">
          <input
            placeholder="Password"
            required
            type="password"
            minLength="6"
            ref={password}
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Password Again"
            required
            type="password"
            ref={passwordAgain}
          />
        </div>

        <button className="registerButton" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
