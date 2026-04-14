// ================= API =================
export async function POST(req) {
  try {
    // 🛡️ Safe body parse
    const body = await req.json().catch(() => null);

    if (
      !body ||
      typeof body !== "object" ||
      body.amount == null ||
      body.years == null ||
      !body.risk
    ) {
      return Response.json(
        { success: false, message: "Invalid request body" },
        { status: 400 }
      );
    }

    const amount = Number(body.amount);
    const years = Number(body.years);
    const risk = body.risk;

    if (amount <= 0 || years <= 0 || !risk) {
      return Response.json(
        { success: false, message: "Invalid values" },
        { status: 400 }
      );
    }

    // 🟡 Optional real-world guard
    if (risk === "Low" && years > 5) {
      return Response.json({
        success: true,
        recommendations: [],
        message:
          "Low risk SIPs usually do not have reliable projections beyond 5 years.",
      });
    }

    // ================= CALL YOUR API =================
    const sipRes = await fetch("https://sip.codinghouse.in/sip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        years,
        risk,
      }),
    });

    if (!sipRes.ok) {
      throw new Error("CodingHouse SIP API failed");
    }

    const sipData = await sipRes.json();

    // 🛡️ Response safety
    if (
      !sipData ||
      typeof sipData !== "object" ||
      !Array.isArray(sipData.recommendations)
    ) {
      return Response.json(
        { success: false, message: "Invalid API response" },
        { status: 500 }
      );
    }

    // ================= NORMALIZED RESPONSE =================
    return Response.json({
      success: true,
      investment_duration: sipData.investment_duration,
      search_category: sipData.search_category,
      expert_analysis: sipData.expert_analysis,
      recommendations: sipData.recommendations.map((item) => ({
        sip_name: item.sip_name,
        total_invested_amount: item.total_invested_amount,
        one_time_lumpsum: item.one_time_lumpsum,
        monthly_sip_amount: item.monthly_sip_amount,
        live_annual_return: item.live_annual_return,
        estimated_maturity: item.estimated_maturity,
      })),
    });
  } catch (err) {
    console.error("SIP API Error:", err);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
