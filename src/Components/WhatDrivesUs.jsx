import { FaGlobeAmericas, FaHandshake, FaBullseye } from "react-icons/fa";

export default function WhatDrivesUs() {
  const cards = [
    {
      icon: <FaGlobeAmericas className="text-blue-600 text-4xl" />,
      title: "For the Travelers",
      description:
        "We work behind the scenes to ensure that travel agents have access to the right tools and resources to craft personalized itineraries that meet your travel aspirations.",
      bg: "bg-blue-50",
    },
    {
      icon: <FaHandshake className="text-pink-500 text-4xl" />,
      title: "Our Partnership",
      description:
        "We partner with travel agents, providing them with high-quality leads and efficient solutions to grow their business. This enables them to focus on what matters most – delivering exceptional travel experiences.",
      bg: "bg-pink-50",
    },
    {
      icon: <FaBullseye className="text-green-500 text-4xl" />,
      title: "Our Goal",
      description:
        "To make travel planning effortless and enjoyable for all, bridging the gap between travel dreams and reality.",
      bg: "bg-green-50",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800">What Drives Us</h2>
        <p className="text-gray-600 mt-2">
          We're committed to creating exceptional travel experiences for all.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.bg} p-8 rounded-xl shadow-sm border text-center hover:border hover:border-[#f06543] transition hover:shadow-md`}
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
