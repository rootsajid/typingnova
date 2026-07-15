import { useState } from "react";
import TypingArea from "../../components/typing/TypingArea";
import TimeSelector from "../../components/typing/TimeSelector";

function Test() {
  const [duration, setDuration] = useState(30);
  const [testId, setTestId] = useState(0);

  const handleDurationChange = (time) => {
    setDuration(time);
    setTestId((prev) => prev + 1);
  };

  const handleRestart = () => {
    setTestId((prev) => prev + 1);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <TimeSelector
        duration={duration}
        setDuration={handleDurationChange}
      />

      <TypingArea
        key={testId}
        duration={duration}
        onRestart={handleRestart}
      />
    </div>
  );
}

export default Test;