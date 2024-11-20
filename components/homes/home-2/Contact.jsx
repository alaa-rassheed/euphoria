"use client";

import fetchClient from "@/utils/api/get-data-client";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

export default function Contact({ heading, locale }) {
  const { data: setting } = useQuery({
    queryFn: async () => await fetchClient("setting", locale),
    queryKey: ["setting", locale],
  });
  const t = useTranslations("common");

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-70">
          <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
            <span className="text-outline-2">
              {heading ? heading : t("contact_us")}
            </span>
            <span className="text-outline-1">
              {heading ? heading : t("contact_us")}
            </span>
            <span className="text-outline">
              {heading ? heading : t("contact_us")}
            </span>
          </h2>
          <p className="section-text mb-60 mb-md-40 mb-sm-30">
            <span className="section-title-inline">How?</span> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Maiores, dolor commodi
            aliquid sint numquam, illum tempore deserunt rem laboriosam minus
            aliquam repellendus similique eligendi accusamus praesentium
            asperiores. Sit ducimus veniam autem nostrum numquam officia
            eligendi?
          </p>
          <div>
            <a
              href={`mailto:${setting?.setting[0]?.contact_email}`}
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              {setting?.setting[0]?.contact_email}
            </a>
          </div>
          <div>
            <a
              href={`tel:${setting?.setting[0]?.mobile}`}
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              {setting?.setting[0]?.mobile}
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-xl-6 offset-xl-1 pt-30 pt-md-0">
          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form wow fadeInUp"
            id="contact_form"
          >
            {/* Name */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="name" className="mb-0 mb-sm-10 me-3">
                {t("your_name")}
              </label>
              <div className="flex-grow-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-sm form-control underline text-md-center"
                  placeholder={t("name_placeholder")}
                  pattern=".{3,100}"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="email" className="mb-0 mb-sm-10 me-3">
                {t("email_address")}
              </label>
              <div className="flex-grow-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-sm form-control underline text-md-center"
                  placeholder={t("address_placeholder")}
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="email" className="mb-0 mb-sm-10 me-3">
                {t("phone_number")}
              </label>
              <div className="flex-grow-1">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="input-sm form-control underline text-md-center"
                  placeholder={t("phone_placeholder")}
                  required
                  aria-required="true"
                />
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="mb-sm-10">
                {t("message")}
              </label>
              <textarea
                name="message"
                id="message"
                className="input-sm form-control underline"
                style={{ height: 120 }}
                placeholder={t("message_placeholder")}
                defaultValue={""}
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                {/* Button */}
                <button
                  className="submit_btn btn btn-mod btn-circle btn-white btn-ellipse"
                  data-btn-animate="ellipse"
                  id="submit_btn"
                  aria-controls="result"
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">
                      {t("send_message")}
                    </span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      {t("send_message")}
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
      </div>
    </div>
  );
}
