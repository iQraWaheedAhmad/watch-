'use client'
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle login functionality
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-white">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200 bg-gray-800 text-gray-100"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200 bg-gray-800 text-gray-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.875 9.429a3.001 3.001 0 00-4.254-4.254 4.992 4.992 0 014.254 4.254zm-3.797 5.188a3 3 0 01-4.254-4.254 5 5 0 004.254 4.254z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a8 8 0 11-.001 16.001A8 8 0 0110 2zM5.705 6.715a1 1 0 011.418 0l2.12 2.121 2.122-2.12a1 1 0 111.417 1.418l-2.121 2.122 2.12 2.122a1 1 0 01-1.417 1.418l-2.122-2.121-2.122 2.121a1 1 0 11-1.418-1.418l2.121-2.122-2.12-2.12a1 1 0 010-1.418z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Link href={'payment_route'}
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
            >
              Login
            </Link>
          </div>
        </form>

        {/* Don't have an account Link */}
        <div className="text-sm text-center mt-4">
          <p>
            Don't have an account?{" "}
            <Link href="/registrationfom" className="text-indigo-600 hover:text-indigo-700 transition duration-200">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
