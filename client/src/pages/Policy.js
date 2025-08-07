import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          At our shoe shopping website, we take your privacy seriously. This
          privacy policy outlines the types of information we collect from our
          customers, how we use it, and how we protect it. Information We
          Collect: When you visit our website, we may collect certain
          information from you, such as your name, email address, mailing
          address, phone number, and payment information. We may also collect
          information about your browsing behavior, such as your IP address,
          browser type, and device information.
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
