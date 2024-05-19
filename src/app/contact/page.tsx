import React from "react";
import Image from "next/image";
import ContactForm from "@components/form";

export default function Contact() {
  return (
    <main className="w-full relative flex flex-row justify-end bg-main">
      {/* image */}
      <div className="fixed w-[50%] h-screen top-0 left-0 self-start">
        <Image
          src="/images/thinker.webp"
          alt="side image"
          width={3240}
          height={4050}
          priority
          className="object-cover h-full"
        />

        <div className="absolute left-[80px] bottom-lg">
          <p className="font-medium text-[64px] leading-[96px] text-white">Let&#39;s collaborate</p>

          <div className="flex mt-sm ">
            <p className="font-light text-base text-white">
              © 2023 Nano Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-[50%] bg-main pt-[240px] pl-[60px]">
        <ContactForm />
      </div>
    </main>
  );
}
