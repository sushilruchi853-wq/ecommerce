import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet"
import {ToastContainer} from"react-toastify"


const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "80vh" }}>
                <ToastContainer/>
                {children}
                </main>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: "ShopHub - Your One-Stop Online Shop",
    description: "ShopHub is your go-to online store for a wide variety of products at unbeatable prices. Enjoy seamless shopping with fast delivery and excellent customer service.",
    keywords: "online shopping, e-commerce, ShopHub, buy online, fast delivery, customer service",
    author: "Sushil Rathore",
}

export default Layout