import { StaticImageData } from "next/image";
import { TECHNOLOGIES } from "./constants";

export type Technology = (typeof TECHNOLOGIES)[number];

export type Project = {
    description: string;
    id: number;
    image: string | StaticImageData;
    link: string;
    released: string;
    technologies: Technology[];
    title: string;
    type: "web" | "app";
};
