"use client";

import { useState, useEffect } from "react";
import { Send, X } from "lucide-react";

/**
 * RobotBubble Component
 *
 * Displays a robot character with a speech bubble after a delay.
 * The bubble contains a message asking if the user wants to be contacted.
 *
 * Features:
 * - Appears after 5 seconds
 * - Can be dismissed
 * - Links to LinkedIn profile
 * - Pixel-art styled border
 */
export default function RobotBubble() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show robot after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-36 -left-40 z-50 sm:-left-46 md:-left-58">
      <div className="relative flex items-end gap-4">
        {/* Robot Image */}
        <div className="relative z-10 origin-bottom-left" style={{ transform: "rotate(32deg)" }}>
          <div className="pointer-events-none relative overflow-hidden select-none w-64 sm:w-72 md:w-92">
            <img alt="Robot" className="block h-auto w-full" src="/robot-2d.webp" />

            {/* Robot Eyes */}
            <div className="pointer-events-auto absolute top-[40.95%] left-[51.35%] flex aspect-[446/278] w-[36%] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[12%/18%]">
              <div className="flex h-full w-full items-center justify-center bg-[#1a1a1a]">
                <div className="inline-flex items-center justify-center gap-8">
                  {/* Left eye */}
                  <div
                    className="relative origin-center ring-2 ring-black w-3.5 h-[16px]"
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      boxShadow: "rgb(255, 255, 255) 0px 0px 6px, rgb(255, 255, 255) 0px 0px 3px inset",
                      transform: "translateX(-0.198619px)"
                    }}
                  />
                  {/* Right eye */}
                  <div
                    className="relative origin-center ring-2 ring-black w-3.5 h-[16px]"
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      boxShadow: "rgb(255, 255, 255) 0px 0px 6px, rgb(255, 255, 255) 0px 0px 3px inset",
                      transform: "translateX(-0.198619px)"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speech Bubble */}
        <div
          className="absolute top-20 left-58 z-20 sm:top-28 sm:left-64 md:top-36 md:left-80"
          style={{ opacity: 1, transform: "none" }}
        >
          <div
            data-direction="left"
            className="relative inline-block cursor-pointer rounded px-4 py-2 m-1.5 bg-[var(--bubble-bg-color)] text-[var(--bubble-text-color)] [&>*:last-child]:mb-0 bubble-tail pixel-border max-w-[280px] min-w-[240px]"
            style={{
              "--Speechbubble-border-color": "#000000",
              "--bubble-bg-color": "#fff",
              "--bubble-text-color": "#000000",
              "--bubble-border-image": "url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%3E%3Cpath%20d%3D%22M3%201%20h1%20v1%20h-1%20z%20M4%201%20h1%20v1%20h-1%20z%20M2%202%20h1%20v1%20h-1%20z%20M5%202%20h1%20v1%20h-1%20z%20M1%203%20h1%20v1%20h-1%20z%20M6%203%20h1%20v1%20h-1%20z%20M1%204%20h1%20v1%20h-1%20z%20M6%204%20h1%20v1%20h-1%20z%20M2%205%20h1%20v1%20h-1%20z%20M5%205%20h1%20v1%20h-1%20z%20M3%206%20h1%20v1%20h-1%20z%20M4%206%20h1%20v1%20h-1%20z%22%20fill%3D%22%23000000%22%20%2F%3E%3C%2Fsvg%3E\")"
            } as React.CSSProperties}
          >
            <p className="mb-4 text-sm leading-relaxed font-bold">
              ¿Me vais a contratar?
            </p>

            <div className="flex gap-2">
              {/* LinkedIn Contact Button */}
              <a
                href="https://www.linkedin.com/in/javier-rodriguez-lopez-4795a8180/"
                target="_blank"
                rel="noopener,noreferrer"
                className="group flex h-8 flex-1 items-center justify-center gap-2 bg-[#0088cc] font-bold text-white hover:bg-[#007ab8] transition-colors"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs uppercase">Contáctame</span>
              </a>

              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="flex size-8 items-center justify-center bg-red-500 p-2 font-bold text-white transition-all hover:bg-red-600"
                aria-label="Cerrar"
                tabIndex={0}
              >
                <X className="size-8" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pixel-border {
          border-image: var(--bubble-border-image) 2;
          border-width: 2px;
          border-style: solid;
        }

        .bubble-tail::before {
          content: "";
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-right: 12px solid var(--bubble-bg-color);
        }
      `}</style>
    </div>
  );
}
