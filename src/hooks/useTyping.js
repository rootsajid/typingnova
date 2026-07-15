import { useEffect, useMemo, useState } from "react";
import useTimer from "./useTimer";

export default function useTyping(text, duration = 30, onRestart) {
  const [typed, setTyped] = useState([]);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const timeLeft = useTimer(duration, started, finished);

  useEffect(() => {
    if (timeLeft === 0) {
      setFinished(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    function handleKey(e) {
      // TAB → Focus Restart Button
      if (e.key === "Tab") {
        e.preventDefault();

        const restartBtn = document.getElementById("restart-btn");
        if (restartBtn) {
          restartBtn.focus();
        }

        return;
      }

      if (finished) return;

      if (e.key.length !== 1 && e.key !== "Backspace") return;

      if (!started) {
        setStarted(true);
      }

      if (e.key === "Backspace") {
        setTyped((prev) => prev.slice(0, -1));
        return;
      }

      setTyped((prev) => [...prev, e.key.toLowerCase()]);
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [started, finished]);

  const correct = useMemo(() => {
    let count = 0;

    typed.forEach((char, index) => {
      if (char === text[index]) {
        count++;
      }
    });

    return count;
  }, [typed, text]);

  const wrong = typed.length - correct;

  const accuracy =
    typed.length === 0
      ? 100
      : Math.round((correct / typed.length) * 100);

  const elapsed = duration - timeLeft;

  const wpm =
    elapsed > 0
      ? Math.round(correct / 5 / (elapsed / 60))
      : 0;

  const progress = Math.min(
    Math.round((typed.length / text.length) * 100),
    100
  );

  const restart = () => {
    if (onRestart) {
      onRestart();
    }
  };

  return {
    typed,
    correct,
    wrong,
    accuracy,
    wpm,
    progress,
    timeLeft,
    finished,
    restart,
  };
}