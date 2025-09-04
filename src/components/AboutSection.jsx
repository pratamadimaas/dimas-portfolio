import { Code, Database, Monitor, Sparkles, Zap, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-500"></div>
      </div>

      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
            <span className="relative inline-block">
              About 
              <span className="text-primary relative">
                Me
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-4 w-4 text-primary/70 animate-pulse" />
                </div>
              </span>
              {/* Glowing underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-pulse"></div>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative">
            {/* Floating accent */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-primary/20 rounded-lg rotate-45 animate-spin-slow"></div>
            
            <div className="relative group">
              {/* 3D Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500">
                <div className="absolute top-4 right-4">
                  <Globe className="h-5 w-5 text-primary/50 animate-spin-slow" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-6 relative">
                  <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Web Developer & Data Analytics Enthusiast
                  </span>
                  <div className="absolute -right-6 top-1">
                    <Zap className="h-4 w-4 text-primary/70 animate-pulse" />
                  </div>
                </h3>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed relative pl-4">
                    <div className="absolute left-0 top-1 w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
                    I build responsive, secure, and efficient web applications using modern frameworks. 
                    My focus is on creating solutions that are not just functional, 
                    but also provide a great user experience.
                  </p>

                  <p className="text-muted-foreground leading-relaxed relative pl-4">
                    <div className="absolute left-0 top-1 w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-300"></div>
                    I also enjoy the challenge of making sense of data. 
                    I leverage my skills in both development and data analysis to build intelligent applications 
                    that provide valuable insights and support strategic decision-making.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a href="#contact" className="group relative cosmic-button transform hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      Get In Touch
                      <Sparkles className="h-4 w-4 group-hover:animate-spin transition-transform duration-300" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Futuristic Cards */}
          <div className="grid grid-cols-1 gap-6 relative">
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 border border-primary/20 rounded-lg rotate-45 animate-bounce"></div>

            {/* Web Development Card */}
            <div className="group relative transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500">
              {/* 3D Shadow Layers */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              
              <div className="relative gradient-border p-6 card-hover bg-card/90 backdrop-blur-sm">
                <div className="flex items-start gap-4 relative">
                  {/* Animated Icon Container */}
                  <div className="relative p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Code className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>
                  
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-lg mb-2 relative">
                      Web Development
                      <div className="absolute -right-4 -top-1">
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                      </div>
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Building responsive and secure web applications with modern
                      technologies.
                    </p>
                    
                    {/* Progress Bar Effect */}
                    <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary/50 to-primary w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Analytics Card */}
            <div className="group relative transform hover:-translate-y-3 hover:-rotate-1 transition-all duration-500">
              {/* 3D Shadow Layers */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              
              <div className="relative gradient-border p-6 card-hover bg-card/90 backdrop-blur-sm">
                <div className="flex items-start gap-4 relative">
                  {/* Animated Icon Container */}
                  <div className="relative p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Database className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>
                  
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-lg mb-2 relative">
                      Data Analytics
                      <div className="absolute -right-4 -top-1">
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Analyzing and visualizing data to uncover insights and
                      support decision-making.
                    </p>
                    
                    {/* Progress Bar Effect */}
                    <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary/50 to-primary w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Development & Automation Card */}
            <div className="group relative transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500">
              {/* 3D Shadow Layers */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              
              <div className="relative gradient-border p-6 card-hover bg-card/90 backdrop-blur-sm">
                <div className="flex items-start gap-4 relative">
                  {/* Animated Icon Container */}
                  <div className="relative p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Monitor className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>
                  
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-lg mb-2 relative">
                      Desktop Development & Automation
                      <div className="absolute -right-4 -top-1">
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-400"></div>
                      </div>
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Creating desktop applications and automating workflows using
                      Python and VBA Excel to boost productivity.
                    </p>
                    
                    {/* Progress Bar Effect */}
                    <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary/50 to-primary w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--primary), 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          width: 100%;
          height: 100%;
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
};
