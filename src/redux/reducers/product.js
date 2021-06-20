import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_EDIT_PRODUCT,
  EDIT_PRODUCT,
} from "../types";
import { v4 as uuid } from "uuid";

const initialState = {
  products: [
    {
      id: "gvadhvasdsabg",
      name: "Toothpaste",
      description: "Paste for brushing teeth",
      price: 25,
      quantity: 100,
      imageUrl:
        "https://3.imimg.com/data3/LF/MH/MY-2529238/sensodyne-tooth-paste-250x250.jpg",
    },
    {
      id: "gvadhvasdscvabg",
      name: "Maggie",
      description: "Maggie in 2 min",
      price: 12,
      quantity: 200,
      imageUrl:
        "https://rukminim1.flixcart.com/image/416/416/ki3gknk0/noodle/z/l/u/840-maggie-masala-noodles-12-instant-noodles-nestle-original-imafxym3qfnvhksa.jpeg?q=70",
    },
  ],
  editProduct: null,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [{ id: uuid(), ...payload }, ...state.products],
      };

    case REMOVE_PRODUCT:
      let array = state.products.filter((p) => p.id !== payload);
      console.log(state);
      return {
        ...state,
        products: [...array],
      };

    case ADD_EDIT_PRODUCT:
      return {
        ...state,
        editProduct: payload,
      };

    case EDIT_PRODUCT:
      let arr = state.products;
      let idx = arr.findIndex((p) => p.id === payload.id);
      arr[idx] = payload;
      return {
        ...state,
        products: [...arr],
      };

    default:
      return state;
  }
};

export default productReducer;
