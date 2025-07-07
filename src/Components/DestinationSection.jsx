import { useNavigate } from "react-router-dom";

export default function DestinationsSection() {
  const navigate = useNavigate();
  const destinations = [
    {
      name: "Manali",
      description: "Explore the breathtaking Himalayas in Manali.",
      image: "/Manali.jpg",
    },
    {
      name: "Goa",
      description: "Enjoy the sandy beaches and vibrant nightlife of Goa.",
      image: "/Goa.jpg",
    },
    {
      name: "Kerala",
      description: "Relax in the tranquil backwaters of Kerala.",
      image: "/Kerala.png",
    },
    {
      name: "Rajasthan",
      description: "Step into history in the Pink City of Jaipur.",
      image: "/Rajasthan.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Find Your Next Adventure
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mt-4">
        Whether you're looking for mountains, beaches, heritage, or peace—Begin
        Yatra brings the best destinations to your fingertips.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <button
                onClick={() => navigate(`/destination/${item.name}`)}
                className="text-[#F06543] mt-3 text-sm font-medium hover:underline focus:outline-none">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
