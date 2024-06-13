import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "PIA | Offer Fest",
  description = "Doar în perioada 17-22 iunie, vizitați-ne la Porsche Pipera sau Porsche București Vest pentru a testa gama noastră largă de mașini. Vă așteptăm!",
  image = "/logo.png",
  icons = "/logo.png",
}: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      site: "https://offerfest-pia.vercel.app",
      description,
      images: [image],
      creator: "@PIA_RO",
    },
    icons,
    metadataBase: new URL("https://offerfest-pia.vercel.app"),
  };
}
