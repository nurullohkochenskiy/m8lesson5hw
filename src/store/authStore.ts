import create from "zustand";
const register = async (set, user) =>
  set((state) => ({
    ...state,
    loading: true,
  }));
try {
  const res = await fetch("https://app.olimjanov.uz/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: user.email,
      full_name: user.fullname,
      password: user.password,
      phone_number: user.number,
    },
  });
} catch (error) {}
const login = async (user) =>
  set((state) => {
    localStorage.setItem("user", JSON.stringify(user));
    return { authState: { ...state.authState, user } };
  });
const logout = async (user) =>
  set((state) => {
    localStorage.setItem("user", JSON.stringify(user));
    return { authState: { ...state.authState, user } };
  });
//! store
export const useAuthStore = create((set) => ({
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  login: (user) =>
    set((state) => {
      localStorage.setItem("user", JSON.stringify(user));
      return { authState: { ...state.authState, user } };
    }),

  logout: () =>
    set((state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("teachers");
      localStorage.removeItem("students");
      return { authState: { ...state.authState, user: null } };
    }),
}));

export default useAuthStore;
