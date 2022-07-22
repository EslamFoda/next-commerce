import { createContext, useContext, useReducer } from "react";
export const AppContext = createContext();
// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];
export const seenProductsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEEN":
      return {
        seenProducts: [... new Set([action.payload, ...state.seenProducts])],
      };
      case "REMOVE_DUBLICATES":
        return {
          seenProducts : [... new Set(action.payload)]
        }
    default:
      return state;
  }
};

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(seenProductsReducer, {
    seenProducts: [],
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
