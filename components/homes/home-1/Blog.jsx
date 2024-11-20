import Image from "next/image";
import { Link } from "@/i18n.config";
import React from "react";

export default function Blog({ allBlogs }) {
  return (
    <div className="row mt-n50">
      {/* Post Item */}
      {allBlogs?.map((elm, i) => (
        <div
          key={i}
          className="post-prev col-md-6 col-lg-4 mt-50 wow fadeInLeft"
          data-wow-delay={`0.${i}`}
        >
          <div className="post-prev-container">
            <div className="post-prev-img">
              <Link href={`/articles/${elm?.link}`}>
                <Image
                  width={650}
                  height={412}
                  src={elm?.image}
                  alt={elm?.alt_img}
                />
              </Link>
            </div>
            <h4 className="post-prev-title line-clamp-1">
              <Link href={`/articles/${elm?.link}`}>{elm?.title}</Link>
            </h4>
            <div
              className="post-prev-text line-clamp-4"
              dangerouslySetInnerHTML={{ __html: elm?.text }}
            ></div>
            <div className="post-prev-info clearfix">
              <div className="float-end">
                <span>{elm?.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* End Post Item */}
      {/* Post Item */}

      {/* End Post Item */}
    </div>
  );
}
