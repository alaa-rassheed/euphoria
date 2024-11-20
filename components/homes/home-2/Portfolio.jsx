"use client";
import React, { useEffect, useState, useTransition } from "react";

import Image from "next/image";
import { Link } from "@/i18n.config";
import { useTranslations } from "next-intl";

export default function Portfolio({ desc, data }) {
  const [currentCategory, setCurrentCategory] = useState("Launching-ar");
  const [filtered, setFiltered] = useState(data);
  useEffect(() => {
    setFiltered(data?.filter((elm) => elm.link == currentCategory));
  }, [currentCategory]);
  const t = useTranslations("common");
  return (
    <div className="container">
      <div className="row mb-90 mb-md-40">
        <div className="col-lg-5 mb-md-30">
          {desc ? (
            <p className="section-text mb-0">
              <span className="section-title-inline">Hey!</span> Explore
              cutting-edge solutions that elevate brands and engage audiences.
            </p>
          ) : (
            <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-0">
              <span className="text-outline">{t("projects")}</span>
            </h2>
          )}
        </div>
        <div className="col-lg-7 pb-20 pb-md-0 d-flex align-items-end">
          {/* Works Filter */}
          <div className="works-filter works-filter-bold text-start text-lg-end w-100">
            {data.map((elm, i) => (
              <a
                onClick={() => setCurrentCategory(elm.link)}
                key={i}
                className={`filter ${
                  currentCategory == elm.link ? "active" : ""
                }`}
              >
                {elm.name}
              </a>
            ))}
          </div>
          {/* End Works Filter */}
        </div>
      </div>
      {/* Portfolio Grid */}
      <div id="isotope" className="mb-n100 mb-sm-n50">
        {/* Portfolio Item */}
        {filtered[0]?.projects?.map((item, index) => (
          <div key={index} className={`portfolio-2-item mb-100 mb-sm-50 mix `}>
            <div className="row">
              {!(index % 2) ? (
                <>
                  <div className="col-md-8 mb-sm-30 order-md-first">
                    <div className="portfolio-2-image">
                      <Link href={`/projects/${item?.link}`}>
                        <Image
                          width={1200}
                          height={819}
                          src={item?.image}
                          alt={item?.img_alt}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className={`col-md-4  `}>
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      <Link href={`/projects/${item?.link}`}>{item?.name}</Link>
                    </h3>
                    <div
                      className="portfolio-2-descr"
                      dangerouslySetInnerHTML={{ __html: item?.text }}
                    ></div>
                    <div>
                      <Link
                        href={`/projects/${item?.link}`}
                        className="link-hover-anim underline align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          {t("view_project")}
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          {t("view_project")}
                        </span>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`col-md-4`}>
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      <Link href={`/projects/${item?.link}`}>{item?.name}</Link>
                    </h3>
                    <div
                      className="portfolio-2-descr"
                      dangerouslySetInnerHTML={{ __html: item?.text }}
                    ></div>
                    <div>
                      <Link
                        href={`/projects/${item?.link}`}
                        className="link-hover-anim underline align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          {t("view_project")}
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          {t("view_project")}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`col-md-8 mb-sm-30 ${
                      index % 2 ? "order-first order-md-last" : ""
                    } `}
                  >
                    <div className="portfolio-2-image">
                      <Link href={`/projects/${item?.link}`}>
                        <Image
                          width={1200}
                          height={819}
                          src={item?.image}
                          alt={item?.img_alt}
                        />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        {/* End Portfolio Item */}
      </div>
      {/* End Portfolio Grid */}
    </div>
  );
}
