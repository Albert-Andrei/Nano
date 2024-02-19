import React from "react";
import Image from "next/image";
import ContactForm from "@components/form";

export default function Contact() {
  return (
    <main className="relative flex flex-row overflow-auto max-h-screen">
      {/* image */}
      <div className="sticky w-[50%] h-screen top-0  self-start">
        <Image
          src="/images/thinker.webp"
          alt="side image"
          width={3240}
          height={4050}
          priority
          className="object-cover h-full"
        />
      </div>

      {/* Content */}
      <div className="w-[50%] bg-main pt-[240px]">
        <ContactForm />
      </div>
    </main>
  );
}
