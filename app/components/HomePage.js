import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plan Your Investments Smartly with SIP Planner
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Calculate your SIP returns, understand the power of compounding,
            and achieve your financial goals with confidence.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/sip"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
            >
              Start SIP Calculator
            </Link>

            <Link
              href="/login"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-50"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS SIP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What is SIP?
            </h2>
            <p className="text-gray-600 mb-4">
              SIP (Systematic Investment Plan) is a disciplined way of investing
              a fixed amount regularly in mutual funds. It helps you build
              wealth over time using the power of compounding.
            </p>
            <p className="text-gray-600">
              SIP reduces market risk and makes investing simple, affordable,
              and stress-free for beginners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <ul className="space-y-3 text-gray-700">
              <li>✔ Start investing with small amounts</li>
              <li>✔ Benefit from compounding</li>
              <li>✔ Reduce market volatility risk</li>
              <li>✔ Ideal for long-term goals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY SIP PLANNER */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Why Choose SIP Planner?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2 text-black">
                Easy SIP Calculator
              </h3>
              <p className="text-gray-600">
                Instantly calculate your investment returns with a simple and
                interactive calculator.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2 text-black">
                Smart Financial Planning
              </h3>
              <p className="text-gray-600">
                Understand how your money grows over time and plan your future
                goals effectively.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2 text-black">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Designed with best practices to ensure a safe and smooth user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            How SIP Planner Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-semibold mb-2 text-black">1. Enter Details</h4>
              <p className="text-gray-600">
                Add your monthly investment, duration, and expected returns.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-black">2. Calculate Returns</h4>
              <p className="text-gray-600">
                Click calculate to instantly see your future investment value.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-black">3. Plan Your Goals</h4>
              <p className="text-gray-600">
                Use insights to plan long-term financial goals confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
