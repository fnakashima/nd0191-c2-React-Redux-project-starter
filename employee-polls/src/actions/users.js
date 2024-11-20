import { getUsers } from "../utils/api";
export const RECEIVE_USERS = "RECEIVE_USERS";

export default function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function refreshUsers() {
  return (dispatch) => {
    return getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}
