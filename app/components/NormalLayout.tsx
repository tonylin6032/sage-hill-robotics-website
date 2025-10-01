// components/NormalLayout.tsx
import Image, { StaticImageData } from "next/image";
import type { ContentItem } from "./StickyLayout"; // <- share the exact same type

interface NormalProps {
  content: ContentItem[];
}

export default function NormalLayout({ content }: NormalProps) {
  return (
    <div className="space-y-12 md:space-y-16 my-24">
      {content.map((item, index) => (
        <div key={index} className="max-w-screen-xl mx-auto px-6 sm:px-0 mt-5">
          {item.title && (
            <h1
              className={`${item.titleSize || "text-3xl sm:text-4xl"} font-semibold tracking-tighter ${
                item.titleColor || ""
              } ${!item.subtitle ? "mb-8" : ""}`}
            >
              {item.title}
            </h1>
          )}

          {item.subtitle && (
            <h2 className="text-xl sm:text-xl font-medium tracking-tight mb-2">
              {item.subtitle}
            </h2>
          )}

          {item.description && (
            <p className="text-lg sm:text-xl whitespace-pre-line">{item.description}</p>
          )}

          {/* Support either imgBelow or imgUrl if provided */}
          {(item.imgBelow || item.imgUrl) && (
            <div className="mt-8">
              <Image
                src={(item.imgBelow || item.imgUrl)! as string | StaticImageData}
                alt={item.altText || item.title || "image"}
                className="w-full h-auto object-cover rounded-lg"
                placeholder={typeof (item.imgBelow || item.imgUrl) === "object" ? "blur" : undefined}
                // If you prefer fixed aspect, wrap in a relative div with aspect-[] and use fill
              />
              {item.altText && (
                <p className="mt-2 text-sm italic text-gray-600">{item.altText}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
