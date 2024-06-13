import { Ubuntu } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/utils";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} relative bg-bg bg-center bg-cover bg-no-repeat bg-fixed text-neutral-200 overflow-x-hidden`}
    >
      <div className="absolute inset-0 bg-black/40 -z-10"/>
      <body className="relative mt-12 flex h-screen w-full items-center justify-center">
        {children}
      </body>
    </html>
  );
}
