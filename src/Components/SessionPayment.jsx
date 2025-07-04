import React, { useState } from "react";
import axios from "axios";

const SessionPayment = ({ session }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Razorpay Script Loader
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const scriptExists = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );
      if (scriptExists) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setIsLoading(true);

    const razorpayLoaded = await loadRazorpayScript();
    if (!razorpayLoaded) {
      alert("❌ Failed to load Razorpay SDK.");
      setIsLoading(false);
      return;
    }

    try {
      // Get Razorpay key
      const { data: keyRes } = await axios.get("http://localhost:8000/api/razorPay/get-key");
      const key = keyRes?.data?.key || keyRes?.key;

      // 🔐 Replace with your actual token logic
      const token = localStorage.getItem("accessToken");

      // Create order from your backend
      const { data: orderRes } = await axios.post(
        "http://localhost:8000/api/razorPay/createorderPlan",
        {
          planId: session.session_id, // session_id should be your planId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      const { amount, order_id, user } = orderRes.data;

      const options = {
        key,
        amount,
        currency: "INR",
        name: "Begin Yatra",
        description: session.name || "Session Payment",
        order_id,
        prefill: {
          name: user?.name || "User",
          email: user?.email || "example@example.com",
        },
        theme: {
          color: "#121212",
        },
        handler: async function (response) {
          try {
            await axios.post("http://localhost:8000/api/razorPay/paymentVerification", {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });
            alert("✅ Payment Successful!");
          } catch (err) {
            console.error("❌ Payment verification failed:", err);
            alert("❌ Payment verification failed.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () => {
        alert("❌ Payment failed.");
        setIsLoading(false);
      });

      rzp.open();
    } catch (error) {
      console.error("❌ Payment error:", error.response || error);
      alert("Something went wrong during payment initiation.");
    }

    setIsLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Session Checkout</h2>
      <div className="mb-2 text-lg">Name: {session.name}</div>
      <div className="mb-4 text-lg">Price: ₹{session.price}</div>
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default SessionPayment;
