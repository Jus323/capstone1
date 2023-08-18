import { createContext, useContext, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [users, setUsers] = useLocalStorage("users", []);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = useCallback(
    async (data) => {
      const userFound = users.find(
        (user) => user.email === data.email && user.password === data.password,
      );
      if (userFound) {
        setUser(userFound);
        navigate("/home");
        return true;
      } else {
        return false;
      }
    },
    [navigate, setUser, users],
  );

  // call this function to sign out logged in user
  const logout = useCallback(() => {
    setUser(null);
    navigate("/", { replace: true });
  }, [navigate, setUser]);

  // call this function to register a new user
  const addUser = useCallback(
    async (newUser) => {
      const exists = users.some((user) => user.nric === newUser.nric);
      if (!exists) {
        setUsers([...users, newUser]);
      }
      return !exists;
    },
    [users, setUsers],
  );

  // call this to reset a user's password
  const resetPassword = useCallback(
    async (data) => {
      const userFound = users.find((user) => user.email === data.email);
      if (userFound) {
        setUsers(
          users
            .filter((user) => user.id !== userFound.id)
            .concat([{ ...userFound, password: data.password }]),
        );
        navigate("/");
        return true;
      } else {
        return false;
      }
    },
    [navigate, setUsers, users],
  );

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      addUser,
      resetPassword,
    }),
    [user, login, logout, addUser, resetPassword],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
