import React from 'react';

const pressReleases = [
  {
    id: 1,
    title: 'ToursAndTravels Launches New Adventure Packages',
    date: 'April 5, 2024',
    summary: 'We are excited to announce the launch of our new adventure travel packages designed for thrill-seekers.',
  },
  {
    id: 2,
    title: 'ToursAndTravels Partners with Global Airlines',
    date: 'March 20, 2024',
    summary: 'Our partnership with leading global airlines will offer customers exclusive discounts and benefits.',
  },
];

const mediaCoverage = [
  {
    id: 1,
    outlet: 'Travel Weekly',
    title: 'ToursAndTravels: Revolutionizing Travel Experiences',
    link: 'https://travelweekly.com/toursandtravels-revolution',
  },
  {
    id: 2,
    outlet: 'Global Traveler',
    title: 'Top Travel Agencies to Watch in 2024',
    link: 'https://globaltraveler.com/top-agencies-2024',
  },
];

function Press() {
  return (
    <div className="press-page container mx-auto px-4 py-10">
      <section className="hero-section text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Stay informed with our latest press releases and media coverage.
        </p>
      </section>

      <section className="press-releases mb-16">
        <h2 className="text-3xl font-semibold mb-6">Press Releases</h2>
        <ul className="space-y-6 max-w-3xl mx-auto text-gray-700">
          {pressReleases.map((release) => (
            <li key={release.id} className="border p-6 rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">{release.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{release.date}</p>
              <p>{release.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="media-coverage mb-16">
        <h2 className="text-3xl font-semibold mb-6">Media Coverage</h2>
        <ul className="space-y-4 max-w-3xl mx-auto text-blue-600">
          {mediaCoverage.map((media) => (
            <li key={media.id}>
              <a href={media.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {media.outlet}: {media.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="media-contact text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact for Media Inquiries</h2>
        <p className="mb-6 text-gray-700">Email us at media@toursandtravels.com or call (123) 456-7890</p>
      </section>
    </div>
  );
}

export default Press;
