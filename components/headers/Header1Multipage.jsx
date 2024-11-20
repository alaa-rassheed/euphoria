"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import { Link } from "@/i18n.config";
import React, { useEffect, useState } from "react";
import Nav2 from "./components/Nav2";
import { useQuery } from "@tanstack/react-query";
import fetchClient from "@/utils/api/get-data-client";
import LanguageSelect from "./components/LanguageSelect";
import { useTranslations } from "next-intl";

export default function Header1Multipage({ locale }) {
  const [menuItemsDark, setMenuItemsDark] = useState();
  const t = useTranslations("common");
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetchClient("configration", locale),
    queryKey: ["configration", locale], //Array according to Documentation
  });
  const { data: projects } = useQuery({
    queryFn: async () => await fetchClient("get-projects", locale),
    queryKey: ["get-projects", locale], //Array according to Documentation
  });
  useEffect(() => {
    if (projects) {
      setMenuItemsDark([
        {
          title: t("home"),
          href: "/",
        },
        {
          title: t("about_us"),
          href: "/about",
        },
        {
          title: t("projects"),
          href: "/projects",
          subMenu: [
            {
              links: projects?.categories?.map((item) => ({
                href: "",
                text: item?.name,
              })),
            },
          ],
        },
        {
          title: t("articles"),
          href: "/articles",
        },
        {
          title: t("media"),
          href: "/media",
        },
        {
          title: t("contact_us"),
          href: "/contact",
        },
      ]);
    } else setMenuItemsDark([]);
  }, [projects]);

  return (
    <div className="main-nav-sub full-wrapper">
      <div className="nav-logo-wrap local-scroll">
        <Link href={`/`} className="logo">
          <Image
            src={data?.configration?.app_logo || "/assets/logo.png"}
            alt={data?.configration?.app_name}
            width={100}
            height={240}
            className="light-mode-logo"
          />
          <Image
            src={data?.configration?.app_logo || "/assets/logo.png"}
            alt={data?.configration?.app_name}
            width={100}
            height={240}
            className="dark-mode-logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">{t("menu")}</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist local-scroll">
          {/* Item With Sub */}
          <Nav2 links={menuItemsDark} />
          {/* End Item With Sub */}
        </ul>
        <ul className="items-end clearlist">
          {/* Languages */}
          <LanguageSelect locale={locale} />
          {/* End Languages */}
          <li>
            <Link href="/contact" className="opacity-1 no-hover">
              <span className="link-hover-anim underline" data-link-animate="y">
                <span className="link-strong link-strong-unhovered">
                  {t("let_work")}
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  {t("let_work")}
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
