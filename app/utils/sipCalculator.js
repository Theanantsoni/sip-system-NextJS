// utils/sipCalculator.js

export function calculateSIP(monthlyInvestment, years, rate) {
  const months = years * 12;
  const monthlyRate = rate / 12 / 100;

  const totalValue =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const investedAmount = monthlyInvestment * months;
  const wealthGained = totalValue - investedAmount;

  return {
    monthlyInvestment,
    years,
    rate,
    investedAmount: Math.round(investedAmount),
    totalValue: Math.round(totalValue),
    wealthGained: Math.round(wealthGained),
  };
}
