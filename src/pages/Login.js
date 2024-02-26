import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../service/UserServices";
import { UserLoginContext } from "../context/UserLoginContext";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const navigate = useNavigate();

  const { user, login } = useContext(UserLoginContext);
  const handleLoginUser = async (e) => {
    setShowLoading(true);
    e.preventDefault();
    const res = await LoginUser(name, password.trim());

    if (res && res.token) {
      login(name, res.token);
      toast.success("Log in success");
      setShowLoading(false);
      navigate("/");
    } else {
      if (res && res.status === 401) {
        toast.error(res.data);
        setShowLoading(false);
      }
    }
  };
  return (
    <>
      <div className="login-container container col-12 col-md-6 col-lg-5">
        <h3>Log in</h3>
        <form className="form">
          <label className="label">User name(johnd)</label>
          <input
            value={name}
            type="text"
            placeholder="Tên người dùng"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="label">Password (m38rmF$)</label>
          <div className="position">
            <input
              value={password}
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="icon-input-pass"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <i className="fa-regular fa-eye-slash"></i>
              ) : (
                <i className="fa-regular fa-eye"></i>
              )}
            </span>
          </div>
          <button
            type="submit"
            className={name && password ? "btn-succ" : "btn-notallowed"}
            disabled={!name || !password ? true : false}
            onClick={(e) => handleLoginUser(e)}
          >
            {showLoading && <i className="fas fa-sync fa-spin"></i>}
            &nbsp; Đăng Nhập
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
