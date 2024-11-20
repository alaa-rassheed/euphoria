"use client";

import { usePathname, useRouter } from "@/i18n.config";

export default function LanguageSelect({ locale }) {
  // State to manage dropdown visibility
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (selectedLocale) => {
    const newLocale = selectedLocale;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <li className="languageSelect">
      <a href="#" className="mn-has-sub opacity-1">
        {locale === "en" ? "English" : "العربية"}{" "}
        <i className={`mi-chevron-down`} />
      </a>

      <ul className="mn-sub to-left">
        <li>
          <a onClick={() => changeLocale("en")}>English</a>
        </li>
        <li>
          <a onClick={() => changeLocale("ar")}>العربية</a>
        </li>
      </ul>
    </li>
  );
}
