import Tag from "@components/tag";
import Image from "next/image";
import React, { FC } from "react";

type CardProps = {
  image: string;
  title: string;
  date: string;
  progress: string;
  type: string;
  config?: {
    priority?: boolean;
    quality?: number;
  };
};

export const Card: FC<CardProps> = ({
  image,
  title,
  date,
  progress,
  type,
  config = {
    priority: false,
    quality: 100,
  },
}) => {
  return (
    // w-[400px] h-[500px]
    <div className="relative shrink-0">
      <div className="z-10 absolute top-6 left-6">
        <p className="uppercase text-white text-[24px] font-medium">{title}</p>
        <p className="lowercase text-white text-[12px] font-light">{type}</p>
      </div>

      <Image
        src={image}
        alt="project image"
        // fill
        width={400}
        height={500}
        priority={config.priority}
        quality={config.quality}
        className="object-cover rounded-[20px]"
      />

      <div className="z-10 absolute bottom-6 left-6 right-6 flex justify-between">
        <Tag
          text={progress}
          textStyle="text-white uppercase text-[12px] px-[16px] py-[9px]"
          containerStyle="bg-black "
        />
        <Tag
          text={date}
          textStyle="text-white text-[12px] px-[16px] py-[9px]"
          containerStyle="bg-black"
        />
      </div>
    </div>
  );
};
