import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skill", href: "#skill"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 2);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? ("py-2 bg-background/80 backdrop-blur-lg shadow-xs") : ("py-5 bg-background")
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Thai Ho</span> Portfolio
                    </span>
                </a>

                {/* desktop */}
                <div className="hidden md:flex space-x-8 text-foreground font-medium">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                    ))}
                </div>

                    
                {/* mobile */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md text-foreground/80 hover:text-primary transition-colors duration-300 z-50">
                    {isMenuOpen ? <X size={24}/>: <Menu size={24}/>}
                </button>

                <div className={cn("fixed inset-2 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-foreground font-medium text-2xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}