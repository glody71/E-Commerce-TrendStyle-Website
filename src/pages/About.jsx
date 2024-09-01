import React from "react";
import { FaDiscord } from "react-icons/fa";

const About = () => {
  return (
    <div className="md:h-[90vh] h-screen mb-8">
      <div className="py-24">
        <div className="flex justify-center items-center flex-col px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-center md:w-[700px] mb-4">
            Welcome to TrendStyle, where fashion meets innovation. At
            TrendStyle, we believe that style is a reflection of individuality,
            and our mission is to bring you the latest trends and timeless
            classics that empower you to express your unique personality.
          </p>
          <p className="text-center md:w-[700px] mb-4">
            Founded in [Year], TrendStyle began as a small boutique with a
            vision to make high-quality fashion accessible to everyone. Over the
            years, we've grown into a go-to destination for fashion enthusiasts,
            offering a curated selection of apparel, accessories, and footwear
            from renowned designers and emerging brands alike.
          </p>
          <p className="text-center md:w-[700px]">We are committed to providing our customers with an exceptional shopping experience. From our user-friendly website to our customer support team, every aspect of TrendStyle is designed with you in mind. We believe in quality over quantity, and our products are carefully chosen to ensure they meet the highest standards of craftsmanship.</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
