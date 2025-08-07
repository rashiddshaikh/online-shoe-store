import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Faiz Shoes, your one-stop destination for stylish and
            comfortable footwear. We are a family-owned business, dedicated to
            providing you with the best quality shoes at affordable prices. At
            Faiz Shoes, we understand that every customer is unique, which is
            why we offer a diverse range of styles to suit every taste and
            occasion. From casual sneakers to elegant dress shoes, we have
            something for everyone. Our commitment to quality and affordability
            has made us a trusted name in the industry, and we take pride in our
            reputation for exceptional customer service.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
