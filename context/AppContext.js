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
        cart: [action.payload, ...state.cart],
      };
    case "CLEAR_CART":
      return {
        cart: [],
      };
    case "REMOVE_CART_ITEM":
      return {
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "increment":
      return {
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            const totalPrice = item.price * item.quantity
            return { ...item, quantity: item.quantity++,totalPrice };
          } else {
            return item;
          }
        }),
      };
    case "decrement":
      return {
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id && item.quantity >= 1) {
            const totalPrice = item.price * item.quantity
            return { ...item, quantity: item.quantity--,totalPrice:totalPrice };
          } else {
            return item;
          }
        }),
      };
    // case "UPDATE_CART_ITEM":
    //   return {
    //     cart: state.cart.map((item) => {
    //       if (item.id === action.payload.id) {
    //         return { ...item, quantity: action.payload.quantity };
    //       } else {
    //         return item;
    //       }
    //     }),
    //   };
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
