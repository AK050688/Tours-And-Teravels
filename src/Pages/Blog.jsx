import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Travel Destinations for 2024',
    excerpt: 'Discover the most popular travel destinations for the upcoming year and start planning your next adventure.',
    imageUrl: '/carausel/carausel-1.avif',
    date: 'March 10, 2024',
  },
  {
    id: 2,
    title: 'How to Travel on a Budget',
    excerpt: 'Learn practical tips and tricks to make your travel experience affordable without compromising on fun.',
    imageUrl: '/carausel/carausel-2.jpg',
    date: 'February 25, 2024',
  },
  {
    id: 3,
    title: 'Cultural Etiquette Around the World',
    excerpt: 'Understand important cultural norms and etiquette to respect local customs during your travels.',
    imageUrl: '/carausel/carausel-3.jpg',
    date: 'January 15, 2024',
  },
];

function Blog() {
  return (
    <div className="blog-page container mx-auto px-4 py-10">
      <section className="hero-section text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Stay updated with the latest travel tips, guides, and stories from around the world.
        </p>
      </section>

      <section className="blog-posts grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border rounded shadow hover:shadow-lg transition-shadow overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <button className="text-blue-600 hover:underline">Read More</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Blog;
