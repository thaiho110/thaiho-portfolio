import { Code, Cpu, Microchip } from "lucide-react";

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
                    <h3 className="text-xl font-semibold">Passionate Embedded Software Engineer</h3>
                    <p className="text-muted-foreground text-left pl-2">
                        I am a passionate advocate for leveraging IoT solutions to enhance home management, improve living quality, and promote environmental sustainability. My primary focus is on creating smart, connected systems that make a tangible difference in daily life and for the planet
                    </p>
                    <p className="text-muted-foreground text-left pl-2">
                        I thrive on learning and implementing new technologies, with a particular focus on software development and embedded systems. This continuous exploration allows me to stay at the forefront of innovation and apply modern solutions to complex challenges
                    </p>
                    <p className="text-muted-foreground text-left pl-2">
                        To further bridge the gap between embedded hardware and intelligent systems, I am currently self-learning Python. My goal is to implement AI and Machine Learning models to create more autonomous and predictive IoT applications 
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a> 

                        <a 
                        href="/HoQuocThai_CV.pdf" 
                        download="HoQuocThai_CV.pdf"
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
                                   Embedded Software Engineer 
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    Proficient in C/C++ programming and familiar with different communication protocols and RTOS concepts
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
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
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Cpu className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold mb-1">
                                   Firmware and System Integration
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                   Developing and integrating firmware for various microcontrollers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}