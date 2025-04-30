import { useState } from "react";

export default function useDarkMode(initial = true) {
  const [darkMode, setDarkMode] = useState(initial);

  function toggleDarkMode() {

    if (darkMode) {
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--theme-color', '#ffffff');
        setDarkMode(false);
        return;
    }
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--theme-color', '#000000');
    setDarkMode(true);
}

  return { darkMode, toggleDarkMode };
}