"use client";

import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function SipResult({ result }) {
  if (!result) return null;

  // Year-wise data
  const chartData = Array.from({ length: result.years }, (_, i) => {
    const year = i + 1;

    const invested = result.monthlyInvestment * 12 * year;

    const value =
      result.monthlyInvestment *
      ((Math.pow(1 + result.rate / 100, year) - 1) /
        (result.rate / 100));

    return {
      year: `Year ${year}`,
      invested: Math.round(invested),
      value: Math.round(value),
    };
  });

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-slate-200">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      {/* HEADER */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900">
          SIP Investment Overview
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Visual representation of your investment growth over time
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <SummaryCard
          label="Total Invested"
          value={`₹${Number(result.investedAmount).toLocaleString()}`}
        />
        <SummaryCard
          label="Wealth Gained"
          value={`₹${Number(result.wealthGained).toLocaleString()}`}
          highlight
        />
        <SummaryCard
          label="Total Value"
          value={`₹${Number(result.totalValue).toLocaleString()}`}
          strong
        />
      </div>

      {/* GRAPH */}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="investedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity={0.05} />
              </linearGradient>

              <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 12 }}
              tickMargin={8}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickFormatter={(v) => `₹${v / 1000}k`}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="invested"
              stroke="#64748b"
              fill="url(#investedGradient)"
              strokeWidth={2}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              fill="url(#valueGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* FOOT NOTE */}
      <p className="mt-6 text-center text-xs text-slate-500">
        This is an estimated projection. Actual returns may vary due to market conditions.
      </p>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function SummaryCard({ label, value, highlight, strong }) {
  return (
    <div
      className={`rounded-2xl border p-5 text-center ${
        highlight
          ? "bg-green-50 border-green-200"
          : strong
          ? "bg-blue-50 border-blue-200"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      <p className="text-sm text-slate-600">{label}</p>
      <p
        className={`mt-2 text-xl font-bold ${
          highlight
            ? "text-green-600"
            : strong
            ? "text-blue-600"
            : "text-slate-800"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="rounded-xl border bg-white px-4 py-3 shadow-lg">
      <p className="text-sm font-semibold mb-2">{label}</p>
      <p className="text-xs text-slate-600">
        Invested: <span className="font-medium">₹{payload[0].value.toLocaleString()}</span>
      </p>
      <p className="text-xs text-slate-600">
        Value: <span className="font-medium">₹{payload[1].value.toLocaleString()}</span>
      </p>
    </div>
  );
}
