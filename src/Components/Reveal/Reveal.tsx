import { m, type HTMLMotionProps } from "framer-motion";
import { DISTANCE, DURATION, EASE, VIEWPORT } from "./animations";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

// Jedinstvena "fade up" animacija za sve sekcije, da se sve pojavljuje istim pokretom
const Reveal = ({ delay = 0, children, ...rest }: RevealProps) => (
  <m.div
    initial={{ opacity: 0, y: DISTANCE }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEWPORT}
    transition={{ duration: DURATION, ease: EASE, delay }}
    {...rest}
  >
    {children}
  </m.div>
);

export default Reveal;
