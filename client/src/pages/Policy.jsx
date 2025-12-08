import React from "react";
import Layout from "../components/Layout/Layout";

function Policy() {
  return (
    <Layout>

      <div className="page-container">
        <h1 className="page-title">Privacy Policy & Terms</h1>
        <div className="page-content">
          <h3 className="mb-4">Privacy Policy</h3>
          <p className="mb-3">
            We are committed to protecting your privacy. This policy explains how
            we collect, use, and protect your personal information.
          </p>

          <h4 className="mb-3">Information Collection</h4>
          <p className="mb-4">
            We collect information you provide directly, such as when you create
            an account, make a purchase, or contact us for support.
          </p>

          <h3 className="mb-4">Terms & Conditions</h3>
          <p className="mb-3">
            By using ShopHub, you agree to these terms and conditions. Please
            read them carefully before making a purchase.
          </p>

          <h4 className="mb-3">Product Information</h4>
          <p className="mb-4">
            We strive to provide accurate product descriptions. However, we
            cannot guarantee that all product information is error-free or
            complete.
          </p>

          <h4 className="mb-3">Shipping & Delivery</h4>
          <p className="mb-4">
            Orders are typically shipped within 2-3 business days. Delivery times
            depend on your location. We are not responsible for delays caused by
            shipping carriers.
          </p>

          <h4 className="mb-3">Returns & Refunds</h4>
          <p className="mb-4">
            Items can be returned within 30 days of purchase in original
            condition. Refunds will be processed within 5-7 business days.
          </p>

          <h3 className="mb-4">Limitation of Liability</h3>
          <p>
            ShopHub is not liable for any indirect, incidental, or consequential
            damages arising from your use of our platform or products.
          </p>
        </div>
      </div>
    </Layout>

  );
}

export default Policy;
