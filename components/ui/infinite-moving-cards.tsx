"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  mode,
}: {
  items: {
    data: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  mode: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(true);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  if (mode === "text") {
    return (
      <div
        ref={containerRef}
        className={cn("scroller relative w-full overflow-hidden", className)}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-full gap-4",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <div className="flex w-full h-full whitespace-nowrap" key={idx}>
              {item.data}
            </div>
          ))}
        </ul>
      </div>
    );
  } else if (mode === "video") {
    return (
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20  w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-4 py-1 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, index) => (
            <div
              className="w-full h-[280px] flex justify-center items-center"
              key={index}
            >
              <video
                autoPlay
                muted
                preload=""
                loop
                src={item.data}
                className="w-full h-full object-contain"
              ></video>
            </div>
          ))}
        </ul>
      </div>
    );
  } else {
    return <p>Nothing to show</p>;
  }
};
