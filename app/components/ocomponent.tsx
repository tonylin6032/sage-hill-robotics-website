"use client";

import Image, { type StaticImageData } from "next/image";
import type { ContentItem } from "./StickyLayout";

interface ImageItem {
  src: string | StaticImageData;
  caption?: string;
}

interface Props {
  content: ContentItem[];
}

export default function FlowLayout({ content }: Props) {
  return (
    <div className="bg-black text-white w-full space-y-24 py-16">
      {content.map((item, index) => {
        const imageOnRight = item.imageSide === "right";

        // explicitly type image
        const img: ImageItem | undefined = Array.isArray(item.images)
          ? (item.images[0] as ImageItem)
          : undefined;

        return (
          <section
            key={index}
            className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
          >
            {/* IMAGE */}
            <div
              className={`${
                imageOnRight ? "order-2" : "order-1"
              } flex justify-center`}
            >
              {img && img.src && (
                <div className="relative w-full max-w-lg aspect-[4/3]  overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.caption || item.title || "Outreach image"}
                    fill
                    className="object-cover  brightness-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              )}
            </div>

            {/* TEXT */}
            <div
              className={`${
                imageOnRight ? "order-1 text-left" : "order-2 text-left"
              }`}
            >
              <h2
                className={`${
                  item.titleSize || "text-3xl md:text-4xl"
                } font-bold mb-4 ${item.titleColor || "text-sage-light"}`}
              >
                {item.title}
              </h2>
              {item.description && (
                <p className="text-white/80 text-lg leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
