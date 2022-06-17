import React, { useEffect, useState } from "react";

export default function UseDebounce(value, delay) {
  const [debouncedValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}
