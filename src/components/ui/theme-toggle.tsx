"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsChecked(!isChecked);
  };

  return (
    <label className={`switch ${isChecked ? 'checked' : ''}`}>
      <input type="checkbox" hidden onChange={handleToggle} checked={isChecked} />
      <div className="switch__wrapper">
        <div className="switch__toggle"></div>
      </div>
    </label>

  );
}