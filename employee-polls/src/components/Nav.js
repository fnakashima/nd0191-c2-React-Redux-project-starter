import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { profile } = props;
  if (!profile) {
    return null;
  }

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
            <Link to="/new">New</Link>
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
            <Link to="/logout">Logout</Link>
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
