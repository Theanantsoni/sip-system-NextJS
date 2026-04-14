"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    console.log("Login data:", { email, password });

    // 🔐 API call will go here later
  };

  return (
    <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">

      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Login to SIP Planner
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Secure access to your investment dashboard
      </p>

      {/* Error */}
      {error && (
        <div className="bg-red-100 text-red-600 text-sm p-2 rounded mb-4">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            style={{color: "black"}}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              style={{color: "black"}}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>Remember me</span>
          </label>

          <Link href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      {/* Footer */}
      <p className="text-sm text-center text-gray-600 mt-6">
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
