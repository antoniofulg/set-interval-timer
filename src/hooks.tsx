import { useEffect, useRef, useState } from "react";

const ZERO = 0;
const SECOND_INTERVAL = 10;
const MINUTE = 60;

const useAge = () => {
  const [age, setAge] = useState<number>(ZERO);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = intervalInitializer();

    return () => {
      intervalCleaner();
    };
  }, []);

  const intervalInitializer = () =>
    setInterval(() => {
      setAge((age) => age + SECOND_INTERVAL);
    }, SECOND_INTERVAL * 1000);

  const intervalCleaner = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const getAge = () => {
    if (age < SECOND_INTERVAL) return "Just now";
    if (age < MINUTE) return "A few seconds ago";
    const minutesConcluded = Math.trunc(age / MINUTE);
    return `${minutesConcluded} minute(s) ago`;
  };

  const resetAge = () => {
    setAge(ZERO);
    intervalCleaner();
    intervalRef.current = intervalInitializer();
  };

  return { getAge, resetAge };
};

export { useAge };
