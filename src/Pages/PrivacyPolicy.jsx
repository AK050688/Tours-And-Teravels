import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <p>
          We collect personal information that you provide to us when using our services, such as your name, email address, and payment information.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p>
          Your information is used to provide and improve our services, process transactions, and communicate with you.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Sharing of Information</h2>
        <p>
          We do not sell your personal information. We may share information with trusted partners to facilitate services.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Security</h2>
        <p>
          We implement security measures to protect your information from unauthorized access.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Your Choices</h2>
        <p>
          You can update or delete your personal information by contacting us.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@toursandtravels.com.
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
