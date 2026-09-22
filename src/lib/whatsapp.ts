export const WHATSAPP_DIGITS = "557588653204";

/**
 * Opens WhatsApp in a new tab. Inside embedded previews wa.me refuses to be
 * framed, so a same-frame navigation shows a connection error page. Opening a
 * new tab (with a top-level navigation fallback) avoids that failure.
 */
export function openWhatsAppMessage(message: string) {
  const url = `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`;
  try {
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (opened) return;
  } catch {
    // ignore and fall back below
  }
  try {
    (window.top ?? window).location.assign(url);
  } catch {
    window.location.assign(url);
  }
}
