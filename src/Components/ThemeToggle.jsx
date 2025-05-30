import {Sun} from "lucide-react";
import {Moon} from "lucide-react";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils"

export const ThemeToggle = () => {
    const[isDarkMode, setIsDarkMode] = useState(true);

      useEffect(() => { 
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
          setIsDarkMode(true);
          document.documentElement.classList.add("dark");
        } else if (storedTheme === "light") {
          setIsDarkMode(false);
          document.documentElement.classList.remove("dark");
        } else {
          // No theme stored yet, default to dark mode
          localStorage.setItem("theme", "dark");
          setIsDarkMode(true);
          document.documentElement.classList.add("dark");
        }
    }, []);

    
    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            // Reset to light mode
            // This is a workaround to ensure the theme is applied immediately
            setIsDarkMode(false);
        } else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }
    return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};