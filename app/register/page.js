"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Create Your SIP Planner Account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Start planning your investments with confidence
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3
                         focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                         outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3
                         focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                         outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16
                           focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                           outline-none transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2
                           text-sm text-blue-600 hover:underline"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3
                         focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                         outline-none transition"
              required
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1" required />
            <p className="text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 text-white
                       font-semibold text-base
                       hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
