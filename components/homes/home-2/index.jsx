import React from "react";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
// import Blog from "./Blog";
import Contact from "./Contact";
import { Link } from "@/i18n.config";
import Image from "next/image";
import Blog from "../home-1/Blog";
import { useTranslations } from "next-intl";
export default function Home2({ onePage = false, dark = false, data, locale }) {
  const t = useTranslations("common");
  return (
    <>
      <section
        className={`page-section  scrollSpysection  pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-last order-md-first">
              <div className="overflow-hidden">
                <Image
                  width={800}
                  height={1095}
                  src={data?.about?.image}
                  className="w-100 wow scaleOutIn"
                  alt={data?.about?.alt_img}
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 d-flex align-items-center mb-sm-80">
              <div className="wow fadeInUp">
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    {data?.about?.title}
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    {data?.about?.title}
                  </span>
                  <span className="text-outline">{data?.about?.title}</span>
                </h2>
                <div
                  className="section-text mb-60 mb-md-40 mb-sm-30"
                  dangerouslySetInnerHTML={{ __html: data?.about?.text }}
                ></div>
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#services"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        {t("learn_more")}{" "}
                        <span className="visually-hidden">{t("about_us")}</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        {t("learn_more")}{" "}
                        <span className="visually-hidden">{t("about_us")}</span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={`/about`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        {t("learn_more")}{" "}
                        <span className="visually-hidden">{t("about_us")}</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        {t("learn_more")}{" "}
                        <span className="visually-hidden">{t("about_us")}</span>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {data?.aboutStrucs?.map((item) => (
              <div key={item?.id} className="col-md-6  mt-5">
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    {item?.title}
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    {item?.title}
                  </span>
                  <span className="text-outline">{item?.title}</span>
                </h2>
                <div
                  className="text-gray"
                  dangerouslySetInnerHTML={{ __html: item?.text }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section
        className={`page-section scrollSpysection  pt-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="awards"
      >
        <Awards />
      </section> */}

      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <Portfolio data={data?.categories} />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      {/* <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        <Testimonials />
      </section> */}

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        {/* <Blog allBlogs={data?.blogs} /> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-md-80">
              <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                <span className="text-outline-2">{t("articles")}</span>
                <span className="text-outline-1">{t("articles")}</span>
                <span className="text-outline">{t("articles")}</span>
              </h2>
              <p className="section-text mb-60 mb-md-40 mb-sm-30">
                <span className="section-title-inline">{t("where")}</span>{" "}
                {t("articles_desc")}
              </p>
            </div>
          </div>
          <Blog hideButton={false} allBlogs={data?.blogs} />
        </div>
      </section>
      <div className="page-section overflow-hidden">
        <Experience data={data?.partners} />
      </div>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact locale={locale} />
      </section>
    </>
  );
}
