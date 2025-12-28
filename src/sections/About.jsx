import { Code2, MonitorCog, GraduationCap, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Learning by Building",
    description:
      "Growing through hands-on work. One step at a time.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working and building off of teams' ideas to bring ideas to life.",
  },
  {
    icon: MonitorCog,
    title: "Whole System View",
    description:
      "Understanding how frontend, backend, and data work together.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-white">
              Exploring ideas
              <span className="font-serif italic font-normal text-secondary-foreground">
                {" "}
                through software
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
              Hi, I’m Guru Uppala. I completed my undergraduate degree in Computer Science at George Mason University in Winter 2025, and I’m currently pursuing my Master’s in Computer Science with a concentration in Machine Learning.
              </p>
              <p>
              I enjoy learning new technologies and building things. Most of my work revolves around full-stack development and experimenting with AI-driven systems. That could be building web applications, working with real-time features, or exploring how machine learning fits into real software. I’ve worked with technologies like Java, Python, JavaScript, React, and Node.js, and I like understanding how systems work end to end.
              </p>
              <p>
              Through my experiences at EduVerse and Glocal, I’ve learned how software is built in collaborative environments and why clean, maintainable code matters. I’m still learning, improving, and figuring things out as I go, but that’s something I genuinely enjoy about software engineering.
              </p>
              <p>
              Outside of coding, I spend a lot of time watching movies and listening to music. If you’re curious, you can find me on <a href = "https://letterboxd.com/Guru1802/" target="_blank" rel="noopener noreferrer"><span class = "text-primary glow-text cursor-pointer">Letterboxd</span></a> or <a href = "https://open.spotify.com/user/5pditt5k4rz1qjk1c6lcdxumg?si=861288454f184d79" target="_blank" rel="noopener noreferrer"><span class = "text-primary glow-text cursor-pointer">Spotify</span></a>.
              </p>
              <p>
              Explore the rest of my portfolio to see what I’ve been learning and building.
              </p>
            </div>

            
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};