import { BreadCrumb } from "@/components/breadcrumb";
import Blog from "@/components/homes/home-1/Blog";
import fetchData from "@/utils/api/get-data";
import { getTranslations } from "next-intl/server";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const data = await fetchData("get-blogs", locale);

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
      canonical: "https://euphoria-egypt.vercel.app/articles",
      languages: {
        "en-US": "https://euphoria-egypt.vercel.app/articles",
        "ar-EG": "https://euphoria-egypt.vercel.app/ar/articles",
      },
    },
  };
}
export default async function ArticlesPage({
  dark = true,
  params: { locale },
}) {
  const data = await fetchData("get-blogs", locale);

  const t = await getTranslations("common");
  return (
    <div>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data?.seo?.schema),
        }}
      />
      <BreadCrumb title="articles" locale={locale} />

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-md-80">
              <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                <span className="text-outline-2">{t("articles")}</span>
                <span className="text-outline-1">{t("articles")}</span>
                <span className="text-outline">{t("articles")}</span>
              </h2>
              <p className="section-text mb-60 mb-md-40 mb-sm-30">
                <span className="section-title-inline">Where?</span> Check the
                latest articles about our company in our blog. Discover the
                methods of&nbsp;creativity and technology.
              </p>
            </div>
          </div>
          <Blog hideButton={true} allBlogs={data?.blogs} />
        </div>
      </section>
    </div>
  );
}
