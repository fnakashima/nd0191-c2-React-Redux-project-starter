import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import Nav from "./Nav";
import Login from "./Login";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  const { authedUser, dispatch } = props;
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            exact
            element={
              <PrivateRoute authedUser={authedUser}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <PrivateRoute authedUser={authedUser}>
                <Leaderboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/question/:id"
            element={
              <PrivateRoute authedUser={authedUser}>
                <Question />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute authedUser={authedUser}>
                <NewQuestion />
              </PrivateRoute>
            }
          />
          <Route
            path="/404"
            element={
              <PrivateRoute authedUser={authedUser}>
                <NotFound />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute authedUser={authedUser}>
                <NotFound />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
