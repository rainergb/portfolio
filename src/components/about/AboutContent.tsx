"use client";
import { AboutContentProps } from "@/types/about.types";
import ProfileCard from "@/components/profile-card/profile-card";
import { AboutText } from "./AboutText";

export function AboutContent({
  avatarUrl,
  name,
  title,
  handle,
  status,
  contactText,
  textContent,
  onContactClick
}: AboutContentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-8">
      <div className="flex justify-center lg:justify-start">
        <ProfileCard
          avatarUrl={avatarUrl}
          grainUrl="/grain.jpg"
          behindGlowEnabled={true}
          name={name}
          title={title}
          handle={handle}
          status={status}
          contactText={contactText}
          showUserInfo={true}
          onContactClick={onContactClick}
        />
      </div>
      <div className="flex items-center">
        <AboutText content={textContent} />
      </div>
    </div>
  );
}
