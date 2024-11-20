import { useTranslations } from "next-intl";
import React from "react";

export default function Experience({ data }) {
  const t = useTranslations("common");

  return (
    <div className="container">
      <div className="pt-40 pb-40 pt-md-0 pb-md-0 row">
        <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30 col-12 text-white">
          <span className="text-outline-2" aria-hidden="true">
            {t("partners")}
          </span>
          <span className="text-outline-1" aria-hidden="true">
            {t("partners")}
          </span>
          <span className="text-outline">{t("partners")}</span>
        </h2>
        {/* Marquee Text Line */}
        <div className="marquee marquee-style-2">
          <div className="marquee-track marquee-animation-1a">
            {data?.map((item) => (
              <div key={item?.id}>{item?.title}</div>
            ))}
            {/* <Image
                key={item?.id}
                src={item?.logo}
                alt={item?.title}
                width={150}
                height={120}
                style={{ display: "inline-block" }}
              /> */}
          </div>
        </div>
        {/* End Marquee Text Line */}
      </div>
    </div>
  );
}
