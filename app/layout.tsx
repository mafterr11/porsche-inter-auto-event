import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`font-futura relative overflow-x-hidden bg-bg bg-cover bg-center bg-no-repeat text-neutral-200 lg:max-xl:h-full`}
    >
      <body className="relative h-full w-full overflow-x-hidden">
        <div className="absolute inset-0 h-full bg-black/40" />
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
