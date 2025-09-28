
import React, { useState } from "react";
import { cn } from "../lib/utils";
const skillData = [
    {name: "C/C++", level: 70, category: "Embedded"},
    {name: "Python", level: 50, category: "Embedded"},
    {name: "Embedded Systems", level: 70, category: "Embedded"},
    {name: "Git/GitHub", level: 70, category: "Tools"},
    {name: "ReactJS", level: 60, category: "Other"},
    {name: "Docker", level: 40, category: "Tools"},
    {name: "Linux", level: 70, category: "Other"},
    {name: "RTOS", level: 65, category: "Embedded"},
    {name: "Anaconda", level: 30, category: "Tools"},

]

const categories = ["All", "Embedded", "Other", "Tools"];

export const Skill = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skillData.filter(skill =>
        activeCategory === "All" ? true : skill.category === activeCategory
    );



    return(
        <section id="skill" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>
                <h3 className="mb-4 font-semibold">All of my skill both in Embedded Software Engineering and others</h3>
                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {categories.map((category, key) => (
                        <button 
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/50 text-muted-foreground hover:bg-primary/10"
                            )}
                            key={key}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-small text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}