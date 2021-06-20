import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_EDIT_PRODUCT,
  EDIT_PRODUCT,
} from "../types";
import history from "../../utils/createHistory";
import { setSuccessAlert } from "./alert";

export const addProduct = (details) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT, payload: details });
  dispatch(setSuccessAlert(`Product Created Successfully`));
  history.push("/");
  return true;
};

export const editAProduct = (details) => (dispatch) => {
  dispatch({ type: EDIT_PRODUCT, payload: details });
  dispatch(setSuccessAlert(`Product Edit Successfully`));
  dispatch(addEditProduct());
  history.push("/");
  return true;
};

export const deleteProduct = (id) => (dispatch) => {
  console.log(id);
  dispatch({ type: REMOVE_PRODUCT, payload: id });
  dispatch(setSuccessAlert(`Product Removed Successfully`));
  return true;
};
export const addEditProduct =
  (details = null) =>
  (dispatch) => {
    dispatch({ type: ADD_EDIT_PRODUCT, payload: details });
    if (details) history.push("/product");
    return true;
  };
