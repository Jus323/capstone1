import { createContext, useCallback, useContext, useMemo } from "react";
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
      const exists = users.some(
        (user) => user.nric === newUser.nric || user.email === newUser.email,
      );
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
            .filter((user) => user.email !== userFound.email)
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

  //use this to edit profile
  const editProfile = useCallback(
    async (data) => {
      const loggedInUser = users.find((user1) => user1.email === user.email);

      if (loggedInUser) {
        setUsers(
          users
            .filter((user) => user.email !== loggedInUser.email)
            .concat([
              {
                ...loggedInUser,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                contactNumber: data.contactNumber,
                dateOfBirth: data.dateOfBirth,
              },
            ]),
        );
        setUser({
          ...user,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          contactNumber: data.contactNumber,
          dateOfBirth: data.dateOfBirth,
        });
        navigate("/");
        return true;
      } else {
        return false;
      }
    },
    [navigate, setUser, setUsers, user, users],
  );

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      addUser,
      resetPassword,
      editProfile,
    }),
    [user, login, logout, addUser, resetPassword, editProfile],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
