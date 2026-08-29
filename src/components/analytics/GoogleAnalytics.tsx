'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const GA_ID = 'G-JERLM6S297'

export function GoogleAnalytics() {
  const pathname = usePathname()
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      // Initial page_view is sent automatically by the gtag config call below.
      initialRender.current = false
      return
    }
    // Subsequent client-side navigations in the App Router do not trigger
    // a new gtag config call, so we send the page_view manually here.
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
