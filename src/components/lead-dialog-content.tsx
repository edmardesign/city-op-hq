import { useLayoutEffect, useState, type ComponentProps } from "react";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/** Keep the mobile sheet inside the visible area above the on-screen keyboard. */
export function LeadDialogContent({ className, ...props }: ComponentProps<typeof DialogContent>) {
  const [content, setContent] = useState<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!content) return;
    const viewport = window.visualViewport;
    let frame = 0;
    const update = () => {
      const height = viewport?.height ?? window.innerHeight;
      const top = viewport?.offsetTop ?? 0;
      content.style.setProperty("--lead-viewport-height", `${height}px`);
      content.style.setProperty("--lead-viewport-bottom", `${Math.max(0, window.innerHeight - height - top)}px`);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!window.matchMedia("(max-width: 639px)").matches) return;
        const active = document.activeElement;
        if (!(active instanceof HTMLElement) || !content.contains(active)) return;
        const bounds = content.getBoundingClientRect();
        const field = active.getBoundingClientRect();
        if (field.bottom > bounds.bottom - 16) {
          content.scrollTop += field.bottom - bounds.bottom + 16;
        } else if (field.top < bounds.top + 16) {
          content.scrollTop -= bounds.top + 16 - field.top;
        }
      });
    };
    update();
    viewport?.addEventListener("resize", update);
    viewport?.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    content.addEventListener("focusin", update);
    return () => {
      cancelAnimationFrame(frame);
      viewport?.removeEventListener("resize", update);
      viewport?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      content.removeEventListener("focusin", update);
    };
  }, [content]);

  return <DialogContent {...props} ref={setContent} className={cn("lead-dialog", className)} />;
}
