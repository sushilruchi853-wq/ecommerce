import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 footer-section">
                        <h5>ShopHub</h5>
                        <p style={{ fontSize: '13px', color: '#bbb' }}>
                            Your one-stop destination for premium shopping experience.
                        </p>
                    </div>
                    <div className="col-md-3 footer-section">
                        <h5>Quick Links</h5>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/policy">Policy</Link>
                    </div>
                    <div className="col-md-3 footer-section">
                        <h5>Customer Service</h5>
                        <Link to="#">Track Order</Link>
                        <Link to="#">Returns</Link>
                        <Link to="#">FAQ</Link>
                        <Link to="#">Support</Link>
                    </div>
                    <div className="col-md-3 footer-section">
                        <h5>Follow Us</h5>
                        <Link to="#">Facebook</Link>
                        <Link to="#">Instagram</Link>
                        <Link to="#">Twitter</Link>
                        <Link to="#">LinkedIn</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 ShopHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
