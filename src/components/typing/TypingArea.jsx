import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import paragraphs from "../../data/paragraphs";
import useTyping from "../../hooks/useTyping";
import RestartButton from "./RestartButton";
import TypingHeader from "./TypingHeader";

function TypingArea({ duration, onRestart }) {
  const navigate = useNavigate();

  const text = useMemo(() => {
    const index = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[index];
  }, [duration]);

  const {
    typed,
    correct,
    wrong,
    accuracy,
    wpm,
    progress,
    timeLeft,
    finished,
    restart,
  } = useTyping(text, duration, onRestart);

  useEffect(() => {
    if (finished) {
      navigate("/result", {
        replace: true,
        state: {
          wpm,
          accuracy,
          wrong,
          correct,
        },
      });
    }
  }, [finished, navigate, wpm, accuracy, wrong, correct]);

  return (
    <>
      <TypingHeader
        timeLeft={timeLeft}
        wpm={wpm}
        accuracy={accuracy}
        wrong={wrong}
        progress={progress}
      />

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-3xl leading-loose select-none">
        {text.split("").map((char, index) => {
          let cls = "text-zinc-600";

          if (index < typed.length) {
            cls =
              typed[index]?.toLowerCase() === char.toLowerCase()
                ? "text-white"
                : "text-red-500";
          }

          if (index === typed.length) {
            cls += " border-l-2 border-yellow-400 animate-pulse";
          }

          return (
            <span key={index} className={cls}>
              {char}
            </span>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <RestartButton
          restart={restart}
          id="restart-btn"
        />
      </div>
    </>
  );
}

export default TypingArea;

