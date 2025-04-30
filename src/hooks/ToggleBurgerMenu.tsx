import { useState, useEffect } from 'react';

export default function useMenuToggle(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return { isOpen, isMounted, toggleMenu };
}