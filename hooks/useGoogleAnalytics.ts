"use client"
// hooks/useGoogleAnalytics.ts
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';

export const useGoogleAnalytics = () => { 
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);
};
