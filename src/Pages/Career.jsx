import React from 'react';

function Career() {
  return (
    <div className="career-page container mx-auto px-4 py-10">
      <section className="hero-section text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We are looking for passionate individuals to help us create amazing travel experiences.
        </p>
      </section>

      <section className="job-openings mb-16">
        <h2 className="text-3xl font-semibold mb-6">Current Job Openings</h2>
        <ul className="space-y-6">
          <li className="border p-6 rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
            <p className="mb-2">Location: Remote</p>
            <p className="mb-4">We are seeking a skilled frontend developer with experience in React.js and modern web technologies.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Apply Now</button>
          </li>
          <li className="border p-6 rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Content Writer</h3>
            <p className="mb-2">Location: Remote</p>
            <p className="mb-4">Looking for a creative content writer with a passion for travel and storytelling.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Apply Now</button>
          </li>
        </ul>
      </section>

      <section className="company-culture mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Culture</h2>
        <p className="max-w-3xl text-gray-700 mx-auto">
          At our company, we value creativity, collaboration, and continuous learning. We foster an inclusive environment where every voice is heard and every team member is empowered to grow.
        </p>
      </section>

      <section className="benefits mb-16">
        <h2 className="text-3xl font-semibold mb-6">Benefits</h2>
        <ul className="list-disc list-inside max-w-3xl mx-auto text-gray-700 space-y-2">
          <li>Flexible working hours and remote work options</li>
          <li>Health insurance coverage</li>
          <li>Professional development opportunities</li>
          <li>Generous paid time off and holidays</li>
          <li>Travel discounts and perks</li>
        </ul>
      </section>

      <section className="call-to-action text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Join Us?</h2>
        <p className="mb-6 text-gray-700">Send your resume and cover letter to careers@toursandtravels.com</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Apply Now</button>
      </section>
    </div>
  );
}

export default Career;
