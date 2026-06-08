"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Animation direction: up, down, left, right, or fade-only */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Distance in pixels */
  distance?: number;
  /** Duration in seconds */
  duration?: number;
  /** Delay in seconds */
  delay?: number;
  /** Start trigger position */
  start?: string;
  /** Whether to stagger children instead of animating the container */
  stagger?: number;
  /** Selector for stagger targets (children) */
  staggerSelector?: string;
  /** HTML tag to render */
  as?: keyof HTMLElementTagNameMap;
};

export default function AnimateIn({
  children,
  className,
  style,
  from = "up",
  distance = 40,
  duration = 0.7,
  delay = 0,
  start = "top 88%",
  stagger,
  staggerSelector,
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const fromVars: gsap.TweenVars = { opacity: 0 };
      if (from === "up") fromVars.y = distance;
      else if (from === "down") fromVars.y = -distance;
      else if (from === "left") fromVars.x = -distance;
      else if (from === "right") fromVars.x = distance;

      const toVars: gsap.TweenVars = {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none none",
        },
      };

      if (stagger && staggerSelector) {
        const targets = ref.current.querySelectorAll(staggerSelector);
        gsap.set(targets, fromVars);
        gsap.to(targets, { ...toVars, stagger });
      } else {
        gsap.set(ref.current, fromVars);
        gsap.to(ref.current, toVars);
      }
    },
    { scope: ref }
  );

  const Element = Tag as unknown as React.ElementType;
  return (
    <Element ref={ref} className={className} style={style}>
      {children}
    </Element>
  );
}
