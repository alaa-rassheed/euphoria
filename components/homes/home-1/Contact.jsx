"use client";

import React from "react";
import { Formik } from "formik";
import { handleSubmit, validationSchema } from "@/utils/api/contact-data.js";
import AnimatedText from "@/components/common/AnimatedText";
import toast from "react-hot-toast";

const Contact = ({ data }) => {
  return (
    <div className="container position-relative">
      {/* Contact Info */}
      <div className="row">
        <div className="col-lg-6">
          <div className="row mb-50">
            <div className="col-lg-10">
              <h2 className="section-caption mb-xs-10">Contact Us</h2>
              <h3 className="section-title mb-0">
                <span className="wow charsAnimIn" data-splitting="chars">
                  <AnimatedText text="Let’s start the productive work." />
                </span>
              </h3>
            </div>
          </div>
        </div>
        {data?.addresses?.map((item) => (
          <div className="col-lg-6" key={item?.id}>
            <div className="row mb-60 mb-sm-50">
              <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
                <div className="alt-features-item border-left mt-0 wow fadeScaleIn">
                  <h4 className="alt-features-title">Say hello</h4>
                  <div className="alt-features-descr">
                    <a href={`tel:${item?.tel}`}>{item?.tel}</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 d-flex align-items-stretch">
                <div className="alt-features-item border-left mt-0 wow fadeScaleIn">
                  <h4 className="alt-features-title">Location</h4>
                  <div className="alt-features-descr">{item?.address}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className="col-md-6 mb-sm-50">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
              service_id: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <form
                onSubmit={handleSubmit}
                className="form contact-form pe-lg-5"
              >
                <div className="form-group row mb-10">
                  <div className="col-lg-6">
                    <label htmlFor="name" className="fs-6">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className={`input-lg round form-control ${
                        touched.name && errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {touched.name && errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="phone" className="fs-6">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className={`input-lg round form-control ${
                        touched.phone && errors.phone ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your phone number"
                      value={values.phone}
                      onChange={handleChange}
                    />
                    {touched.phone && errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>
                </div>

                <div className="form-group mb-10">
                  <label htmlFor="email" className="fs-6">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`input-lg round form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {touched.email && errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Service Dropdown */}
                <div className="form-group mb-10">
                  <label htmlFor="service_id" className="fs-6">
                    Select Service
                  </label>
                  <select
                    name="service_id"
                    id="service_id"
                    className={`input-lg round form-control ${
                      touched.service_id && errors.service_id
                        ? "is-invalid"
                        : ""
                    }`}
                    value={values.service_id}
                    onChange={handleChange}
                  >
                    <option value="">Choose a service</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    {/* Add more services as needed */}
                  </select>
                  {touched.service_id && errors.service_id && (
                    <div className="invalid-feedback">{errors.service_id}</div>
                  )}
                </div>

                <div className="form-group mb-0">
                  <label htmlFor="message" className="fs-6">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    cols={30}
                    name="message"
                    id="message"
                    className={`input-lg round form-control ${
                      touched.message && errors.message ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your message (optional)"
                    value={values.message}
                    onChange={handleChange}
                  />
                  {touched.message && errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <div className="pt-20">
                  <button
                    type="submit"
                    className="submit_btn btn btn-mod btn-black btn-large btn-round btn-hover-anim"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>

        {/* Map */}
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="map-boxed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.9534044607717!2d31.524075799999995!3d30.009494299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582376827e9c11%3A0x7e7c0af70bcd3b40!2sEuphoria%20Group!5e0!3m2!1sar!2seg!4v1729076096064!5m2!1sar!2seg"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
