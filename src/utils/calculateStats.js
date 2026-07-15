export function calculateStats(text, typed, startTime) {
  const correct = typed.filter(
    (char, index) => char === text[index]
  ).length;

  const wrong = typed.length - correct;

  const accuracy =
    typed.length === 0
      ? 100
      : Math.round((correct / typed.length) * 100);

  const minutes = (Date.now() - startTime) / 60000;

  const wpm =
    minutes > 0
      ? Math.round(correct / 5 / minutes)
      : 0;

  return {
    correct,
    wrong,
    accuracy,
    wpm,
  };
}