"use client";
import { AboutMeProps } from "@/types/about.types";
import { AboutTitle } from "@/components/about/AboutTitle";
import { AboutContent } from "@/components/about/AboutContent";

export function AboutMe({
  title,
  subtitle,
  avatarUrl,
  name,
  jobTitle,
  handle,
  status,
  contactText,
  description,
  onContactClick
}: AboutMeProps) {
  return (
    <section className="relative bg-background py-20 transition-colors duration-300">
      <div className="relative z-10 w-full">
        <AboutTitle title={title} subtitle={subtitle} />
        <AboutContent
          avatarUrl={avatarUrl}
          name={name}
          title={jobTitle}
          handle={handle}
          status={status}
          contactText={contactText}
          textContent={description}
          onContactClick={onContactClick}
        />
      </div>
    </section>
  );
}
