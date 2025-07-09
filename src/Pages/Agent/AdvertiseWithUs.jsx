import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Helper component for Pricing Cards
const PricingCard = ({ plan, features, buttonColor }) => (
  <div className="w-full md:w-1/3 p-4 flex flex-col h-full bg-white rounded-lg shadow-md">
    <div className={`${buttonColor} text-white p-4 rounded-lg text-center mb-4`}>
      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <p className="text-3xl font-bold">₹ {plan.price.toLocaleString('en-IN')}</p>
      <p className="text-sm">per year</p>
    </div>
    <ul className="space-y-2 text-[#333] text-sm flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center py-2">
          {plan.features[feature.key] === true ? (
            <span className="text-green-500 mr-2">✔</span>
          ) : plan.features[feature.key] === false ? (
            <span className="text-red-500 mr-2">✘</span>
          ) : (
            <span className="mr-2">•</span> // For numerical values or specific text
          )}
          {feature.label}: {
            plan.features[feature.key] === true ? 'Included' :
            plan.features[feature.key] === false ? 'Not Included' :
            plan.features[feature.key]
          }
        </li>
      ))}
    </ul>
    <button className={`mt-auto w-full ${buttonColor} text-white p-3 rounded hover:opacity-90 transition-opacity mt-4`}>
      Purchase Now
    </button>
  </div>
);

