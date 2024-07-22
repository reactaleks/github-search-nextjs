'use client'
import SunIconComponent from "@/public/assets/icon-sun";
import MoonIconComponent from "@/public/assets/icon-moon";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggleComponent = () => {
    const [mounted, setMounted] = useState(false);
	const {systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme

    useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	console.log(systemTheme)


	if(currentTheme == 'dark') {
		return (
			<button onClick={() => setTheme('light')} className="flex uppercase w-[78px] h-[20px] justify-between items-center font-spacebold font-bold text-darkModeWhite text-[13px] tracking-[2.5px] group hover:text-[#90A4D4]">Light <SunIconComponent className="fill-white group-hover:fill-[#90A4D4]"/></button>
		)
	} else {
		return (
			<button onClick={() => setTheme('dark')} className="flex uppercase w-[78px] h-[20px] justify-between items-center font-spacebold font-bold text-darkblue text-[13px] tracking-[2.5px] group hover:text-darkModeBlack">Dark <MoonIconComponent className="fill-darkblue group-hover:fill-darkModeBlack"/></button>
		)
	}
};

export default ThemeToggleComponent;