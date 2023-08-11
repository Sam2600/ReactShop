import { createContext, useContext, useReducer } from "react";

// This is for context and fetch data
const setCartContext = createContext({
  initialState: [],
  dispatch: () => {},
});

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state.push({
        count: action.payload.count,
        added: action.payload.added,
        product: action.payload.product,
      });

      return state;

    case "REMOVE_FROM_CART":
      state = state.filter((s) => s.product.id !== action.payload);

      return state;

    // {type:"INCREMENT_COUNT", payload: 1, index: ini.product.id}
    case "DECREMENT_COUNT":

      return 
  }
};

const ContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <setCartContext.Provider value={{ data, initialState, dispatch }}>
      {children}
    </setCartContext.Provider>
  );
};

const ContextUse = () => {
  return useContext(setCartContext);
};

export default ContextProvider;

export { ContextUse };