const AdvertiseWithUs = () => {
  const [activeTab, setActiveTab] = useState('corePlans'); // State to manage active tab

  // Data for features and plans
  const coreFeatures = [
    { key: 'enhancedListing', label: 'Enhanced Listing Based on Package' },
    { key: 'customProfilePage', label: 'Custom Company Profile Page' },
    { key: 'packageUploadLimits', label: 'Package Upload Limits on Profile' },
    { key: 'customerLeads', label: 'Customer Leads from Posted Offers' },
    { key: 'leadRewardPoints', label: 'Lead Reward Points' },
    {
      key: 'customWebsiteDesign', label: 'Custom Website Design',
      description: 'Includes domains like .co.in and .in (e.g., www.yourcompany.in)'
    },
    { key: 'dedicatedAccountManager', label: 'Dedicated Account Manager' },
    { key: 'prioritySupport', label: 'Priority Support' },
    { key: 'featuredSpotlight', label: 'Featured Spotlight on Homepage' },
    { key: 'socialMediaPromotion', label: 'Social Media Promotion' },
    { key: 'newsletterInclusion', label: 'Newsletter Inclusion' },
    { key: 'quarterlyPerformanceReview', label: 'Quarterly Performance Review' },
    { key: 'annualMeetupAccess', label: 'Annual Partner Meetup Access' },
  ];

  const plans = [
    {
      name: 'Platinum',
      price: 35000,
      features: {
        enhancedListing: true,
        customProfilePage: true,
        packageUploadLimits: 'Unlimited',
        customerLeads: 'Unlimited',
        leadRewardPoints: 714,
        customWebsiteDesign: true,
        dedicatedAccountManager: false,
        prioritySupport: false,
        featuredSpotlight: false,
        socialMediaPromotion: false,
        newsletterInclusion: false,
        quarterlyPerformanceReview: false,
        annualMeetupAccess: false,
      },
      buttonColor: 'bg-[#FF69B4]', // Pink
    },
    {
      name: 'Star',
      price: 100000,
      features: {
        enhancedListing: true,
        customProfilePage: true,
        packageUploadLimits: 'Unlimited',
        customerLeads: 'Unlimited',
        leadRewardPoints: 2664,
        customWebsiteDesign: true,
        dedicatedAccountManager: true,
        prioritySupport: true,
        featuredSpotlight: true,
        socialMediaPromotion: true,
        newsletterInclusion: true,
        quarterlyPerformanceReview: true,
        annualMeetupAccess: true,
      },
      buttonColor: 'bg-[#8A2BE2]', // Blue Violet
    },
  ];

  const testimonials = [
    { text: "The Platinum package transformed our lead generation!", author: "Ravi Kumar" },
    { text: "The Star plan's features exceeded our expectations and boosted our brand!", author: "Sneha Gupta" },
    { text: "Excellent support and visibility. Highly recommend!", author: "Priya Sharma" },
  ];

  const DisplayAdsContent = () => (
    <div className="text-center p-8 bg-gray-50 rounded-lg">
      <h3 className="text-2xl font-semibold text-[#1E90FF] mb-4">Display Advertising Options</h3>
      <p className="text-lg text-[#333]">
        Reach a wider audience with our premium display ad placements across our platform.
      </p>
      <Link to="/contact" className="mt-4 inline-block bg-[#20B2AA] text-white p-3 rounded hover:bg-[#1F9A93] transition-colors">
        Learn More About Display Ads
      </Link>
    </div>
  );

  const ExtraServicesContent = () => (
    <div className="text-center p-8 bg-gray-50 rounded-lg">
      <h3 className="text-2xl font-semibold text-[#1E90FF] mb-4">Additional Services to Boost Your Business</h3>
      <p className="text-lg text-[#333]">
        Explore our range of supplementary services like SEO optimization, content creation, and more.
      </p>
      <Link to="#" className="mt-4 inline-block bg-[#20B2AA] text-white p-3 rounded hover:bg-[#1F9A93] transition-colors">
        View All Extra Services
      </Link>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-[#E0F2F7] py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-[#1E90FF] mb-2 leading-tight">
            PROMOTE YOUR BUSINESS
          </h2>
          <p className="text-xl text-[#333] font-medium">
            Enhance your visibility with our comprehensive advertising solutions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-3">
          <button
            className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
              activeTab === 'corePlans'
                ? 'bg-[#FF6B6B] text-white shadow-md'
                : 'bg-white text-[#333] border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('corePlans')}
          >
            CORE PLANS
          </button>
          <button
            className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
              activeTab === 'displayAds'
                ? 'bg-[#FF6B6B] text-white shadow-md'
                : 'bg-white text-[#333] border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('displayAds')}
          >
            DISPLAY ADS
          </button>
          <button
            className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
              activeTab === 'extraServices'
                ? 'bg-[#FF6B6B] text-white shadow-md'
                : 'bg-white text-[#333] border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('extraServices')}
          >
            EXTRA SERVICES
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'corePlans' && (
          <div className="flex flex-col md:flex-row md:items-stretch gap-6">
            {/* Features List - NOW WITH FLEX H-FULL */}
            <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-inner flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-[#1E90FF] mb-4">Our Core Features</h3>
              <button className="w-full bg-[#20B2AA] text-white p-3 rounded-md mb-6 hover:bg-[#1F9A93] transition-colors shadow-md">
                Select Your Package
              </button>
              {/* Added flex-grow to the ul to make it take up available space */}
              <ul className="space-y-3 text-[#333] flex-grow">
                {coreFeatures.map((feature, index) => (
                  <li key={index} className="text-base flex items-center">
                    <span className="text-[#20B2AA] text-lg mr-2">•</span>
                    <div>
                      {feature.label}
                      {feature.description && (
                        <p className="text-xs text-gray-500 mt-0.5 ml-4">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Cards */}
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} features={coreFeatures} buttonColor={plan.buttonColor} />
            ))}
          </div>
        )}

        {activeTab === 'displayAds' && <DisplayAdsContent />}
        {activeTab === 'extraServices' && <ExtraServicesContent />}

        <hr className="my-10 border-gray-200" />

        {/* Testimonials Section */}
        <div className="mt-8 text-center">
          <h3 className="text-3xl font-bold text-[#1E90FF] mb-6">
            Hear From Our Satisfied Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-[#333] italic text-lg mb-3">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-600 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">
            Ready to Grow Your Business?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Our team is here to help you choose the best plan for your needs.
          </p>
          <button className="bg-[#20B2AA] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#1F9A93] transition-colors shadow-lg">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseWithUs;