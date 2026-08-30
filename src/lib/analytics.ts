export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>,
): void {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, parameters)
    }
  } catch {
    // Analytics failure must never affect the application
  }
}
