import { useState } from "react";

export type Theme = 'dark' | 'light'

function useCreateThemeContext() {
	const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => setTheme(
        prev => prev === 'light'
          ? 'dark'
          : 'light'
      )

    return {
        theme,
        toggleTheme
    }
}

export default useCreateThemeContext