import React, { createContext, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export function Context({ children }) {
  const [orderlist, setOrderlist] = useState();
  const [list, setList] = useState([
    { name: "Taj Cinema", movie_name: "RAVAN", rating: "4/5", price: 150 },
    { name: "Raj Cinema", movie_name: "Raj", rating: "4.2/5", price: 140 },
    { name: "Hera", movie_name: "Ram", rating: "4.3/5", price: 155 },
  ]);


  const navigate = useNavigate();

  return (
    <AuthContext.Provider
      value={{
        orderlist,
        setOrderlist,
        list
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default useAuth;
