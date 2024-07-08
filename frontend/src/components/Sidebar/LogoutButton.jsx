import React from "react";
import useLogout from "../hooks/useLogout";
import { BiLogOut } from "react-icons/bi";

const LogOutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
          aria-label="Logout"
          role="button"
        />
      ) : (
        <span className="loading loading-spinner" aria-label="Logging out" role="status"></span>
      )}
    </div>
  );
};

export default LogOutButton;
