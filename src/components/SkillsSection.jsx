import { useState } from "react";
import { Sparkles, Zap, Code2, Wrench, BarChart3, Layers } from "lucide-react";

const skills = [
  // Tech Stack (Programming + Frameworks)
  { name: "HTML/CSS", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PHP", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "SQL", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "TypeScript", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },

  { name: "React.js", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Express.js", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Angular", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Laravel", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Tailwind CSS", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", category: "tech-stack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },

  // Tools
  { name: "VS Code", category: "tools", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "GitHub", category: "tools", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Postman", category: "tools", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "XAMPP", category: "tools", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  { name: "MongoDB", category: "tools", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", category: "tools", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },

  // Data Analytics
  { name: "Pandas", category: "data-analytics", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" },
  { name: "NumPy", category: "data-analytics", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", category: "data-analytics", image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
  { name: "Tableau", category: "data-analytics", image: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" },
  { name: "VBA", category: "data-analytics", image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
];

const categories = [
  { key: "all", label: "All", icon: Layers },
  { key: "tech-stack", label: "Tech Stack", icon: Code2 },
  { key: "tools", label: "Tools", icon: Wrench },
  { key: "data-analytics", label: "Data Analytics", icon: BarChart3 },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      {/* Subtle Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-20 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-primary/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-16 w-1 h-1 bg-primary/30 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
            <span className="relative inline-block">
              My 
              <span className="text-primary relative ml-2">
                Skills
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-4 w-4 text-primary/70 animate-pulse" />
                </div>
              </span>
              {/* Glowing underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-pulse"></div>
            </span>
          </h2>
        </div>

        {/* Futuristic Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative">
          {/* Floating accent lines */}
          <div className="absolute -top-4 left-1/4 w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute -bottom-4 right-1/4 w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          {categories.map((cat, key) => {
            const IconComponent = cat.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "group relative px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105",
                  "border border-primary/20 backdrop-blur-sm",
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary/70 text-foreground hover:bg-secondary hover:border-primary/40"
                )}
              >
                {/* 3D Background layers */}
                {activeCategory === cat.key && (
                  <>
                    <div className="absolute inset-0 bg-primary/20 rounded-full transform translate-x-1 translate-y-1 -z-10"></div>
                    <div className="absolute inset-0 bg-primary/10 rounded-full transform translate-x-2 translate-y-2 -z-20"></div>
                  </>
                )}
                
                {/* Glowing effect for active button */}
                {activeCategory === cat.key && (
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                )}
                
                <div className="relative flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{cat.label}</span>
                  {activeCategory === cat.key && (
                    <Zap className="h-3 w-3 animate-pulse" />
                  )}
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300"></div>
              </button>
            );
          })}
        </div>

        {/* Futuristic Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 relative">
          {/* Grid accent elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border border-primary/10 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute -bottom-8 -right-8 w-12 h-12 border-2 border-primary/10 rounded-full animate-pulse"></div>
          
          {filteredSkills.map((skill, key) => (
            <div
              key={`${skill.name}-${activeCategory}`}
              className="group relative transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500"
              style={{
                animationDelay: `${key * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* 3D Card Shadow Layers */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              
              <div className="relative bg-card/90 backdrop-blur-sm p-6 rounded-2xl shadow-xs card-hover border border-primary/10 group-hover:border-primary/30 transition-all duration-500">
                {/* Floating corner accent */}
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
                </div>
                
                {/* Tech icon with glow effect */}
                <div className="relative mb-4 flex justify-center">
                  <div className="relative p-4 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Animated ring */}
                    <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  
                  {/* Hovering glow effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>

                {/* Skill name with accent */}
                <h3 className="font-semibold text-lg text-center relative">
                  <span className="relative">
                    {skill.name}
                    {/* Underline animation */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
                  </span>
                </h3>

                {/* Skill level indicator */}
                <div className="mt-3 h-1 bg-muted/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary/60 to-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-200"
                  ></div>
                </div>

                {/* Category badge */}
                <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {categories.find(c => c.key === skill.category)?.label.split(' ')[0]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--primary), 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
          width: 100%;
          height: 100%;
          animation: grid-move 25s linear infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
};
