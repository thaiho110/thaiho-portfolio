import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center text-center min-h-screen px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-1"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2 "> Thai</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3"> Ho</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        I am a highly motivated final year student in Software Engineering with a strong foundation in front-end development. Experienced in building project features complex logic, routing and API synchronization. Eager to learn and apply my skills and passions on new platforms and make impact on real world projects.
                    </p>
                    <div className="mt-6 opacity-0 animate-fade-in-delay-4">
                        <a href="#project" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-fade-in-delay-4">
                <span className="mb-2 text-sm text-muted-foreground animate-bounce">
                    Scroll Down
                </span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    );
}