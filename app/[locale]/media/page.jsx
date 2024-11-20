import { BreadCrumb } from "@/components/breadcrumb";
import PortfolioMassonry3 from "@/components/portfolio/PortfolioMassonry3";
import fetchData from "@/utils/api/get-data";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const data = await fetchData("albums", locale);

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
      canonical: "https://euphoria-egypt.vercel.app/media",
      languages: {
        "en-US": "https://euphoria-egypt.vercel.app/media",
        "ar-EG": "https://euphoria-egypt.vercel.app/ar/media",
      },
    },
  };
}

export default async function Media({ params: { locale } }) {
  const data = await fetchData("albums", locale);

  return (
    <>
      <BreadCrumb title="media" locale={locale} />
      {/* Section */}
      <section className="page-section bg-dark-1 light-content">
        <PortfolioMassonry3 data={data?.albums} />
      </section>
      {/* End Section */}
    </>
  );
}
