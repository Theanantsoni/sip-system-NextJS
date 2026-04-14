"use client";

import { useState } from "react";
import SipForm from "../components/SipForm";
import SipResult from "../components/SipResult";
import { calculateSIP } from "../utils/sipCalculator";

export default function SipPage() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");

  const [result, setResult] = useState(null);
  const [sips, setSips] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 MAIN ACTION: Calculate SIP + Call YOUR API
  const handleCalculate = async () => {
    if (!amount || !years || !rate) return;

    // 1️⃣ SIP calculation (local)
    const calcResult = calculateSIP(
      Number(amount),
      Number(years),
      Number(rate)
    );
    setResult(calcResult);

    // 2️⃣ Call YOUR Next.js API
    setLoading(true);
    try {
      const res = await fetch("/api/sip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(amount),
          years: Number(years),
          rate: Number(rate),
        }),
      });

      const data = await res.json();
      setSips(data.recommendedFunds || []);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }

    // 3️⃣ Scroll to result
    document.getElementById("result")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold">SIP Calculator</h1>
          <p className="text-gray-600 mt-1">
            Plan your investments with clarity and confidence
          </p>
        </div>
      </header>

      {/* FORM */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <SipForm
            amount={amount}
            years={years}
            rate={rate}
            setAmount={setAmount}
            setYears={setYears}
            setRate={setRate}
            onCalculate={handleCalculate}
          />
        </div>
      </section>

      {/* SIP RESULT */}
      {result && (
        <section
          id="result"
          className="max-w-6xl mx-auto px-6 pb-10"
        >
          <div className="bg-white rounded-xl shadow-sm p-6">
            <SipResult result={result} />
          </div>
        </section>
      )}

    </div>
  );
}
