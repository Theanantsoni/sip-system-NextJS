"use client";

import { useState } from "react";

export default function MutualFunds() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    investmentMode: "",
    amount: "",
    years: "",
    risk: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch("/api/mutual-funds", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number(formData.amount),
          years: Number(formData.years),
          risk: formData.risk.toLowerCase(),
          mode: formData.investmentMode.toLowerCase(),
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Server error");

      setData(json);
    } catch (err) {
      setError(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    formData.amount &&
    formData.years &&
    formData.investmentMode &&
    formData.risk;


  return (
    <div className="max-w-lg mx-auto mt-16 mb-24">
      {/* ================= CARD ================= */}
      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-slate-200 p-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Mutual Fund SIP Planner
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Get fund suggestions based on your goals & risk profile
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Investment Mode */}
          <div>
            <label className="block text-sm font-medium mb-3">
              Investment Mode
            </label>
            <div className="flex gap-3">
              {["Monthly", "Lumpsum"].map((m) => (
                <label
                  key={m}
                  className={`flex-1 text-center cursor-pointer rounded-xl border px-4 py-3 text-sm font-medium transition
                    ${formData.investmentMode === m
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-slate-700 border-slate-300 hover:border-blue-400"
                    }`}
                >
                  <input
                    type="radio"
                    name="investmentMode"
                    value={m}
                    checked={formData.investmentMode === m}
                    onChange={handleChange}
                    className="hidden"
                  />
                  {m}
                </label>
              ))}
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Investment Amount (₹)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="e.g. 5000"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
              required
            />
          </div>

          {/* Years */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Investment Duration
            </label>
            <select
              name="years"
              value={formData.years}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
            >
              <option value="" disabled>Select duration</option>
              <option value="1">1 Year</option>
              <option value="3">3 Years</option>
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
            </select>
          </div>

          {/* Risk */}
          <div>
            <label className="block text-sm font-medium mb-3">
              Risk Preference
            </label>
            <div className="flex gap-3">
              {["Low", "Mid", "High"].map((r) => (
                <label
                  key={r}
                  className={`flex-1 text-center cursor-pointer rounded-xl border px-4 py-3 text-sm font-medium transition
                    ${formData.risk === r
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-slate-700 border-slate-300 hover:border-indigo-400"
                    }`}
                >
                  <input
                    type="radio"
                    name="risk"
                    value={r}
                    checked={formData.risk === r}
                    onChange={handleChange}
                    className="hidden"
                  />
                  {r} Risk
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !isFormValid}
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600
             py-4 text-white font-semibold
             disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Finding Best SIP..." : "Suggest Best SIP"}
          </button>

        </form>

        {/* ================= ERROR ================= */}
        {error && (
          <p className="mt-6 text-center text-sm text-red-600">
            {error}
          </p>
        )}

        {/* ================= RESULT ================= */}
        {data?.recommendations && (
          <div className="mt-10 space-y-5">
            <h3 className="text-lg font-semibold text-center">
              Recommended Mutual Funds
            </h3>

            {data.recommendations.map((fund, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h4 className="font-semibold text-slate-900">
                  {fund.sip_name}
                </h4>

                <div className="mt-2 text-sm text-slate-700 space-y-1">
                  <p>Mode: {formData.investmentMode}</p>
                  <p>Risk: {formData.risk} Risk</p>
                  <p>Duration: {data.investment_duration}</p>

                  {formData.investmentMode === "Monthly" && (
                    <p>Monthly SIP: {fund.monthly_sip_amount}</p>
                  )}

                  {formData.investmentMode === "Lumpsum" && (
                    <p>Lumpsum: {fund.one_time_lumpsum}</p>
                  )}

                  <p>Total Invested: {fund.total_invested_amount}</p>

                  <p className="font-semibold text-green-700">
                    Estimated Value: {fund.estimated_maturity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
