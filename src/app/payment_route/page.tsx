"use client";
import React, { useState } from "react";
import axios from "axios";

const Payments = () => {
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_EASYPAISA_API_URL;
      if (!apiUrl) {
        setError("Payment API URL is missing.");
        setLoading(false);
        return;
      }

      const response = await axios.post(apiUrl, {
        amount,
        env_id: process.env.NEXT_PUBLIC_EASYPAISA_ENV_ID,
      });

      if (response.data.success) {
        setSuccess(
          "Payment initiated successfully. Follow the instructions sent to your mobile.",
        );
      } else {
        setError("Payment initiation failed. Please try again.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message || "Payment failed. Please try again.",
        );
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="p-6 max-w-md w-full bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          Easypaisa Payment
        </h1>

        <div className="flex items-center gap-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
            className="border border-gray-700 p-2 w-full bg-gray-900 text-white rounded"
            disabled={loading} // Prevent input during loading
          />
          <button
            onClick={() => setAmount((prev) => prev + 100)}
            className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-200"
            disabled={loading} // Disable during payment
          >
            +100
          </button>
        </div>

        <button
          onClick={handlePayment}
          className={`w-full text-white p-2 rounded mt-4 transition duration-200 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={loading} // Disable button during payment
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 mt-4 text-center">{success}</p>
        )}
      </div>
    </div>
  );
};

export default Payments;
