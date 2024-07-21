'use client'
import SunIconComponent from "@/public/assets/icon-sun";
import MoonIconComponent from "@/public/assets/icon-moon";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggleComponent = () => {
    const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

    useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	if(theme == 'dark') {
		return (
			<button onClick={() => setTheme('light')} className="flex uppercase w-[78px] h-[20px] justify-between items-center font-spacebold font-bold text-darkModeWhite text-[13px] tracking-[2.5px]">Light <SunIconComponent className="fill-white"/></button>
		)
	} else {
		return (
			<button onClick={() => setTheme('dark')} className="flex uppercase w-[78px] h-[20px] justify-between items-center font-spacebold font-bold text-darkblue text-[13px] tracking-[2.5px]">Dark <MoonIconComponent className="fill-darkblue"/></button>
		)
	}
};

export default ThemeToggleComponent;