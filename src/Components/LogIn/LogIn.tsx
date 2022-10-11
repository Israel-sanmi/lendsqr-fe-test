import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import logo from "../../assets/lendLogo.png";
import loginImg from "../../assets/loginImage.svg";
import "./LogIn.scss";

const LogIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (data.email && data.password) {
      navigate("/dashboard");
    } else {
      navigate("/");
      
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
          />{" "}
          <br />
          {errors.email && (
            <span className="alert">This field is required</span>
          )}
          <br />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />{" "}
          <br />
          {errors.password && (
            <span className="alert">This field is required</span>
          )}
          <p>FORGOT PASSWORD?</p>
          <button type="submit" onClick={onSubmit}>
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
