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
      className={`${ubuntu.variable} bg-[#384967] text-neutral-200`}
    >
      <body className="mt-12 flex h-screen w-full items-center justify-center">
        {children}
      </body>
    </html>
  );
}
