"use client";
import { socialLinks } from "@/data/footer";
import fetchClient from "@/utils/api/get-data-client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Link } from "@/i18n.config";
import React from "react";

export default function Footer2({ locale }) {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetchClient("configration", locale),
    queryKey: ["configration", locale], //Array according to Documentation
  });
  const { data: projects } = useQuery({
    queryFn: async () => await fetchClient("get-projects", locale),
    queryKey: ["get-projects", locale], //Array according to Documentation
  });
  const { data: setting } = useQuery({
    queryFn: async () => await fetchClient("setting", locale),
    queryKey: ["setting", locale], //Array according to Documentation
  });

  return (
    <div className="container">
      <div className="page-section">
        <div className="row">
          {/* Copyright */}
          <div className="col-lg-3 text-center text-lg-start mb-md-50">
            {/* © IB-Themes {new Date().getFullYear()}. */}
            <Link href={"/"} className="mb-30">
              <Image
                src={data?.configration?.footer_logo || "/assets/logo.png"}
                width={120}
                height={120}
                className="light-mode-logo"
                alt={data?.configration?.app_name}
              />

              <Image
                src={data?.configration?.footer_logo || "/assets/logo.png"}
                width={120}
                height={120}
                className="dark-mode-logo"
                alt={data?.configration?.app_name}
              />
            </Link>
          </div>
          {/* End Copyright */}
          {/* Social Links */}
          <div className="col-lg-6 fw-social-inline text-center mb-md-40">
            {projects?.categories?.map((elm, i) => (
              <div key={i} className="fw-social-inline-item">
                <Link
                  href="/projects"
                  // target="_blank"
                  rel="nofollow noopener"
                  className="link-hover-anim align-middle"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y mb-3">
                    <span className="btn-animate-y-1">{elm?.name}</span>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    {elm?.name}
                  </span>
                </Link>
              </div>
            ))}
            <div className="d-flex align-items-center justify-content-center">
              <a
                href={`mailto:${setting?.setting[0]?.email}`}
                className="link-hover-anim align-middle"
                data-link-animate="y"
              >
                <span className="link-strong link-strong-unhovered">
                  <i className="mi-email align-center me-2" />
                  {setting?.setting[0]?.email}
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  <i className="mi-email align-center me-2" />
                  {setting?.setting[0]?.email}
                </span>
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <a
                href={`tel:${setting?.setting[0]?.mobile}`}
                className="link-hover-anim align-middle"
                data-link-animate="y"
              >
                <span className="link-strong link-strong-unhovered">
                  <i className="mi-call align-center me-2" />
                  {setting?.setting[0]?.mobile}
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  <i className="mi-call align-center me-2" />
                  {setting?.setting[0]?.mobile}
                </span>
              </a>
            </div>
          </div>
          {/* End Social Links */}
          <div className="col-lg-3 text-center text-lg-end local-scroll">
            <a href="#top" className="fw-top-link">
              <span className="fw-top-link-underline">Back to top</span>
              <span className="icon ms-1">
                <i className="icon-arrow-up1 size-22" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="footer-text text-center mt-n10 pb-50">
        {/* <b>{data?.configration?.copy_rights_text}</b> */}
        <b>All Rights Reserved EUPHORIA, Developed And Designed By Be Group.</b>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
