import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import setAuthedUser from "../actions/authedUser";

const Login = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState("");

  const { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(userId));
    //navigate("/");
    navigate(from.pathname, { replace: true });
  };

  const { users } = props;

  return (
    <div className="login-container">
      <div className="center">
        <h1>Employee Polls</h1>
        <img src="/login_image.png" alt="Login" />
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <select value={userId} onChange={(e) => setUserId(e.target.value)}>
            <option value="" disabled>
              Select User
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button className="btn" type="submit" disabled={userId === ""}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps)(Login);
