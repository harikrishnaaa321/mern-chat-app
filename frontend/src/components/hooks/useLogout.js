import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Adjust the path to your AuthContext

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthContext); // Assuming you have an AuthContext that provides setAuthUser

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      setAuthUser(null); // Update the authenticated user state
    } catch (error) {
      toast.error(error.message); // Log the error for debugging
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};

export default useLogout;
