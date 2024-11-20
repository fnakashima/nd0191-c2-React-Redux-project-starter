import { connect } from "react-redux";

const Leaderboard = (props) => {
  console.log(`Leaderboard props: ${props}`);
  if (props.userList.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th className="left">User</th>
              <th className="right">Answered</th>
              <th className="right">Created</th>
            </tr>
          </thead>
          <tbody>
            {props.userList.map((user) => (
              <tr key={user.id}>
                <td className="left">
                  <div className="user-info">
                    <img
                      className="avatar"
                      src={user.avatarURL}
                      alt={`Avatar of ${user.name}`}
                    />
                    <div>
                      <div className="user-name">{user.name}</div>
                      <div className="user-id">{user.id}</div>
                    </div>
                  </div>
                </td>
                <td className="right">{user.answered}</td>
                <td className="right">{user.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    userList:
      users === null
        ? []
        : Object.values(users)
            .map((user) => {
              const answered = Object.keys(user.answers).length;
              const created = user.questions.length;
              return {
                ...user,
                answered,
                created,
              };
            })
            .sort((a, b) => b.answered + b.created - (a.answered + a.created)),
  };
};

export default connect(mapStateToProps)(Leaderboard);
