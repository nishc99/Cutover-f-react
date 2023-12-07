import { createContext, useReducer } from "react";

export const Context = createContext(null);

const setUserToLocalStorage = ({ payload }) => {
  
  localStorage.setItem("user", JSON.stringify(payload));

};

const getUserFromLocalStorage = () => {
 
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
};

const removeUserfromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};

const InitialState = {
  user: getUserFromLocalStorage(),
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      setUserToLocalStorage({ payload: action.payload });
      return { ...state, user: action.payload };
    }

    case "LOGOUT": {
      removeUserfromLocalStorage();
      return { ...state, user: null };
    }

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, InitialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};