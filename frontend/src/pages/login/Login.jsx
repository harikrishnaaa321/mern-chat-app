import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../components/hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login, error } = useLogin(); // Assuming useLogin hook provides error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto min-h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-6">
          Login <span className="text-blue-500">chatapp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-black text-white p-2 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              aria-label="Username"
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 bg-black text-white p-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-300"
          >
            {"Don't"} have an account?
          </Link>

          {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error message if login fails */}

          <div className="mt-4">
            <button
              className="btn btn-block btn-sm bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
              disabled={loading}
              aria-busy={loading}
              aria-label="Login"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
