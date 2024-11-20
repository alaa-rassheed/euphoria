"use client";
import Image from "next/image";
import { Link } from "@/i18n.config";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function RelatedProject10({ related }) {
  return (
    <div className="container relative">
      <div className="text-center mb-60 mb-sm-40">
        <h2 className="section-title-small">Related Projects</h2>
      </div>
      <Gallery>
        <ul className="works-grid work-grid-4 work-grid-gut hover-white work-grid-hover-alt">
          {related?.map((item, index) => (
            <li key={index} className={"work-item   "}>
              <Link href={`/projects/${item?.url}`} className={"work-ext-link"}>
                <div className="work-img">
                  <div className="work-img-bg " />
                  <Image
                    width={650}
                    height={773}
                    src={`/${item?.image}`}
                    alt={item?.img_alt}
                    data-wow-delay={`0.${index}`}
                  />
                </div>
                <div className="work-intro text-start">
                  <h3 className="work-title">{item?.[`name_en`]}</h3>
                  <div className="work-descr line-clamp-1">{item?.text_ar}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>{" "}
      </Gallery>
    </div>
  );
}
