import testImage from "@/public/projects/test.jpg";
import { Project } from "./types";

export const TECHNOLOGIES = [
    "html",
    "css",
    "sass",
    "tailwind",
    "javascript",
    "jquery",
    "typescript",
    "react",
    "nextjs",
    "angular",
    "graphql",
    "restapi",
] as const;

export const PROJECTS: Project[] = [
    {
        description: "Duis aute irure dolor in velit esse cillum dolore.",
        id: 1,
        image: testImage,
        link: "",
        released: "",
        technologies: ["react", "nextjs", "typescript", "tailwind", "graphql"],
        title: "Můj dům krok za krokem",
        type: "web",
    },
    {
        description: "Duis aute irure dolor in velit esse cillum dolore.",
        id: 2,
        image: testImage,
        link: "https://www.uxf.cz/reference/atrea",
        released: "2023-09",
        technologies: ["react", "nextjs", "typescript", "tailwind", "graphql"],
        title: "Atrea Intranet",
        type: "app",
    },
    {
        description: "Duis aute irure dolor in velit esse cillum dolore.",
        id: 3,
        image: testImage,
        link: "https://www.uxf.cz/reference/atrea",
        released: "2023-09",
        technologies: ["react", "nextjs", "typescript", "tailwind", "graphql"],
        title: "Lorem Ipsum",
        type: "app",
    },
    {
        description: "Duis aute irure dolor in velit esse cillum dolore.",
        id: 4,
        image: testImage,
        link: "",
        released: "",
        technologies: ["typescript", "tailwind"],
        title: "Lorem Ipsum",
        type: "web",
    },
    {
        description: "Duis aute irure dolor in velit esse cillum dolore.",
        id: 5,
        image: testImage,
        link: "https://www.uxf.cz/reference/atrea",
        released: "2023-09",
        technologies: ["html", "css", "javascript"],
        title: "Lorem Ipsum",
        type: "app",
    },
];
