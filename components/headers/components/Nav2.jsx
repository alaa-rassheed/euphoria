"use client";

import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";

import { Link } from "@/i18n.config";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Nav2({ links }) {
  const [menuOpen, setMenuOpen] = useState([-1, -1]);

  const toggleParent1 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[0] == i) {
      tempMenuOpen[0] = -1;
    } else {
      tempMenuOpen[0] = i;
    }
    setMenuOpen(tempMenuOpen);
  };
  const toggleParent2 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[1] == i) {
      tempMenuOpen[1] = -1;
    } else {
      tempMenuOpen[1] = i;
    }
    setMenuOpen(tempMenuOpen);
  };
  const pathname = usePathname();
  useEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);
    init_classic_menu_resize();
    // window.addEventListener("scroll", addScrollspy);

    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      // window.removeEventListener("scroll", addScrollspy);
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);

  return (
    <>
      {links?.map((item, index) =>
        item?.subMenu ? (
          <li className={menuOpen[0] == index ? "js-opened" : ""} key={index}>
            {item.subMenu && (
              <Link
                href={item.href}
                onClick={() => toggleParent1(index)}
                className={`mn-has-sub ${
                  item.subMenu.some((e1) =>
                    e1.links.some(
                      (e2) => e2.href.split("/")[1] == pathname.split("/")[1]
                    )
                  )
                    ? "active"
                    : ""
                }`}
              >
                {item.title} <i className="mi-chevron-down" />
              </Link>
            )}
            <ul
              className={`mn-sub mn-has-multi ${
                menuOpen[0] == index ? "mobile-sub-active" : ""
              } `}
            >
              {item.subMenu &&
                item.subMenu.map((subItem, subIndex) => (
                  <li className="mn-sub-multi" key={subIndex}>
                    {subItem.title && (
                      <span className="mn-group-title">{subItem.title}</span>
                    )}
                    <ul>
                      {subItem.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={`${item?.href}/${link.href}`}>
                            {link.icon && <i className={link.icon} />}{" "}
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </li>
        ) : (
          <li className={menuOpen[0] == index ? "js-opened" : ""} key={index}>
            <Link href={item?.href}>{item?.title}</Link>
          </li>
        )
      )}
    </>
  );
}
