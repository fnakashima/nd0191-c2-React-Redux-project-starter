import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ authedUser, loading, children }) => {
  //console.log("[PrivateRoute] authedUser", authedUser);
  const location = useLocation();
  //console.log("[PrivateRoute] location", location);
  if (loading) {
    return null;
  }

  return authedUser ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    loading:
      authedUser === null &&
      Object.keys(users).length === 0 &&
      Object.keys(questions).length === 0,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
