import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            If you have any questions about our products or services, or need
            help with your order, our customer service representatives are
            available to assist you. You can reach us by email, phone, or live
            chat. Our customer service hours are Monday through Friday, from 9am
            to 5pm EST.
          </p>
          <p className="mt-3">
            <BiMailSend /> : alsudaisansari@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 - 87676 88907
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (Toll Free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
