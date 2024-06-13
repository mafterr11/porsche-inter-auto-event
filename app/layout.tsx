import { Ubuntu } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

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
      className={`${ubuntu.variable} bg-bg bg-center bg-cover bg-no-repeat bg-fixed text-neutral-200 overflow-x-hidden`}
    >
      <body className=" relative h-full w-full">
        <div className="absolute inset-0 bg-black/40 h-auto"/>
        {children}
            {/* Footer */}
      <Footer />
      <Toaster />
      </body>
    </html>
  );
}
