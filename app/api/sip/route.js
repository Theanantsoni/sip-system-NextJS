export async function POST(req) {
  // 1️⃣ Form data lo
  const { amount, years, rate } = await req.json();

  // 2️⃣ Validation
  if (!amount || !years || !rate) {
    return Response.json(
      { success: false, message: "All fields required" },
      { status: 400 }
    );
  }

  // 3️⃣ Third-party Mutual Fund API call
  const res = await fetch("https://api.mfapi.in/mf");
  const funds = await res.json();

  // 4️⃣ Data ko clean karo (normalize)
  const normalizedFunds = funds.map((fund) => ({
    name: fund.schemeName,
    category: "Equity",
    risk: "Market Linked",
    minRate: 8,
    minYears: 5,
    why: "Selected based on market performance",
  }));

  // 5️⃣ Recommendation logic
  const recommendedFunds = normalizedFunds
    .filter(
      (f) => rate >= f.minRate && years >= f.minYears
    )
    .slice(0, 10);

  // 6️⃣ Response bhejo
  return Response.json({
    success: true,
    recommendedFunds,
  });
}
