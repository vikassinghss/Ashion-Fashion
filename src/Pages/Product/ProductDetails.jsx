import React from "react";
import Footer from "../../Component/Footer/Footer";
import DetailSection from "../../Component/Product-Details/DetailSection";
import Instagram from '../../Component/Instagram/Instagram'
import Navbar from "../../Component/Navbar/Navbar"

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <DetailSection />
      <Instagram />
      <Footer />
    </div>
  );
};

export default ProductDetails;
