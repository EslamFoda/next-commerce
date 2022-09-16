import { createContext, useContext, useReducer } from "react";
export const AppContext = createContext();

export const seenProductsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case "REMOVE_WISHLIST_ITEM":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "increment":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity++ };
          } else {
            return item;
          }
        }),
      };
    case "decrement":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload && item.quantity >= 1) {
            return { ...item, quantity: item.quantity-- };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(seenProductsReducer, {
    seenProducts: [],
    cart: [],
    wishlist: [],
  });

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
