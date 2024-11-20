"use client";

import Image from "next/image";

import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function PortfolioMassonry3({ data }) {
  // const isotopContainer = useRef();
  // const isotope = useRef();
  // const initIsotop = async () => {
  //   const Isotope = (await import("isotope-layout")).default;
  //   const imagesloaded = (await import("imagesloaded")).default;

  //   // Initialize Isotope in the mounted hook
  //   isotope.current = new Isotope(isotopContainer.current, {
  //     itemSelector: ".work-item",
  //     layoutMode: "masonry", // or 'fitRows', depending on your layout needs
  //   });
  //   imagesloaded(isotopContainer.current).on("progress", function () {
  //     // Trigger Isotope layout
  //     isotope.current.layout();
  //   });
  // };

  // useEffect(() => {
  //   initIsotop();
  // }, []);

  return (
    <div className="container">
      {/* Works Grid */}
      <ul
        // ref={isotopContainer}
        className="works-grid work-grid-3 work-grid-gut-lg masonry"
        id="work-grid"
      >
        {/* Work Item (Lightbox) */}
        <Gallery>
          {data?.map((item, index) => (
            <li
              key={index}
              className={`${!(index % 2) ? " mt-90 mt-md-0 px-5" : ""}`}
            >
              <a>
                <div className="work-img">
                  <div className="work-img-bg" />
                  <Item
                    original={item?.main_image}
                    thumbnail={item?.main_image}
                    width={650}
                    height={773}
                  >
                    {({ ref, open }) => (
                      <Image
                        width={650}
                        height={773}
                        ref={ref}
                        onClick={open}
                        src={item?.main_image}
                        alt={`image-${index}`}
                        data-wow-delay={`0.${index}`}
                        style={{ maxWidth: "650px", maxHeight: "773px" }}
                      />
                    )}
                  </Item>
                </div>
                <div className="work-intro text-start">
                  <h3 className="work-title">{item?.name}</h3>
                  <div
                    className="work-descr"
                    dangerouslySetInnerHTML={{ __html: item?.text }}
                  ></div>
                  {item?.images?.map((singleImage, index) => (
                    <div className="d-none" key={`single-image-${index}`}>
                      <Item
                        original={singleImage?.img}
                        thumbnail={singleImage?.img}
                        width={650}
                        height={773}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={650}
                            height={773}
                            ref={ref}
                            onClick={open}
                            src={singleImage?.img}
                            alt={`single-image-${index}`}
                          />
                        )}
                      </Item>
                    </div>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </Gallery>
        {/* End Work Item */}
      </ul>
      {/* End Works Grid */}
    </div>
  );
}
