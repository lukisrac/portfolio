"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../language-switcher/language-switcher";
import { Navigation } from "../navigation/navigation";
import { NavigationMobileToggler } from "../navigation/navigation-mobile-toggler";

interface Props {
    locale: string;
}

export function Header(props: Props) {
    const t = useTranslations();

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    return (
        <header className="flex h-[--header-height] shrink-0 border-b border-primary max-lg:px-[18px] lg:grid lg:grid-cols-[minmax(auto,_312px)_auto_auto]">
            <Link
                className="flex items-center border-primary lg:border-r lg:px-[22px]"
                href="/"
            >
                {t("HomePage.logo")}
            </Link>
            <Navigation />
            <NavigationMobileToggler
                isNavigationOpen={isNavigationOpen}
                locale={props.locale}
                setIsNavigationOpen={setIsNavigationOpen}
            />
            <LanguageSwitcher
                className="ml-auto max-lg:hidden"
                locale={props.locale}
                setIsNavigationOpen={setIsNavigationOpen}
            />
        </header>
    );
}
