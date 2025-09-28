// components/ContentLayout.tsx
import Image, { StaticImageData } from "next/image";

interface ContentProps {
  content: {
    title: string;
    titleColor?: string;
    subtitle?: string;
    description: string;
    imgUrl?: string | StaticImageData | null;
    imgBelow?: StaticImageData | null;
    altText?: string;
    titleSize?: string;
  }[];
}

export default function ContentLayout({ content }: ContentProps) {
  return (
    <div className="space-y-12 md:space-y-16 mt-1">
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
          <p className="text-lg sm:text-xl whitespace-pre-line">{item.description}</p>

          {item.imgBelow && (
            <div className="mt-8">
              <Image
                src={item.imgBelow}
                alt={item.altText || ""}
                className="w-full h-auto object-cover rounded-lg"
                placeholder="blur"
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
