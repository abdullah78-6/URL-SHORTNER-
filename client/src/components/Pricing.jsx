const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      duration: "/month",
      button: "Get Started",
      popular: false,
      features: [
        "100 Short Links",
        "Basic Analytics",
        "Custom Short URLs",
        "Secure HTTPS Links",
        "Community Support",
      ],
    },
    {
      name: "Pro",
      price: "₹199",
      duration: "/month",
      button: "Start Pro",
      popular: true,
      features: [
        "Unlimited Short Links",
        "Advanced Analytics",
        "Custom Domains",
        "QR Code Generation",
        "Priority Support",
      ],
    },
    {
      name: "Business",
      price: "₹499",
      duration: "/month",
      button: "Contact Sales",
      popular: false,
      features: [
        "Everything in Pro",
        "Team Collaboration",
        "API Access",
        "Advanced Security",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#eef8ff] to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple{" "}
            <span className="text-[#314ce0]">Pricing</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your URL shortening needs.
            Upgrade anytime as your business grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-[#314ce0] shadow-xl scale-105"
                  : "border-gray-200 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-pink-500 text-white text-sm px-4 py-1 rounded-full font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-center">
                {plan.name}
              </h3>

              <div className="mt-6 text-center">
                <span className="text-5xl font-bold text-[#314ce0]">
                  {plan.price}
                </span>

                <span className="text-gray-500">
                  {plan.duration}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                      ✓
                    </div>

                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-10 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#314ce0] text-white hover:bg-[#2337b8]"
                    : "border border-[#314ce0] text-[#314ce0] hover:bg-[#314ce0] hover:text-white"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;