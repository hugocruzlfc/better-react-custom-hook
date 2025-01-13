import { useMemo, useState } from "react";

export const useCustomHook = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const memoizedValue = useMemo(() => {
    console.log("useMemo recalculated");
    return count * 2;
  }, [count]);

  return { count, setCount, text, setText, memoizedValue };
};
