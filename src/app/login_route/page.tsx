'use client';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(""); // ✅ Success/Error message
  const [loading, setLoading] = useState(false); // ✅ Button loading state
  const router = useRouter(); // ✅ For navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // ✅ Check if API URL exists
      const apiUrl = process.env.NEXT_PUBLIC_LOGIN_API_URL;
      if (!apiUrl) {
        setMessage("Login Error.");
        setLoading(false);
        return;
      }

      // ✅ Send login request
      const response = await axios.post(apiUrl, formData);

      if (response.status === 200) {
        setMessage("Login successful! Redirecting...");

        // ✅ Store token securely
        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token);
        }

        // ✅ Redirect to payment page after success
        setTimeout(() => {
          router.push("/payment_route");
        }, 1500);
      } else {
        setMessage("Unexpected error. Please try again.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data?.message || "Invalid email or password.");
      } else {
        setMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
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
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              disabled={loading} // ✅ Disable input when loading
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
                className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-2 px-4 rounded-md transition duration-200 ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Display success or error message */}
        {message && <p className="text-center mt-4 text-sm text-white">{message}</p>}

        {/* Don't have an account Link */}
        <div className="text-sm text-center text-white mt-4">
          <p>
            Don't have an account?{" "}
            <Link
              href="/registrationform"
              className="text-indigo-600 hover:text-indigo-700 transition duration-200"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
