import React from 'react';
import SessionPayment from './SessionPayment';

const CheckoutPage = () => {
  const session = {
    session_id: "abc123",
    name: "Yoga Session",
    price: 500,
    type: "session",
    session_date: "2025-06-11",
  };

  return <SessionPayment session={session} />;
};

export default CheckoutPage;
