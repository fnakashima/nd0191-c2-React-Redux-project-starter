import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import setAuthedUser from "../actions/authedUser";

const Nav = (props) => {
  const navigate = useNavigate();
  const { profile } = props;
  if (!profile) {
    return null;
  }

  const handleLogout = (e) => {
    props.dispatch(setAuthedUser(null));
    navigate("/login");
  };

  return (
    <div className="header-nav">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/add">New</Link>
          </li>
        </ul>
      </nav>
      <nav className="profile">
        <ul>
          <li>
            <div className="user-info">
              <img
                className="avatar"
                src={profile.avatarURL}
                alt={`Avatar of ${profile.name}`}
              />
              <span className="user-name">{profile.name}</span>
            </div>
          </li>
          <li>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    profile: authedUser ? users[authedUser] : null,
  };
};

export default connect(mapStateToProps)(Nav);
