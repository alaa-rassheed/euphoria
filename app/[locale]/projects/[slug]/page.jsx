import { BreadCrumb } from "@/components/breadcrumb";
import RelatedProject10 from "@/components/portfolio/relatedProjects/RelatedProject10";
import fetchData from "@/utils/api/get-data";
import Image from "next/image";
import Script from "next/script";

import React from "react";

export async function generateMetadata({ params }) {
  const data = await fetchData(`project/${params?.slug}`, params?.locale);

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
      canonical: `https://euphoria-egypt.vercel.app/projects/${data?.seo?.metaTags?.canonical}`,
      languages: {
        "en-US": `https://euphoria-egypt.vercel.app/projects/${data?.seo?.metaTags?.canonical}`,
        "ar-EG": `https://euphoria-egypt.vercel.app/ar/projects/${data?.seo?.metaTags?.canonical}`,
      },
    },
  };
}

export default async function ProjectDetails({ params }) {
  const data = await fetchData(`project/${params?.slug}`, params?.locale);

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data?.seo?.schema),
        }}
      />
      <BreadCrumb
        title={data?.project?.name}
        anotherLink="/projects"
        anotherLinkName="projects"
        locale={params?.locale}
      />
      {/* Section */}
      <section className="page-section bg-dark-1 light-content">
        <div className="container position-relative">
          <div className="row">
            {/* Project Details */}
            <div className="col-md-4 mb-sm-40 wow fadeInUp">
              <div className="block-sticky">
                <h2 className="h3 mb-20">Project Details</h2>
                <hr className="mb-20" />
                <div className="row text-gray small">
                  <div className="col-sm-4">
                    <b>Date:</b>
                  </div>
                  <div className="col-sm-8">May 1th, 2023</div>
                </div>
                <hr className="mb-20" />
                <div className="row text-gray small">
                  <div className="col-sm-4">
                    <b>Client:</b>
                  </div>
                  <div className="col-sm-8">Envato Users</div>
                </div>
                <hr className="mb-20" />
                <div className="row text-gray small">
                  <div className="col-sm-4">
                    <b>Services:</b>
                  </div>
                  <div className="col-sm-8">
                    Branding, UI/UX Design, Front-end Development, Back-end
                    Development
                  </div>
                </div>
                <hr className="mb-20" />
                <div className="text-gray small">
                  <div>
                    <b>Description:</b>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet conseur adipisci inerene.
                    Maecenas volutpat, diam eni sagittis quam porta quam. Sed id
                    dolor consectetur fermentum volutpat accumsan purus iaculis
                    libero.
                  </div>
                </div>
                <hr className="mb-20" />
              </div>
            </div>
            {/* End Project Details */}
            <div className="col-md-8">
              <div className="mb-n30">
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src={data?.project?.image}
                    alt={data?.project?.img_alt}
                    width={1350}
                    height={865}
                  />
                </div>
                {data?.project?.images?.map((item, index) => (
                  <div key={index} className="mb-30 wow fadeInUp">
                    <Image
                      src={item?.image}
                      alt={item?.img_alt}
                      width={1350}
                      height={865}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Section */}
      {/* Divider */}
      <hr className="mt-0 mb-0 white" />
      {/* End Divider */}
      {/* Section */}
      <section className="page-section bg-dark-1 light-content">
        <RelatedProject10 related={data?.relatedProject} />
      </section>
      {/* End Section */}
    </>
  );
}
