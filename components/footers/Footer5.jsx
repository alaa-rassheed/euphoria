import { socialMediaLinks } from "@/data/footer";
import Image from "next/image";
import { Link } from "@/i18n.config";
import React from "react";

export default function Footer5() {
  return (
    <div className="container position-relative text-center pt-140 pb-80 pb-sm-50">
      {/* Scroll Up */}
      <div className="local-scroll link-to-top-2-wrap">
        <a href="#top" className="link-to-top-2">
          Back to top
        </a>
      </div>
      {/* End Scroll Up */}
      {/* Social Links */}
      <div className="d-flex align-items-center justify-content-center mb-60">
        <Link href={"/"} className="mb-30">
          <Image
            src="/assets/images/logo.png"
            width={210}
            height={68}
            className="light-mode-logo"
            alt="Your Company Logo"
          />

          <Image
            src="/assets/images/logo.png"
            width={210}
            height={68}
            className="dark-mode-logo"
            alt="Your Company Logo"
          />
        </Link>
      </div>
      <div className="footer-social-links mb-60">
        {socialMediaLinks.map((elm, i) => (
          <a
            href={elm.href}
            key={i}
            title="Facebook"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="visually-hidden">{elm.name}</span>
            <i className={elm.iconClass} />
          </a>
        ))}
      </div>
      {/* End Social Links */}
      {/* Footer Text */}
      <div className="footer-text">
        {/* Copyright */}
        <div>
          <b>
            All Rights Reserved Euphoria, Developed And Designed By Be Group.
          </b>
          .
        </div>
        {/* End Copyright */}
      </div>
      {/* End Footer Text */}
    </div>
  );
}
