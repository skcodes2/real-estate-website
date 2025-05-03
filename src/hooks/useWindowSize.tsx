// hooks/useWindowSize.ts
import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const onResize = () => setSize({ width: window.innerWidth });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
}
