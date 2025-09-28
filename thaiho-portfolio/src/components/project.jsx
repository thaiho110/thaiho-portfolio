import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Bare Metal OS and App development for Micro controller using C/C++",
        description: "Developed a bare-metal operating system and applications for microcontrollers using C/C++. Implemented core functionalities such as task scheduling, memory management, and peripheral interfacing. Created sample applications to demonstrate the OS capabilities, including sensor data acquisition and communication protocols.",
        image: "projects/project1.webp",
        tags: ["C", "ARM Assembly", "Bare-Metal Development", "ARMv8 Architecture", "QEMU", "GCC", "UART", "Frame buffer Drivers"],
        githubURL: "https://github.com/mintdunno/Embedded_3_group",
        link_type: "github"

    },
    {
        id: 2,
        title: "IoT Weather Station with ESP32 and MQTT",
        description: "Designed and implemented an IoT weather station using ESP32 microcontroller to monitor environmental parameters such as temperature, humidity, and atmospheric pressure. Utilized MQTT protocol for real-time data transmission to a cloud server, enabling remote access and monitoring via a web dashboard.",
        image: "projects/project-embedded.jpg",
        tags: ["C++","ESP32", "I2C","IoT", "MQTT", "Sensors", "Cloud Integration", "Web Dashboard"],
        githubURL: "https://github.com/thaiho110/ESP32-Weather-Station",
        link_type: "github"
    },
    {
        id: 3,
        title: "Mixed Reality (MR) In Industrial Robot Performance Monitoring & Optimization",
        description: "Developed a Mixed Reality (MR) application for industrial robot performance monitoring and optimization.",
        image: "projects/project-embedded.jpg",
        tags: ["C#","Unity", "HoloLens 2","Mixed Reality", "Industrial Automation", "Performance Monitoring", "Optimization"],
        githubURL: "https://www.rmitvn-showcase.com/infinityspark",
        link_type: "link"
    },
]

export const Project = () => {
    return(
        <section id="project" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my notable projects that showcase my skills and experience in embedded software engineering and related technologies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-11"/>
                            </div>

                            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagKey) => (

                                        <span className="border px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground" key={tagKey} >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a  href={project.githubURL} 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target={project.githubURL}
                                        >
                                            {project.link_type === "link" ? (
                                                <ExternalLink size={20} className="h-6 w-6 text-primary hover:text-primary-foreground transition-colors duration-300" onClick={() => window.open(project.githubURL, "_blank")}/>
                                            ) : (
                                                <Github size={20} className="h-6 w-6 text-primary hover:text-primary-foreground transition-colors duration-300" onClick={() => window.open(project.githubURL, "_blank")}/>
                                            )}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/thaiho110" target="https://github.com/thaiho110">
                        Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}