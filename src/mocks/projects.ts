import { Skill } from "@/types/carousel.types";

export const getPortfolioData = (t: (key: string) => string): Skill[] => [
  {
    id: "1",
    name: t("carousel.project1.name"),
    title: t("carousel.project1.title"),
    softSkills: t("carousel.project1.softSkills").split(","),
    hardSkills: t("carousel.project1.hardSkills").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project1.name")
  },
  {
    id: "2",
    name: t("carousel.project2.name"),
    title: t("carousel.project2.title"),
    softSkills: t("carousel.project2.softSkills").split(","),
    hardSkills: t("carousel.project2.hardSkills").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project2.name")
  },
  {
    id: "3",
    name: t("carousel.project3.name"),
    title: t("carousel.project3.title"),
    softSkills: t("carousel.project3.softSkills").split(","),
    hardSkills: t("carousel.project3.hardSkills").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project3.name")
  },
  {
    id: "4",
    name: t("carousel.project4.name"),
    title: t("carousel.project4.title"),
    softSkills: t("carousel.project4.softSkills").split(","),
    hardSkills: t("carousel.project4.hardSkills").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project4.name")
  },
  {
    id: "5",
    name: t("carousel.project5.name"),
    title: t("carousel.project5.title"),
    softSkills: t("carousel.project5.softSkills").split(","),
    hardSkills: t("carousel.project5.hardSkills").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project5.name")
  },
  {
    id: "6",
    name: t("carousel.project6.name"),
    title: t("carousel.project6.title"),
    softSkills: t("carousel.project6.softSkills").split(","),
    hardSkills: t("carousel.project6.hardSkills").split(","),
    imageSrc: "/images.jpg",
    altText: t("carousel.project5.name")
  }
];
