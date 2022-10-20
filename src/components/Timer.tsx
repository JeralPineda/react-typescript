import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  milliseconds: number;
};

export const Timer = ({ milliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);

  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => setSeconds((seconds) => seconds + 1), milliseconds);
  }, [milliseconds]);

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};
