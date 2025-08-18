import React, { useRef, useEffect, useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Building } from 'lucide-react';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "High School",
      school: "SMA Negeri 1 Purworejo",
      year: "2014 - 2017",
      location: "Purworejo, Indonesia"
    },
    {
      degree: "Informatics",
      school: "Universitas Sebelas Maret (UNS)",
      year: "2017 - 2018",
      location: "Surakarta, Indonesia"
    },
    {
      degree: "Diploma I Kebendaharaan Negara",
      school: "Politeknik Keuangan Negara STAN",
      year: "2018 - 2019",
      location: "Jakarta, Indonesia"
    },
    {
      degree: "Diploma III Manajemen Aset (Alih Program)",
      school: "Politeknik Keuangan Negara STAN",
      year: "2022 - 2024",
      location: "Jakarta, Indonesia"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="education"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Visual Elements */}
          <div className={`transition-all duration-1000 lg:sticky lg:top-24 space-y-8 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            
            {/* First 3D Visual Element - Education Timeline */}
            <div className="relative w-full h-80 flex items-center justify-center">
              <div className="relative">
                {/* Main Circle */}
                <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full shadow-2xl flex items-center justify-center relative">
                  
                  {/* Graduation Cap Center */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>

                  {/* Floating Years */}
                  <div className="absolute -top-6 left-8 text-xs font-bold text-primary bg-background/80 px-2 py-1 rounded-full shadow-md">
                    2014
                  </div>
                  <div className="absolute top-8 -right-8 text-xs font-bold text-primary bg-background/80 px-2 py-1 rounded-full shadow-md">
                    2018
                  </div>
                  <div className="absolute -bottom-6 right-8 text-xs font-bold text-primary bg-background/80 px-2 py-1 rounded-full shadow-md">
                    2024
                  </div>
                  <div className="absolute bottom-8 -left-8 text-xs font-bold text-primary bg-background/80 px-2 py-1 rounded-full shadow-md">
                    2019
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full"></div>
                    <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>

                {/* Text Below */}
                <div className="text-center mt-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">Education Timeline</h3>
                  <p className="text-sm text-muted-foreground">10 Years Journey</p>
                </div>
              </div>
            </div>

            {/* Second 3D Visual Element - Achievement Stats */}
            <div className={`relative w-full h-80 flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="relative">
                {/* Hexagon Container */}
                <div className="relative w-48 h-48">
                  {/* Background Hexagon */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 transform rotate-12 rounded-3xl shadow-2xl"></div>
                  <div className="absolute inset-2 bg-gradient-to-tl from-green-500/20 to-yellow-500/20 transform -rotate-6 rounded-3xl shadow-xl"></div>
                  
                  {/* Center Content */}
                  <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex flex-col items-center justify-center shadow-lg backdrop-blur-sm">
                    <Award className="w-12 h-12 text-primary mb-2 animate-bounce" />
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-xs text-muted-foreground text-center">Institutions</div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-4 left-8 p-2 bg-blue-500/80 rounded-full shadow-lg animate-float">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute top-8 -right-4 p-2 bg-purple-500/80 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-4 right-8 p-2 bg-green-500/80 rounded-full shadow-lg animate-float" style={{animationDelay: '2s'}}>
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute bottom-8 -left-4 p-2 bg-yellow-500/80 rounded-full shadow-lg animate-float" style={{animationDelay: '3s'}}>
                    <Award className="w-4 h-4 text-white" />
                  </div>

                  {/* Pulsing Rings */}
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-4 border border-primary/30 rounded-full animate-pulse"></div>
                </div>

                {/* Text Below */}
                <div className="text-center mt-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">Academic Journey</h3>
                  <p className="text-sm text-muted-foreground">SHS → UNS → STAN</p>
                </div>
              </div>
            </div>

          </div>

          {/* Education Timeline - Right Side */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index < educationData.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-primary/20"></div>
                  )}
                  
                  {/* Education Card */}
                  <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                      {/* Timeline Dot & Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="p-3 rounded-full bg-primary/10 border-2 border-primary/20">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        {/* Timeline dot */}
                        <div className="absolute -right-1 -top-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-foreground mb-1">
                              {edu.degree}
                            </h4>
                            <p className="text-primary font-semibold">
                              {edu.school}
                            </p>
                          </div>
                          
                          {/* Year & Location */}
                          <div className="flex flex-col sm:text-right text-sm text-muted-foreground space-y-1 mt-2 sm:mt-0">
                            <div className="flex items-center gap-1 sm:justify-end">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">{edu.year}</span>
                            </div>
                            <div className="flex items-center gap-1 sm:justify-end">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .gradient-border {
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(45deg, rgba(var(--primary), 0.3), rgba(var(--primary), 0.1)) border-box;
          border: 2px solid transparent;
          border-radius: 1rem;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
};

export default EducationSection;