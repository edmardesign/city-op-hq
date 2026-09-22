export const WHATSAPP_DIGITS = "557588653204";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp in a new tab. Inside embedded previews wa.me refuses to be
 * framed, so a same-frame navigation shows a connection error page. Opening a
 * new tab (with a top-level navigation fallback) avoids that failure.
 */
export function openWhatsAppMessage(message: string) {
  window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
