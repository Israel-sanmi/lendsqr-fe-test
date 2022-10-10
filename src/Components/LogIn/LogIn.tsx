import logo from "../../assets/lendLogo.png";
import loginImg from "../../assets/loginImage.svg";
import "./LogIn.scss";

const LogIn = () => {
  return (
    <div className="Login">
      <div className="left-login-body">
        <div className="login-logo">
          <img src={logo} alt="" />
          <p>lendsqr</p>
        </div>
        <img src={loginImg} className="sideImg" alt="" />
      </div>
      <div className="right-login-body">
        <h1>Welcome!</h1>
        <p>Enter details to login</p>
        <form>
          <input type="text" name="email" placeholder="Email" /> <br />
          <input type="password" name="password" placeholder="Password" />
          <p>FORGOT PASSWORD?</p>
          <button>LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
