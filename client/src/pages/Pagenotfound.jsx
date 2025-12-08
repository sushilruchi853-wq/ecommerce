import React from "react";
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <div className="page-container">
      <div className="not-found">
        <div>
          <h1 className="display-3 text-danger">404</h1>
          <h3>Oops! Page Not Found</h3>
          <p
            style={{
              fontSize: "15px",
              color: "#999",
              marginBottom: "30px",
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="btn btn-primary"
            style={{
              maxWidth: "200px",
              margin: "0 auto",
              display: "block",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pagenotfound;
