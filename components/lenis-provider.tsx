"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function LenisProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    let raf = 0;

    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
