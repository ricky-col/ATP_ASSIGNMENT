import { create } from "zustand";
import axios from "axios";

export const useAuth = create((set) => ({
  currentUser: null,
  loading: true,
  isAuthenticated: false,
  error: null,
  login: async (userCredWithRole) => {
    const { role, ...userCredObj } = userCredWithRole;
    try {
      set({ loading: true, error: null });
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/common-api/login`, userCredObj, { withCredentials: true });
      
      console.log("Login response data:", res.data);
      const user = res.data.user || res.data.payload;

      set({
        loading: false,
        isAuthenticated: true,
        currentUser: user,
      });
    } catch (err) {
      console.log("login error:", err);
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.reason || err.response?.data?.message || err.message || "Login failed",
      });
    }
  },
  logout: async () => {
    try {
      set({ loading: true, error: null });
      await axios.get(`${import.meta.env.VITE_API_URL}/common-api/logout`, { withCredentials: true });
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
      });
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.message || err.message || "Logout failed",
      });
    }
  },
  checkAuth: async () => {
     try {
          set({ loading: true });
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/common-api/check-auth`, { withCredentials: true });
          console.log("CheckAuth response data:", res.data);
          const user = res.data.payload || res.data.user;

          set({
               currentUser: user,
               isAuthenticated: true,
               loading: false,
          });
          } catch (err) {
               if (err.response?.status === 401) {
                    set({
                         currentUser: null,
                         isAuthenticated: false,
                         loading: false,
                    });
                    return;
               }
               console.error("Auth check failed:", err.response?.data?.message || err.message || "Auth check failed");
               set({ loading: false });
          }
     }
}));