import React from "react";
import Layout from "../components/Layout/Layout";

function About() {
  return (
    <Layout title={"About us-Suruchi store"}>


      <div className="page-container">
        <h1 className="page-title">About ShopHub</h1>
        <div className="page-content">
          <h3 className="mb-4">Who We Are</h3>
          <p className="mb-4">
            ShopHub is a leading online retailer dedicated to providing customers
            with the best selection of products at competitive prices. Founded in
            2020, we've grown to serve thousands of satisfied customers
            worldwide.
          </p>

          <h3 className="mb-4">Our Mission</h3>
          <p className="mb-4">
            We believe in making shopping easy, enjoyable, and accessible to
            everyone. Our mission is to deliver high-quality products with
            exceptional customer service.
          </p>

          <h3 className="mb-4">Why Choose Us?</h3>
          <ul className="mb-4">
            <li>Wide variety of premium products</li>
            <li>Competitive pricing with regular discounts</li>
            <li>Fast and reliable shipping</li>
            <li>Easy returns and exchanges</li>
            <li>24/7 customer support</li>
            <li>Secure payment options</li>
          </ul>

          <h3 className="mb-4">Our Values</h3>
          <p>
            Quality, Integrity, and Customer Satisfaction are at the core of
            everything we do. We're committed to continuous improvement and
            innovation to exceed our customers' expectations.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
