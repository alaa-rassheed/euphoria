import { BreadCrumb } from "@/components/breadcrumb";
import fetchData from "@/utils/api/get-data";
import Image from "next/image";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const data = await fetchData("get-about", locale);

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
      canonical: "https://euphoria-egypt.vercel.app/about",
      languages: {
        "en-US": "https://euphoria-egypt.vercel.app/about",
        "ar-EG": "https://euphoria-egypt.vercel.app/ar/about",
      },
    },
  };
}

export default async function AboutPage({ dark = true, params: { locale } }) {
  const data = await fetchData("get-about", locale);

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data?.seo?.schema),
        }}
      />
      <BreadCrumb title="about_us" locale={locale} />
      <section
        className={`page-section  scrollSpysection  pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-last order-md-first">
              <div className="overflow-hidden">
                <Image
                  width={800}
                  height={1095}
                  src={data?.[`about-info`]?.image}
                  className="w-100 wow scaleOutIn"
                  alt={data?.[`about-info`]?.alt_img}
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 d-flex align-items-center mb-sm-80">
              <div className="wow fadeInUp">
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    {data?.[`about-info`]?.title}
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    {data?.[`about-info`]?.title}
                  </span>
                  <span className="text-outline">
                    {data?.[`about-info`]?.title}
                  </span>
                </h2>
                <div
                  className="section-text mb-60 mb-md-40 mb-sm-30"
                  dangerouslySetInnerHTML={{
                    __html: data?.[`about-info`]?.text,
                  }}
                ></div>
              </div>
            </div>

            {data?.aboutStrucs?.map((item) => (
              <div key={item?.id} className="col-md-6  mt-5">
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    {item?.title}
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    {item?.title}
                  </span>
                  <span className="text-outline">{item?.title}</span>
                </h2>
                <div
                  className="text-gray"
                  dangerouslySetInnerHTML={{ __html: item?.text }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
