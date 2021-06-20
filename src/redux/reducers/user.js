import { SET_NEW_USER, SET_CURR_USER, REMOVE_CURR_USER } from "../types";
import { v4 as uuid } from "uuid";

const initialState = {
  userList: [
    { id: "456wshgjhnuyjsy", name: "Test Name", email: "user@test.com" },
  ],
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NEW_USER:
      return {
        ...state,
        userList: [...state.userList, { id: uuid(), ...payload }],
      };
    case SET_CURR_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case REMOVE_CURR_USER:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
