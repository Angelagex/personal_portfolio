'use client'

import { useTheme } from "next-themes";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ThemeToggle() {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { setTheme, theme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const params = new URLSearchParams(searchParams);
    params.set('theme', theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
    replace(`${pathname}?${params.toString()}`);
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