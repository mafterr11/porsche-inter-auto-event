// app/layout.tsx
import './globals.css';
import { constructMetadata } from '@/lib/utils';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import GoogleCaptchaWrapper from './GoogleCaptchaWrapper';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="font-futura relative overflow-x-hidden bg-[#384967] text-neutral-200 lg:max-xl:h-full"
    >
      <body className="relative h-full w-full overflow-x-hidden">
        <GoogleAnalytics />
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
