import type { Variants } from "framer-motion";

// Blaži "ease-out" - pokret je ravnomjerniji pa se slajd jasno vidi, umjesto da samo trzne
export const EASE = [0.25, 0.8, 0.25, 1] as const;

// Koliko px element "putuje" odozdo i koliko dugo
export const DISTANCE = 60;
export const DURATION = 1;

// Element postaje vidljiv kad mu vrh uđe ~10% u ekran (ne čim se pojavi prvi piksel)
export const VIEWPORT = { once: true, margin: "0px 0px -10% 0px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  show: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});
