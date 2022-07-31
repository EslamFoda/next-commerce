import { createContext, useContext, useReducer } from "react";
export const AppContext = createContext();
// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];
export const seenProductsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEEN":
      return {
        seenProducts: [...state.seenProducts, action.payload],
      };
    // case "REMOVE_DUBLICATES":
    //   return {
    //     seenProducts : action.payload
    //   }
    case "ADD_TO_CART":
      return {
        cart: [action.payload,...state.cart],
      };
    case "REMOVE_CART_ITEM":
      return {
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(seenProductsReducer, {
    seenProducts: [],
    cart: [],
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
