import Image, { StaticImageData } from "next/image";
import type { ContentItem } from "./StickyLayout";

interface NormalProps {
  content: ContentItem[];
}

export default function NormalLayout({ content }: NormalProps) {
  return (
    <div className="space-y-12 md:space-y-16 mx-12 mb-12">
      {content.map((item, index) => {
        const hasSubtitle = !!item.subtitle;

        return (
          <div key={index} className="max-w-screen-xl mx-auto px-6 sm:px-0 mt-5">
            {/* Title */}
            {item.title && (
              <h1
                className={`${item.titleSize || "text-3xl sm:text-4xl"} font-semibold tracking-tighter ${
                  item.titleColor || ""
                } ${hasSubtitle ? "mb-2" : "mb-4"}`}
              >
                {item.title}
              </h1>
            )}

            {/* Subtitle (only if present) */}
            {hasSubtitle && (
              <h2 className="text-xl sm:text-xl font-medium tracking-tight mb-2">
                {item.subtitle}
              </h2>
            )}

            {/* Description (adjust top margin dynamically) */}
            {item.description && (
              <p
                className={`text-lg sm:text-xl whitespace-pre-line ${
                  hasSubtitle ? "mt-0" : "-mt-2"
                }`}
              >
                {item.description}
              </p>
            )}

            {/* Optional image */}
            {(item.imgBelow || item.imgUrl) && (
              <div className="mt-8">
                <Image
                  src={(item.imgBelow || item.imgUrl)! as string | StaticImageData}
                  alt={item.altText || item.title || "image"}
                  className="w-full h-auto object-cover rounded-lg"
                  placeholder={
                    typeof (item.imgBelow || item.imgUrl) === "object"
                      ? "blur"
                      : undefined
                  }
                />
                {item.altText && (
                  <p className="mt-2 text-sm italic text-gray-600">
                    {item.altText}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
