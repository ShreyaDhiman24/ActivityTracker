import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginRegister = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction("active");
  };

  const loginLink = () => {
    setAction("");
  };

  return (
    <div className={`wrapper ${action}`}>
      <div className="form-box login">
        <form action="">
          <img src="logoMain.png" width={150}/>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={registerLink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="">
        <img src="logoMain.png" width={130}/>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <MdEmail />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>

          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginRegister;
