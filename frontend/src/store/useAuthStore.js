import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";


// set is a setter function
export const useAuthStore = create((set) => ({
  authUser: null, // we dont know user is authenticated or not

  isSigningUp: false, // user is not signing up
  isLoggingIn: false, // user is not logging in
  isUpdatingProfile: false, // user is not updating profile

  isCheckingAuth: true, // we are checking if user is authenticated or not

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("User signed up successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("User logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
}));
