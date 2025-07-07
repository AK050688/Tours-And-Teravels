import React, { useState } from "react";
import { Star, ArrowRight, ArrowLeft } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      photo: "https://tours-and-teravels.vercel.app/Testimonials/1.avif",
      rating: 5,
      quote:
        "An unforgettable adventure! The team made our trip seamless and magical.",
    },
    {
      name: "Michael Chen",
      photo: "https://tours-and-teravels.vercel.app/Testimonials/2.avif",
      rating: 4,
      quote:
        "From booking to the journey, everything was perfect. Highly recommend!",
    },
    {
      name: "Emily Davis",
      photo: "https://tours-and-teravels.vercel.app/Testimonials/3.jpg",
      rating: 5,
      quote:
        "The best travel experience I've ever had. Can't wait to book again!",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Travelers Say
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <div className="flex justify-center my-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ArrowRight className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${
                  current === index ? "bg-[#F06543]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <div className="flex justify-center my-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
