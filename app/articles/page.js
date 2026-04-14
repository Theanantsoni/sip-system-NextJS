"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ArticlesPage() {

    const [activeSection, setActiveSection] = useState(0);

useEffect(() => {
  const sections = document.querySelectorAll("[id^='section-']");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.id.replace("section-", ""));
          setActiveSection(index);
        }
      });
    },
    {
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);


    
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e0e7ff_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <span className="text-indigo-600 tracking-widest uppercase text-sm font-semibold">
            SIP Knowledge Base
          </span>
          <h1 className="text-5xl font-extrabold mt-4 leading-tight">
            Learn SIP Investing <br />
            <span className="text-indigo-600">The Smart Way</span>
          </h1>
          <p className="mt-6 max-w-2xl text-slate-600">
            Understand SIP fundamentals, risks, returns, tax benefits, and
            long-term wealth creation — explained clearly for real investors.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[260px_1fr] gap-16">
        {/* SIDE NAV */}
        <aside className="hidden lg:block sticky top-24 self-start">
  <nav className="space-y-3 text-sm">
    {[
      "Beginner Education",
      "SIP Calculator Logic",
      "Goal-Based Investing",
      "Risk & Transparency",
      "Market Awareness",
      "Tax & Planning",
    ].map((item, i) => {
      const isActive = activeSection === i;

      return (
        <a
          key={i}
          href={`#section-${i}`}
          className={`
            relative block px-4 py-3 rounded-lg transition
            border-l-4
            ${
              isActive
                ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold"
                : "border-transparent text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
            }
          `}
        >
          {item}
        </a>
      );
    })}
  </nav>
</aside>


        {/* CONTENT */}
        <div className="space-y-24">
          {sections.map((section, i) => (
            <div key={i} id={`section-${i}`} className="relative">
              {/* Vertical accent line */}
              <div className="absolute -left-6 top-0 w-1 h-full bg-indigo-200 rounded" />

              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-3xl">{section.icon}</span>
                {section.title}
              </h2>

              <div className="mt-10 space-y-10">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                      {item.heading}
                    </h3>

                    {item.text && (
                      <p className="text-slate-600 leading-relaxed">
                        {item.text}
                      </p>
                    )}

                    {item.list && (
                      <ul className="mt-4 space-y-3">
                        {item.list.map((li, k) => (
                          <li
                            key={k}
                            className="flex items-center gap-3 text-slate-600"
                          >
                            <span className="h-2 w-2 bg-indigo-500 rounded-full" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-indigo-50 p-16 text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              Ready to Start Your SIP?
            </h2>
            <p className="max-w-xl mx-auto text-slate-600 mb-10">
              Calculate your SIP, choose your risk profile, and track your
              wealth growth with real-time insights.
            </p>
            <a
              href="/sip-calculator"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
            >
              Open SIP Calculator
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* DATA (unchanged) */
const sections = [
  {
    title: "Beginner Education",
    icon: "📘",
    items: [
      {
        heading: "What is a Systematic Investment Plan (SIP)?",
        text:
          "A Systematic Investment Plan (SIP) is a disciplined investment method where a fixed amount is invested at regular intervals, helping investors grow wealth without timing the market.",
      },
      {
        heading: "How Does SIP Work?",
        text:
          "SIP invests consistently, buying more units when prices fall and fewer when prices rise — a strategy known as rupee cost averaging.",
      },
      {
        heading: "Benefits of Investing Through SIP",
        list: [
          "Builds disciplined investing habits",
          "Low entry barrier for beginners",
          "Reduces impact of market volatility",
          "Maximizes long-term compounding",
        ],
      },
    ],
  },
  {
    title: "SIP Calculator Logic",
    icon: "📊",
    items: [
      {
        heading: "How SIP Returns Are Calculated",
        text:
          "SIP returns are based on CAGR, considering investment amount, duration, and expected annual growth rate.",
      },
      {
        heading: "Compounding Explained",
        text:
          "Compounding allows earnings to generate further earnings, accelerating wealth growth over time.",
      },
      {
        heading: "Understanding CAGR",
        text:
          "CAGR smoothens returns into a single annualized growth rate.",
      },
    ],
  },
  {
    title: "Goal-Based Investing",
    icon: "🎯",
    items: [
      {
        heading: "SIP for Retirement",
        text:
          "Consistent SIP investments over decades can create a reliable retirement corpus.",
      },
      {
        heading: "Child Education Planning",
        text:
          "SIP helps plan for future education expenses by spreading investment risk over time.",
      },
      {
        heading: "Long-Term Wealth Creation",
        text:
          "Long-term SIPs benefit the most from market growth and compounding.",
      },
    ],
  },
  {
    title: "Risk & Transparency",
    icon: "⚠️",
    items: [
      {
        heading: "Is SIP Safe?",
        text:
          "SIP investments are market-linked and subject to fluctuations; returns are not guaranteed.",
      },
      {
        heading: "SIP During Market Crashes",
        text:
          "Market downturns allow SIP investors to accumulate units at lower prices.",
      },
      {
        heading: "Common SIP Myths",
        list: [
          "SIP guarantees profits",
          "Only salaried people can invest",
          "Large capital is required",
        ],
      },
    ],
  },
  {
    title: "Market Awareness",
    icon: "📈",
    items: [
      {
        heading: "SIP in Volatile Markets",
        text:
          "SIP helps investors stay calm and invested during market ups and downs.",
      },
      {
        heading: "Should You Stop SIP?",
        text:
          "Stopping SIP during corrections can negatively impact long-term returns.",
      },
      {
        heading: "SIP vs Lump Sum",
        text:
          "SIP spreads risk over time, while lump sum suits favorable market conditions.",
      },
    ],
  },
  {
    title: "Tax & Planning",
    icon: "🔍",
    items: [
      {
        heading: "Tax Benefits of SIP",
        text:
          "Taxation depends on fund type; equity SIPs follow capital gains taxation rules.",
      },
      {
        heading: "ELSS SIP",
        text:
          "ELSS SIP offers tax savings with long-term equity exposure and a lock-in period.",
      },
    ],
  },
];
