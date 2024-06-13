import { Ubuntu } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";

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
      className={`${ubuntu.variable} relative overflow-x-hidden bg-bg bg-cover bg-fixed bg-center bg-no-repeat text-neutral-200 lg:max-xl:h-full`}
    >
      <body className="relative h-full w-full">
        <div className="absolute inset-0 h-auto bg-black/40" />
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        {/* Footer */}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
