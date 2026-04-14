const BASE_URL = "https://sip.codinghouse.in";

export async function getSipRecommendations(payload) {
  const res = await fetch(`${BASE_URL}/sip`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
}

export async function getSipDetails(identifier) {
  const res = await fetch(`${BASE_URL}/sip-details`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier }),
  });

  return res.json();
}
