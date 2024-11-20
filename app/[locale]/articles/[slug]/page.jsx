import { BreadCrumb } from "@/components/breadcrumb";
import fetchData from "@/utils/api/get-data";
import Image from "next/image";
import Script from "next/script";
import React from "react";

export async function generateMetadata({ params }) {
  const data = await fetchData(`blog/${params?.slug}`, params?.locale);

  return {
    title: data?.seo?.metaTags?.title,
    description: data?.seo?.metaTags?.description,
    other: { title: data?.seo?.metaTags?.meta_title },
    icons: {
      icon: data?.seo?.metaTags?.image,
    },
    robots: { index: true },
    authors: [{ name: data?.seo?.metaTags?.author }],
    alternates: {
      canonical: `https://euphoria-egypt.vercel.app/articles/${data?.seo?.metaTags?.canonical}`,
      languages: {
        "en-US": `https://euphoria-egypt.vercel.app/articles/${data?.seo?.metaTags?.canonical}`,
        "ar-EG": `https://euphoria-egypt.vercel.app/ar/articles/${data?.seo?.metaTags?.canonical}`,
      },
    },
  };
}
export default async function BlogDetails({ params }) {
  const data = await fetchData(`blog/${params?.slug}`, params?.locale);

  return (
    <div>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data?.seo?.schema),
        }}
      />
      <BreadCrumb
        title={data?.blog?.title}
        anotherLink="/articles"
        anotherLinkName="articles"
        locale={params?.locale}
      />

      <section className="page-section bg-dark-1 light-content">
        <>
          {/* Section */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container relative">
              <div className="row">
                {/* Content */}
                <div className="col-lg-8 offset-lg-2">
                  {/* Post */}
                  <div className="blog-item mb-80 mb-xs-40">
                    <div className="blog-item-body">
                      {/* Media Gallery */}
                      <div className="blog-media mb-40 mb-xs-30">
                        <Image
                          src={data?.blog?.image}
                          alt={data?.blog?.alt_img}
                          width={1350}
                          height={650}
                        />
                      </div>
                      <h1>{data?.blog?.title}</h1>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.blog?.text,
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* End Post */}
                </div>
                {/* End Content */}
              </div>
            </div>
          </section>
        </>
      </section>
    </div>
  );
}
