import Home2 from "@/components/homes/home-2";
import Hero2 from "@/components/homes/home-2/heros/Hero2";
import fetchData from "@/utils/api/get-data";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const data = await fetchData("get-home", locale);

  return {
    title: data?.seo?.metaTags?.meta_title,
    description: data?.seo?.metaTags?.description,
    other: { title: data?.seo?.metaTags?.meta_title },
    icons: {
      icon: data?.seo?.metaTags?.image,
    },
    robots: { index: true },
    authors: [{ name: data?.seo?.metaTags?.author }],
    alternates: {
      canonical: "https://euphoria-egypt.vercel.app/",
      languages: {
        "en-US": "https://euphoria-egypt.vercel.app/",
        "ar-EG": "https://euphoria-egypt.vercel.app/ar",
      },
    },
  };
}
export default async function Home2TypedTextMultiPageDark({
  params: { locale },
}) {
  const data = await fetchData("get-home", locale);

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data?.seo?.schema),
        }}
      />

      <main id="main">
        <section
          className="home-section bg-dark-1 light-content parallax-mousemove-scene scrollSpysection"
          id="home"
        >
          <Hero2 dark mainSlider={data?.mainSlider} />
        </section>
        <Home2 dark data={data} locale={locale} />
      </main>
    </>
  );
}
