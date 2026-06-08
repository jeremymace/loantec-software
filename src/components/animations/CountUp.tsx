"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CountUpProps = {
  value: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function CountUp({ value, className, style }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useGSAP(() => {
    if (!ref.current) return;

    const numericMatch = value.match(/^[\d,]+/);
    if (!numericMatch) return;

    const target = parseInt(numericMatch[0].replace(/,/g, ""), 10);
    const suffix = value.slice(numericMatch[0].length);
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        const current = Math.round(obj.val);
        setDisplay(current.toLocaleString() + suffix);
      },
    });
  }, { scope: ref });

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
