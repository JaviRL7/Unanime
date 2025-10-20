"use client";

import { useState, useEffect } from "react";
import { Linkedin, X } from "lucide-react";
import SpeechBubble from "../ui/speech-bubble";

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
          <SpeechBubble
            direction="left"
            bg="#F6EAC5"
            borderColor="#000000"
            textColor="#000000"
            className="max-w-[280px] min-w-[250px]"
          >
            <p className="mb-3 text-sm md:text-base font-bold text-center">
              ¿Me vais a contratar?
            </p>

            <div className="flex gap-2">
              {/* LinkedIn Contact Button */}
              <a
                href="https://www.linkedin.com/in/javier-rodriguez-lopez-4795a8180/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 flex-1 items-center justify-center gap-2 rounded-md bg-[#0A66C2] px-3 py-2 font-semibold text-white transition-all duration-200 hover:bg-[#004182] hover:scale-105 active:scale-95"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs uppercase tracking-wide">LinkedIn</span>
              </a>

              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="flex size-9 items-center justify-center rounded-md bg-red-500 font-bold text-white transition-all duration-200 hover:bg-red-600 hover:scale-105 active:scale-95"
                aria-label="Cerrar"
                tabIndex={0}
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
          </SpeechBubble>
        </div>
      </div>
    </div>
  );
}
