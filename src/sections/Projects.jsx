import {Github, ArrowUpRight} from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";
const projects = [
    {
        title: "Patriot Parker",
        description: "A mobile-friendly web application designed to help George Mason University students find available parking in real time. The application allows users to view parking availability by lot or deck and update the system when they park or leave, keeping spot counts accurate. Developed with an emphasis on usability, data consistency, and collaboration across frontend and backend components.", 
        image: "/projects/patriot_parker.png",
        tags: ["Java", "Javascript", "HTML/CSS", "SQL"],
        github: "https://github.com/Guru1802/Patriot-Parker",
        live: "https://github.com/Guru1802/Patriot-Parker"
    },
    {
        title: "SayHi",
        description: "A full-stack web application that enables real-time communication between users. The platform supports instant messaging, user presence, and typing indicators, providing a responsive and interactive chat experience. Built with a focus on reliability, scalability, and clean system design.", 
        image: "/projects/sayhi.png",
        tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Guru1802/SayHi",
        live: "https://sayhi-ej3k.onrender.com"
    },

    

];
export const Projects = () => {
    return (
        <section id="projects" className = "py-32 relative overflow-hidden">
            {/*Background glows*/}
            <div className = "absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className = "absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className = "container mx-auto px-6 relative z-10"> 
                {/*Section Header*/}
                <div className = "text-center mx-auto max-w-3xl mb-16">
                    <span className = "text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className = "text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-white foreground">
                        My
                        <span className = "font-serif italic font-normal text-primary"> Projects</span>
                    </h2>
                    
                </div>

                {/*Projects Grid*/}
                <div className = "grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className = "group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style = {{animationDelay: `${(index + 1) * 100}ms`}}>
                            {/*Image */}
                            <div className = "relative overflow-hidden aspect-video">
                               <img src={project.image} alt={project.title} className = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                               <div className = "absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                               {/*Overlay links */}
                               <div className = "absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    
                                    <a href= {project.github} target="_blank" rel="noopener noreferrer" className = "p-3 rounded-full glass hover:bg-primary hover:text-primary=foreground transition">
                                        <Github className = "w-5 h-5"/>
                                    </a>
                               </div>
                            </div>

                            {/*Content */}
                            <div className = "p-6 space-y-4">
                                <div className = "flex items-start justify-between">
                                    <h3 className = "text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <a href = {project.live} target="_blank" rel="noopener noreferrer">
                                    <ArrowUpRight className = "w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/>
                                    </a>
                                </div>
                                <p className = "text-muted-foreground text-sm">{project.description}</p>
                                <div className = "flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key = {tagIndex} className = "px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/*View all CTA*/}
                <div className = "mt-16 flex justify-center">
                    <a href= "https://github.com/Guru1802"
                         target="_blank"
                         rel="noopener noreferrer">
                    <AnimatedBorderButton className = "text-center mt-12 animate-fade-in animation-delay-500">
                        View All Projects
                        <ArrowUpRight className = "w-5 h-5" />
                    </AnimatedBorderButton>
                    </a>
                    
                </div>

            </div>
        </section>
    );
};