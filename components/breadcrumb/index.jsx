import React from "react";
import AnimatedText from "../common/AnimatedText";
import { Link } from "@/i18n.config";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

export const BreadCrumb = ({ title, anotherLink, anotherLinkName, locale }) => {
  const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
      ssr: false, // Disable server-side rendering
    }
  );

  const t = useTranslations("common");

  return (
    <section className="page-section pt-0 pb-0" id="home">
      <ParallaxContainer
        className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <div className="container position-relative pt-30 pt-sm-50">
          {/* Section Content */}
          <div className="text-center">
            <div className="row">
              {/* Page Title */}
              <div className="col-md-8 offset-md-2">
                <h1 className="hs-title-1 mb-20">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    {locale === "ar" && anotherLink ? (
                      <span className="wow charsAnimIn words chars splitting">
                        {title}
                      </span>
                    ) : locale === "ar" && !anotherLink ? (
                      <span className="wow charsAnimIn words chars splitting">
                        {t(title)}
                      </span>
                    ) : anotherLink ? (
                      <AnimatedText text={title} />
                    ) : (
                      <AnimatedText text={t(title)} />
                    )}
                  </span>
                </h1>

                {/* <!-- Author, Categories, Comments --> */}
                <div
                  className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="d-inline-flex align-items-center me-3">
                    <Link href="/">
                      <i className="mi-home size-16 me-1"></i>
                      <span>{t("home")}</span>
                      <i className="mi-chevron-right size-16 ms-1 mt-1"></i>
                    </Link>
                  </div>
                  {anotherLink && (
                    <div className="d-inline-flex align-items-center me-3">
                      <Link href={anotherLink}>
                        <i className="mi-grid size-16 me-1"></i>
                        <span>{t(anotherLinkName)}</span>
                        <i className="mi-chevron-right size-16 ms-1 mt-1"></i>
                      </Link>
                    </div>
                  )}
                  <div className="d-inline-block me-3">
                    <span>{anotherLink ? title : t(title)}</span>
                  </div>
                </div>
                {/* <!-- End Author, Categories, Comments --> */}
              </div>
              {/* End Page Title */}
            </div>
          </div>
          {/* End Section Content */}
        </div>
      </ParallaxContainer>
    </section>
  );
};
