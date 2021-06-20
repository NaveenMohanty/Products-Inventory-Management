import { SET_NEW_USER, SET_CURR_USER, REMOVE_CURR_USER } from "../types";
import history from "../../utils/createHistory";
// import { useSelector } from "react-redux";
import { store } from "../store";
import { setErrorAlert, setSuccessAlert } from "./alert";

export const signUp = (details) => (dispatch) => {
  const { user } = store.getState();

  if (user.userList.find((u) => u.email === details.email)) {
    dispatch(setErrorAlert(`Email ${details.email} already exist`));
    return false;
  } else {
    dispatch({ type: SET_NEW_USER, payload: details });
    dispatch(setSuccessAlert(`User Created Successfully`));
    history.push("/signin");
    return true;
  }
};

export const signIn = (details) => (dispatch) => {
  const { user } = store.getState();
  let currentUser = user.userList.find(
    (u) =>
      u.email === details.email &&
      u.name.toLowerCase() === details.name.toLowerCase()
  );
  if (!currentUser) {
    dispatch(setErrorAlert(`User Not Found`));
    return false;
  } else {
    dispatch({ type: SET_CURR_USER, payload: currentUser });
    dispatch(setSuccessAlert(`Sign In successfully`));
    history.push("/");
    return true;
  }
};

export const signOut = () => async (dispatch) => {
  dispatch({ type: REMOVE_CURR_USER, payload: {} });
  dispatch(setSuccessAlert(`Sign Out successfully`));
  history.push("/signin");
  return true;
};
