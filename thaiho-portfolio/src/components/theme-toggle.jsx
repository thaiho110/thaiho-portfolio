import { Moon, Sun } from 'lucide-react';
import {useEffect, useState} from 'react';
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
    const [IsDarkMode, SetIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.remove('dark');
            SetIsDarkMode(true);
        } else {
            document.documentElement.classList.add('dark');
            SetIsDarkMode(false);
        }
    },[]);
    
    const toggleTheme = () => {
        if (IsDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            SetIsDarkMode(false);
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            SetIsDarkMode(true);
        }
    }

    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
        {IsDarkMode ? 
            (<Sun className='h-6 w-6 text-yellow'/>)
            : 
            (<Moon className='h-6 w-6 text-blue-900'/>)
        }
        </button>
}