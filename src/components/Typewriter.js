import React, { useEffect, useState, useRef } from "react";

function Typewriter({
  text = "Your Name",
  speed = 80,
  loop = false,
  onComplete,
  enabled = true,
  className = "",
}) {
  const [display, setDisplay] = useState("");
  const indexRef = useRef(0);
  const directionRef = useRef(1); // 1 = typing, -1 = deleting
  const intervalRef = useRef(null);

  useEffect(() => {
    // If disabled, set full text and skip animation
    if (!enabled) {
      setDisplay(text);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }

    // Reset state when text or speed/loop changes and enabled
    setDisplay("");
    indexRef.current = 0;
    directionRef.current = 1;

    function tick() {
      if (directionRef.current === 1) {
        // Typing
        const nextIndex = indexRef.current + 1;
        setDisplay(text.slice(0, nextIndex));
        indexRef.current = nextIndex;

        if (indexRef.current >= text.length) {
          if (onComplete) onComplete();
          if (loop) {
            // pause briefly at full text then start deleting
            clearInterval(intervalRef.current);
            setTimeout(() => {
              directionRef.current = -1;
              intervalRef.current = setInterval(tick, speed);
            }, 800);
          } else {
            clearInterval(intervalRef.current);
          }
        }
      } else {
        // Deleting
        const nextIndex = Math.max(0, indexRef.current - 1);
        setDisplay(text.slice(0, nextIndex));
        indexRef.current = nextIndex;
        if (indexRef.current <= 0) {
          // completed a delete cycle
          if (loop) {
            // pause briefly then start typing again
            clearInterval(intervalRef.current);
            setTimeout(() => {
              directionRef.current = 1;
              intervalRef.current = setInterval(tick, speed);
            }, 400);
          } else {
            clearInterval(intervalRef.current);
          }
        }
      }
    }

    intervalRef.current = setInterval(tick, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed, loop, enabled, onComplete]);

  return (
    <span className={`typewriter ${className}`.trim()}>
      {display}
      {enabled && <span className="caret">|</span>}
    </span>
  );
}

export default Typewriter;
