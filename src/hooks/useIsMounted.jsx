import React, { useState, useEffect } from 'react';

export const  useIsMounted = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
    return () => {
      setIsRendered(false);
    };
  }, []);

  return isRendered;
}
