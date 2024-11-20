import { BreadCrumb } from "@/components/breadcrumb";
import Contact from "@/components/homes/home-1/Contact";
import fetchData from "@/utils/api/get-data";
import { Toaster } from "react-hot-toast";

export async function generateMetadata({ params: { locale } }) {
  const data = await fetchData("contact-us", locale);

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
      canonical: "https://euphoria-egypt.vercel.app/contact",
      languages: {
        "en-US": "https://euphoria-egypt.vercel.app/contact",
        "ar-EG": "https://euphoria-egypt.vercel.app/ar/contact",
      },
    },
  };
}

export default async function ContactPage({ dark = true, params: { locale } }) {
  const data = await fetchData("contact-us", locale);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BreadCrumb title="contact_us" locale={locale} />

      <section
        className={`page-section scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact data={data} />
      </section>
    </>
  );
}
