// app/components/StickyLayout.tsx
import Image, { StaticImageData } from "next/image";

export type ImgLike = string | StaticImageData;
export type ImgAspect = "16/9" | "3/2" | "4/3" | "1/1" | "1/2" | "1/3"| "2/5";
export type ImgSize = "full" | "half";

export interface GalleryImage {
  src: ImgLike;
  caption?: string;
  size?: ImgSize;      // default "full"
  aspect?: ImgAspect;  // default "3/2"
}

export interface StackedGroup {
  layout: "stack";
  children: GalleryImage[]; // stacked vertically inside one half-column
}

export interface ContentItem {
  title: string;
  description: string;
  subtitle?: string;
  titleColor?: string;
  titleSize?: string;
  altText?: string;
  imageSide?: "left" | "right";
  // Legacy single-image props (still supported)
  imgUrl?: ImgLike | null;
  imgBelow?: ImgLike | null;
  // Modern gallery: mix of single images and stacked groups
  images?: (GalleryImage | StackedGroup)[];
  // e.g. "top-24" to clear a fixed navbar
  stickyOffsetClass?: string;
}

interface ContentProps {
  content: ContentItem[];
}

// Static Tailwind aspect classes (no dynamic class names)
const ASPECT_CLASS: Record<ImgAspect, string> = {
  "16/9": "aspect-[16/9]",
  "3/2":  "aspect-[3/2]",
  "4/3":  "aspect-[4/3]",
  "1/1":  "aspect-square",
  "1/2":  "aspect-[1/2]",
  "1/3":  "aspect-[1/3]",
  "2/5":  "aspect-[2/5]",
};

// Sanitize image src (avoid "", strip leading "public/")
function normalizeSrc(src: ImgLike | null | undefined): ImgLike | null {
  if (!src) return null;
  if (typeof src === "string") {
    const s = src.trim();
    if (!s) return null;
    if (s.startsWith("public/")) return "/" + s.slice("public/".length);
    return s;
  }
  return src; // StaticImageData OK
}

export default function StickyLayout({ content }: ContentProps) {
  return (
    <div className="space-y-14 md:space-y-16 lg:space-y-10 mb-12 mx-12">
      {content.map((item, index) => {
        const imageOnLeft = item.imageSide === "left";
        const stickyTop = item.stickyOffsetClass || "top-20";

        // Normalize legacy single-image into images[]
        const rawImages =
          item.images && item.images.length
            ? item.images
            : (() => {
                const single = item.imgUrl || item.imgBelow || null;
                return single ? [{ src: single, caption: item.altText }] : [];
              })();

        return (
          <section key={index} className="max-w-screen-xl mx-auto px-6 sm:px-0">
            <div
              className={`
                grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12
                ${imageOnLeft ? "lg:[&>div:first-child]:order-1 lg:[&>div:last-child]:order-2" : ""}
              `}
            >
              {/* Sticky text (1/3) */}
              <div className={`lg:col-span-1 ${imageOnLeft ? "lg:order-2" : "lg:order-1"} mt-6`}>
                <div className={`lg:sticky ${stickyTop}`}>
                  {item.title && (
                    <h1
                      className={`${item.titleSize || "text-3xl sm:text-4xl"} font-semibold tracking-tighter ${
                        item.titleColor || ""
                      } ${!item.subtitle ? "mb-4" : "mb-1"}`}
                    >
                      {item.title}
                    </h1>
                  )}
                  {item.subtitle && (
                    <h2 className="text-lg sm:text-xl font-medium tracking-tight mb-3">
                      {item.subtitle}
                    </h2>
                  )}
                  <p className="text-lg sm:text-xl whitespace-pre-line">{item.description}</p>
                </div>
              </div>

              {/* Gallery (2/3) */}
              <div className={`lg:col-span-2 ${imageOnLeft ? "lg:order-1" : "lg:order-2"} mt-6`}>
                {/* Top-align the two halves */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                  {rawImages.map((node, i) => {
                    // Right-half stacked group
                    if ((node as StackedGroup).layout === "stack") {
                      const group = node as StackedGroup;
                      const children = (group.children || [])
                        .map((img) => ({ ...img, src: normalizeSrc(img.src) }))
                        .filter((img) => img.src !== null) as GalleryImage[];

                      if (children.length === 0) return null;

                      return (
                        <div
                          key={`stack-${i}`}
                          className="flex flex-col gap-8 lg:gap-10 lg:col-span-1 items-start self-start"
                        >
                          {children.map((child, j) => {
                            const aspect = child.aspect ?? "3/2";
                            return (
                              <figure key={j} className="w-full self-start">
                                <div className={`relative w-full overflow-hidden ${ASPECT_CLASS[aspect]}`}>
                                  <Image
                                    src={child.src as ImgLike}
                                    alt={(child.caption || item.altText || item.title || "image") as string}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    priority={index === 0 && i === 0 && j === 0}
                                  />
                                </div>
                                {(child.caption || (!child.caption && j === 0 && item.altText)) && (
                                  <figcaption className="mt-2 text-sm italic text-gray-600">
                                    {child.caption || item.altText}
                                  </figcaption>
                                )}
                              </figure>
                            );
                          })}
                        </div>
                      );
                    }

                    // Single image (left half or full-width)
                    const img = node as GalleryImage;
                    const src = normalizeSrc(img.src);
                    if (!src) return null;

                    const size: ImgSize = img.size ?? "full";
                    const aspect: ImgAspect = img.aspect ?? "3/2";
                    const spanClass = size === "full" ? "lg:col-span-2" : "lg:col-span-1";

                    return (
                      <figure key={i} className={`w-full ${spanClass} self-start`}>
                        <div className={`relative w-full overflow-hidden ${ASPECT_CLASS[aspect]}`}>
                          <Image
                            src={src}
                            alt={(img.caption || item.altText || item.title || "image") as string}
                            fill
                            className="object-cover"
                            sizes={
                              size === "full"
                                ? "(max-width: 1024px) 100vw, 66vw"
                                : "(max-width: 1024px) 100vw, 33vw"
                            }
                            priority={index === 0 && i === 0}
                          />
                        </div>
                        {(img.caption || (i === 0 && item.altText)) && (
                          <figcaption className="mt-2 text-sm italic text-gray-600">
                            {img.caption || item.altText}
                          </figcaption>
                        )}
                      </figure>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
