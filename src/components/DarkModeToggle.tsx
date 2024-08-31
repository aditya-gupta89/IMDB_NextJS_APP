"use client"
import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme ,systemTheme} = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="mx-6  text-xl cursor-pointer">{mounted && currentTheme==='dark'?
      <MdLightMode className=" hover:text-amber-400" onClick={() => setTheme("light")} /> :
      <MdDarkMode className=" hover:text-amber-400" onClick={() => setTheme("dark")} />}
    </div>
  );
};

export default DarkModeToggle;
