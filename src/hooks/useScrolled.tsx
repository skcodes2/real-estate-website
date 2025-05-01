import { useEffect, useState } from 'react';

export default function useScrolled(threshold = 10, darkMode: any) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    console.log(lastScrollY);
    const updateScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > threshold);
      setScrollUp(currentY < lastScrollY);
      if (darkMode && currentY ===0) {
        let navBar = document.getElementsByClassName("container")[0];
        navBar.classList.remove("at-top")
      }
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, [threshold]);

  return { scrolled, scrollUp };
}
