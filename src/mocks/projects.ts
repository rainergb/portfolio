import { Skill } from "@/types/carousel.types";

export const getPortfolioData = (t: (key: string) => string): Skill[] => [
  {
    id: "1",
    name: t("carousel.project1.name"),
    title: t("carousel.project1.title"),
    badges: t("carousel.project1.badges").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project1.name"),
  },
  {
    id: "2",
    name: t("carousel.project2.name"),
    title: t("carousel.project2.title"),
    badges: t("carousel.project2.badges").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project2.name"),
  },
  {
    id: "3",
    name: t("carousel.project3.name"),
    title: t("carousel.project3.title"),
    badges: t("carousel.project3.badges").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project3.name"),
  },
  {
    id: "4",
    name: t("carousel.project4.name"),
    title: t("carousel.project4.title"),
    badges: t("carousel.project4.badges").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project4.name"),
  },
  {
    id: "5",
    name: t("carousel.project5.name"),
    title: t("carousel.project5.title"),
    badges: t("carousel.project5.badges").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project5.name"),
  },
  {
    id: "6",
    name: t("carousel.project6.name"),
    title: t("carousel.project6.title"),
    badges: t("carousel.project6.badges").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project5.name"),
  },
];
