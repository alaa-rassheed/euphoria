import { BreadCrumb } from "@/components/breadcrumb";
import PortfolioMassonry2 from "@/components/portfolio/PortfolioMassonry2";
import fetchData from "@/utils/api/get-data";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const data = await fetchData("get-projects", locale);

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
      canonical: "https://euphoria-egypt.vercel.app/projects",
      languages: {
        "en-US": "https://euphoria-egypt.vercel.app/projects",
        "ar-EG": "https://euphoria-egypt.vercel.app/ar/projects",
      },
    },
  };
}

export default async function ProjectsPage({ params: { locale } }) {
  const data = await fetchData("get-projects", locale);

  return (
    <div>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data?.seo?.schema),
        }}
      />
      <BreadCrumb title="projects" locale={locale} />

      <section className="page-section bg-dark-1 light-content">
        <PortfolioMassonry2 data={data?.categories} />
      </section>
    </div>
  );
}
