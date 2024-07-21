'use client'

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

	return (
		<div className="bg-background text-primary-green" >
			The current theme is: {theme}
			<br />
			<button onClick={() => setTheme('light')}>Light Mode</button>
			<br />
			<button onClick={() => setTheme('dark')}>Dark Mode</button>
		</div>
	);
};

export default ThemeToggleComponent;