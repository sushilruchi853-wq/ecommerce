import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>

      <div className="container py-5">
        <h2 className="text-center mb-4">Contact Us</h2>

        <div className="row">
          <div className="col-md-6 mb-5">
            <h3 className="mb-4">Get in Touch</h3>
            <form
              onSubmit={handleSubmit}
              className="shadow p-4 rounded bg-light"
            >
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center ps-5">
            <h3 className="mb-4">Contact Information</h3>
            <p>
              <strong>Email:</strong> support@shophub.com
            </p>
            <p>
              <strong>Phone:</strong> 1-800-SHOPHUB
            </p>
            <p>
              <strong>Address:</strong> 123 Shopping Street, Commerce City, CC 12345
            </p>
            <p>
              <strong>Hours:</strong> Monday - Friday: 9AM - 6PM (EST)
            </p>
            <p className="mt-5">
              We respond to all inquiries within 24 business hours.
            </p>
          </div>
        </div>
      </div>
    </Layout>

  );
};

export default Contact;
