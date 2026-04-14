"use client";

export default function SipForm({
  amount,
  years,
  rate,
  setAmount,
  setYears,
  setRate,
  onCalculate,
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-slate-200">

      {/* Decorative gradients (secret sauce 😎) */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative p-8 sm:p-10">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            SIP Calculator
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Estimate your investment growth with precision and clarity.
          </p>
        </div>

        {/* Monthly Investment */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Monthly Investment
          </label>

          <div className="group relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
              ₹
            </span>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="5,000"
              className="
                w-full rounded-2xl border border-slate-300 bg-white
                px-10 py-4 text-slate-900 text-base
                focus:border-blue-600 focus:ring-4 focus:ring-blue-100
                outline-none transition
                group-hover:border-slate-400
              "
            />
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Minimum SIP usually starts from ₹500 per month
          </p>
        </div>

        {/* Investment Duration */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Investment Duration
          </label>

          <div className="relative">
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="10"
              className="
                w-full rounded-2xl border border-slate-300 bg-white
                px-4 py-4 pr-16 text-slate-900 text-base
                focus:border-blue-600 focus:ring-4 focus:ring-blue-100
                outline-none transition
              "
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
              Years
            </span>
          </div>

          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>Short term</span>
            <span>Long term</span>
          </div>
        </div>

        {/* Expected Return */}
        <div className="mb-8">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Expected Annual Return
          </label>

          <div className="relative">
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="12"
              className="
                w-full rounded-2xl border border-slate-300 bg-white
                px-4 py-4 pr-16 text-slate-900 text-base
                focus:border-blue-600 focus:ring-4 focus:ring-blue-100
                outline-none transition
              "
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
              %
            </span>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Equity SIPs typically range between 10%–14% long-term
          </p>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={onCalculate}
          className="
            relative w-full overflow-hidden rounded-2xl
            bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600
            py-4 text-base font-semibold text-white
            shadow-lg shadow-blue-600/30
            transition-all duration-300
            hover:scale-[1.02] hover:shadow-xl
            active:scale-[0.98]
          "
        >
          <span className="relative z-10">
            Calculate SIP Returns
          </span>

          {/* Button shine effect */}
          <span className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.4),transparent)]
            opacity-0 hover:opacity-100
            transition-opacity duration-700
          " />
        </button>

        {/* Trust note */}
        <p className="mt-6 text-center text-xs text-slate-500">
          Calculations are estimates. Actual returns depend on market performance.
        </p>
      </div>
    </div>
  );
}
