'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ParticleTextEffect,
  type ParticleTextEffectHandle,
} from "@/components/ui/particle-text-effect";

const SESSION_KEY = "boraze:intro-seen";
const MAX_DURATION_MS = 7000;

export function BorazeIntro() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const apiRef = useRef<ParticleTextEffectHandle | null>(null);
  const timersRef = useRef<number[]>([]);
  const startedRef = useRef(false);
  const originalOverflowRef = useRef("");

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const finish = useCallback(() => {
    clearTimers();
    document.body.style.overflow = originalOverflowRef.current;
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Storage can be unavailable in restricted browser modes.
    }
    setVisible(false);
  }, [clearTimers]);

  const startSequence = useCallback(
    (api: ParticleTextEffectHandle) => {
      apiRef.current = api;
      if (startedRef.current) return;
      startedRef.current = true;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        api.formText("BoraZé!", "brand");
        timersRef.current.push(
          window.setTimeout(() => {
            setExiting(true);
            api.disperse();
          }, 450),
          window.setTimeout(finish, 900),
        );
        return;
      }

      api.formText("BoraZé!", "brand");

      timersRef.current.push(
        window.setTimeout(() => {
          api.formText("DE TUDO UM POUCO.", "tagline");
        }, 2600),
        window.setTimeout(() => {
          api.disperse();
          setExiting(true);
        }, 5200),
        window.setTimeout(finish, 6000),
      );
    },
    [finish],
  );

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === "1") {
        setVisible(false);
        return;
      }
    } catch {
      // Continue with the intro when storage is unavailable.
    }

    originalOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const safetyTimer = window.setTimeout(finish, MAX_DURATION_MS);
    timersRef.current.push(safetyTimer);

    return () => {
      clearTimers();
      document.body.style.overflow = originalOverflowRef.current;
    };
  }, [clearTimers, finish]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={
        "fixed inset-0 z-[9999] h-[100dvh] w-screen overflow-hidden bg-[#0B0B0B] transition-opacity duration-700 " +
        (exiting ? "pointer-events-none opacity-0" : "opacity-100")
      }
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(0,194,74,0.10),transparent_42%)]" />
      <ParticleTextEffect onReady={startSequence} />
    </div>
  );
}
