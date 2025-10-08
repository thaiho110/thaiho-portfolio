import { Code, Cpu, Github, Microchip } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3 className="text-xl font-semibold">Passionate Software Engineer</h3>
                    <p className="text-muted-foreground text-left pl-2">
                        I am a passionate software engineer. I love finding solutions to different world problems using technological advancement 
                    </p>
                    <p className="text-muted-foreground text-left pl-2">
                        I thrive on learning and implementing new technologies, with a particular focus on software development. This continuous exploration allows me to stay at the forefront of innovation and apply modern solutions to tackle complex challenges
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a> 

                        <a 
                        href="/Ho_Quoc_Thai_CV.pdf" 
                        download="Ho_Quoc_Thai_CV.pdf"
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center">
                            {" "}
                            Download CV
                        </a>
                    </div>
                    
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold mb-1">
                                   Software Engineer 
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    Proficient in JavaScript, ReactJS and TypeScript, building scalable and maintainable web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Microchip className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold mb-1">
                                   Micro Controller Programming
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    Experience with different mcu such as STM32, ESP32, and Arduino.
                                </p>
                            </div>
                        </div>
                    </div> */}
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Github className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold mb-1">
                                    Version Control (Git & GitHub)
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    Familiar with using Git for branching, merging, pull requests, and collaborative workflows, and GitHub for repository hosting, code review, and CI integrations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}