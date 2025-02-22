// Project by Alexandru Maftei
import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="relative overflow-x-hidden bg-[#384967] font-futura text-neutral-200 lg:max-xl:h-full"
    >
      {/* TODO start Google Analytics + change ENV variable */}
      {/* <head>
        <GoogleAnalytics />
      </head> */}
      <body className="relative h-full w-full overflow-x-hidden">
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
