import React, { useState, useEffect } from 'react';

export const  useIsFocused = () => {
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    setIsFocused(true);
    return () => {
      setIsFocused(false);
    };
  }, []);

  return isFocused;
}
