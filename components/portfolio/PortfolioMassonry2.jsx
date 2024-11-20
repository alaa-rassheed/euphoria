"use client";

import Image from "next/image";
import { Link } from "@/i18n.config";
import React, { useEffect, useRef, useState } from "react";
import { Gallery } from "react-photoswipe-gallery";

export default function PortfolioMassonry2({ data }) {
  const isotopContainer = useRef();

  const [currentCategory, setCurrentCategory] = useState("Launching-ar");
  const [filtered, setFiltered] = useState(data);
  useEffect(() => {
    setFiltered(data?.filter((elm) => elm.link == currentCategory));
  }, [currentCategory]);

  return (
    <div className="container">
      {/* Works Filter */}
      <div className="works-filter text-center mb-60 mb-sm-40 z-index-1">
        {data.map((elm, i) => (
          <a
            onClick={() => setCurrentCategory(elm.link)}
            key={i}
            className={`filter ${currentCategory == elm?.link ? "active" : ""}`}
          >
            {elm?.name}
          </a>
        ))}
      </div>
      {/* End Works Filter */}

      {/* Works Grid */}
      <ul
        ref={isotopContainer}
        className="works-grid work-grid-2 work-grid-gut-lg masonry"
        id="work-grid"
      >
        {/* Work Item (Lightbox) */}
        <Gallery>
          {filtered[0]?.projects?.map((item, index) => (
            <li key={index} className={`${index % 2 ? "mt-50" : "mt-120"}`}>
              <Link href={`/projects/${item?.link}`}>
                <div className="work-img">
                  <div className="work-img-bg " />
                  <Image
                    width={650}
                    height={773}
                    src={item?.image}
                    alt={item?.alt_img}
                    data-wow-delay={`0.${index}`}
                  />
                </div>
                <div className="work-intro text-start">
                  <h3 className="work-title">{item?.name}</h3>
                  <div
                    className="work-descr"
                    dangerouslySetInnerHTML={{ __html: item?.text }}
                  ></div>
                </div>
              </Link>
            </li>
          ))}
        </Gallery>
        {/* End Work Item */}
      </ul>
      {/* End Works Grid */}
    </div>
  );
}
