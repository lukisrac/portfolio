import { useTranslations } from "next-intl";

export type MenuItem = {
    folder?: string;
    href: string;
    label: string;
};

export type FolderType = {
    color: string;
    folder: string;
    label: string;
};

export type MenuItems = {
    [key: string]: {
        foldres?: FolderType[];
        menuItems: MenuItem[];
        title: string;
    };
};

export function usePageMenu(): MenuItems {
    const t = useTranslations();

    return {
        "/about/personal-info": {
            foldres: [
                {
                    color: "#E99287",
                    folder: "bio",
                    label: t("AboutPage.left-menu.folder.bio.title"),
                },
                {
                    color: "#4D5BCE",
                    folder: "education",
                    label: t("AboutPage.left-menu.folder.education.title"),
                },
            ],
            menuItems: [
                {
                    folder: "bio",
                    href: "/about/personal-info/me",
                    label: t("AboutPage.left-menu.folder.bio.files.me"),
                },
                {
                    folder: "education",
                    href: "/about/personal-info/high-school",
                    label: t(
                        "AboutPage.left-menu.folder.education.files.high-school",
                    ),
                },
                {
                    folder: "education",
                    href: "/about/personal-info/university",
                    label: t(
                        "AboutPage.left-menu.folder.education.files.university",
                    ),
                },
            ],
            title: t("AboutPage.left-menu.title"),
        },
        "/about/professional-info": {
            menuItems: [
                {
                    label: "Experience",
                    href: "/about/professional-info/experience",
                },
                {
                    label: "Education",
                    href: "/about/professional-info/education",
                },
                { label: "Skills", href: "/about/professional-info/skills" },
            ],
            title: "professional-info",
        },
        "/about/hobbies": {
            menuItems: [
                { label: "Sports", href: "/about/hobbies/sports" },
                { label: "Music", href: "/about/hobbies/music" },
                { label: "Travel", href: "/about/hobbies/travel" },
            ],
            title: "hobbies",
        },
    };
}
