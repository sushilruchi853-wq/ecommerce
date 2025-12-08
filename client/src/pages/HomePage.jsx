import React from "react";
import { products } from '../data/products'
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout title={"best offers"}>
      {/* Banner */}
      <div className="container-fluid p-0">
        <div
          className="bg-dark text-white d-flex align-items-center justify-content-center"
          style={{ height: "50vh", backgroundSize: "cover" }}
        >
          <h1 className="fw-bold">Welcome to Suruchi Store 🛍️</h1>
        </div>
      </div>

      {/* Products */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Trending Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <div className="card product-card shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top product-img"
                />
                <div className="product-body">
                  <h6 className="product-title">{product.name}</h6>
                  <div className="product-rating">
                    {'★'.repeat(Math.floor(product.rating))} ({product.rating})
                  </div>
                  <p className="product-price">₹{product.price}</p>
                  <button className="btn btn-primary w-100">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
