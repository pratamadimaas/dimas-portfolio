"use client";

import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Zap, Star, Sparkles, CircuitBoard, Hexagon } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Futuristic Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-16 left-12 w-16 h-16 border-2 border-primary/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-32 right-20 w-12 h-12 border border-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-primary/15 rotate-12 animate-float"></div>
        <div className="absolute bottom-16 right-1/3 w-8 h-8 bg-primary/10 rotate-45 animate-spin-reverse"></div>
        
        {/* Hexagonal Patterns */}
        <div className="absolute top-1/4 left-8">
          <Hexagon className="h-6 w-6 text-primary/20 animate-pulse delay-300" />
        </div>
        <div className="absolute top-1/3 right-16">
          <Hexagon className="h-8 w-8 text-primary/15 animate-pulse delay-700" />
        </div>
        <div className="absolute bottom-1/4 left-1/3">
          <Hexagon className="h-5 w-5 text-primary/25 animate-pulse delay-1000" />
        </div>
        
        {/* Circuit Lines */}
        <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-primary/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-primary/30 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-0 w-20 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent animate-pulse delay-800"></div>
        <div className="absolute top-1/3 right-0 w-16 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent animate-pulse delay-1200"></div>
        
        {/* 3D Floating Particles */}
        <div className="absolute top-20 right-32 w-2 h-2 bg-primary/50 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-24 w-1.5 h-1.5 bg-primary/40 rounded-full animate-ping delay-600"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-400"></div>
        <div className="absolute bottom-20 left-1/2 w-2.5 h-2.5 bg-primary/30 rounded-full animate-bounce-slow delay-800"></div>
        
        {/* Holographic Elements */}
        <div className="absolute top-40 left-1/3 w-24 h-24 border border-primary/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-24 right-1/4 w-18 h-18 border-2 border-primary/15 rounded-full animate-spin-reverse"></div>
        
        {/* Dynamic Lines Network */}
        <svg className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20" viewBox="0 0 100 100">
          <path d="M20,20 L80,30 L60,70 L20,20" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary animate-pulse" />
          <circle cx="20" cy="20" r="2" fill="currentColor" className="text-primary animate-pulse delay-300" />
          <circle cx="80" cy="30" r="2" fill="currentColor" className="text-primary animate-pulse delay-600" />
          <circle cx="60" cy="70" r="2" fill="currentColor" className="text-primary animate-pulse delay-900" />
        </svg>
        
        <svg className="absolute bottom-1/3 right-1/3 w-28 h-28 opacity-15 animate-spin-slow" viewBox="0 0 100 100">
          <path d="M30,15 L70,25 L85,65 L45,85 L15,55 L30,15" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
          <circle cx="30" cy="15" r="1.5" fill="currentColor" className="text-primary" />
          <circle cx="70" cy="25" r="1.5" fill="currentColor" className="text-primary" />
          <circle cx="85" cy="65" r="1.5" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Enhanced Header with 3D Effects */}
        <div className="text-center mb-20 relative">
          {/* Floating Header Ornaments */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex gap-4">
            <Star className="h-4 w-4 text-primary/60 animate-pulse" />
            <CircuitBoard className="h-5 w-5 text-primary/40 animate-pulse delay-300" />
            <Sparkles className="h-4 w-4 text-primary/50 animate-pulse delay-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="relative inline-block">
              Get In 
              <span className="text-primary relative ml-3">
                Touch
                {/* 3D Floating Icon */}
                <div className="absolute -top-3 -right-4 transform rotate-12">
                  <Zap className="h-6 w-6 text-primary/70 animate-bounce-slow" />
                </div>
              </span>
              {/* Multi-layer Underline Effect */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-36 h-2 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm animate-pulse"></div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-primary/80 to-transparent"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-primary"></div>
            </span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Info Cards with 3D Effects */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Email Card with Advanced 3D */}
            <div className="group relative">
              {/* Multi-layer 3D Shadow */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-primary/8 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-primary/12 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              
              <div className="relative p-8 rounded-2xl bg-card border border-primary/20 group-hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:rotate-1">
                {/* Corner Ornaments */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-6">
                  <div className="relative">
                    {/* Glowing Ring Effect */}
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                      <Mail className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                      {/* Animated Ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-500">Email</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">dimasmg2017@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card with Advanced 3D */}
            <div className="group relative">
              {/* Multi-layer 3D Shadow */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-primary/8 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-primary/12 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              
              <div className="relative p-8 rounded-2xl bg-card border border-primary/20 group-hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:-rotate-1">
                {/* Corner Ornaments */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-6">
                  <div className="relative">
                    {/* Glowing Ring Effect */}
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                      <MapPin className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                      {/* Animated Ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-500">Location</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">Purworejo, Central Java</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="pt-8 relative">
              {/* Floating Ornament */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
              </div>
              
              <h3 className="font-bold text-xl mb-6 text-center relative">
                Connect With Me
                {/* Underline Effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-primary/60 animate-pulse"></div>
              </h3>
              
              <div className="flex justify-center gap-6">
                <a href="https://www.linkedin.com/in/pratamadimaas/" className="group relative">
                  {/* 3D Shadow */}
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                  <div className="relative p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                    <Linkedin className="h-6 w-6 text-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </a>
                
                <a href="https://www.instagram.com/pratama_dimaas/" className="group relative">
                  {/* 3D Shadow */}
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                  <div className="relative p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                    <Instagram className="h-6 w-6 text-primary group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form with 3D Effects */}
          <div className="lg:col-span-2 relative">
            {/* Form Background Ornaments */}
            <div className="absolute -top-8 -right-8 w-16 h-16 border border-primary/10 rotate-45 animate-spin-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-primary/15 rounded-full animate-pulse"></div>
            
            {/* Multi-layer 3D Card */}
            <div className="relative group">
              {/* Enhanced Shadow Layers */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-6 translate-y-6 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-primary/8 rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-primary/12 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
              
              <div className="relative p-10 rounded-3xl bg-card border border-primary/20 group-hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                {/* Corner Tech Ornaments */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Enhanced Name Input */}
                    <div className="relative group/input">
                      <label className="block text-sm font-semibold mb-3 text-foreground group-hover/input:text-primary transition-colors duration-300">Full Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 rounded-xl border-2 border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 backdrop-blur-sm hover:border-primary/50"
                          placeholder="Enter your name"
                        />
                        {/* Input Glow Effect */}
                        <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover/input:border-primary/20 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Enhanced Email Input */}
                    <div className="relative group/input">
                      <label className="block text-sm font-semibold mb-3 text-foreground group-hover/input:text-primary transition-colors duration-300">Email Address</label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 rounded-xl border-2 border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 backdrop-blur-sm hover:border-primary/50"
                          placeholder="Enter your email"
                        />
                        {/* Input Glow Effect */}
                        <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover/input:border-primary/20 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Subject Input */}
                  <div className="relative group/input">
                    <label className="block text-sm font-semibold mb-3 text-foreground group-hover/input:text-primary transition-colors duration-300">Subject</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 backdrop-blur-sm hover:border-primary/50"
                        placeholder="What's this about?"
                      />
                      {/* Input Glow Effect */}
                      <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover/input:border-primary/20 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Enhanced Message Textarea */}
                  <div className="relative group/input">
                    <label className="block text-sm font-semibold mb-3 text-foreground group-hover/input:text-primary transition-colors duration-300">Message</label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-6 py-4 rounded-xl border-2 border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none backdrop-blur-sm hover:border-primary/50"
                        placeholder="Tell me about your project or idea..."
                      />
                      {/* Input Glow Effect */}
                      <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover/input:border-primary/20 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Enhanced Submit Button with 3D Effect */}
                  <div className="pt-6 flex justify-center">
                    <div className="relative group/button">
                      {/* Button Shadow Layers */}
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-3 translate-y-3 group-hover/button:translate-x-4 group-hover/button:translate-y-4 transition-transform duration-300"></div>
                      <div className="absolute inset-0 bg-primary/30 rounded-2xl transform translate-x-1.5 translate-y-1.5 group-hover/button:translate-x-2 group-hover/button:translate-y-2 transition-transform duration-300"></div>
                      
                     
                  {/* Changed from <button> to <a> tag */}
                  <a
                    href="https://instagram.com/pratama_dimaas" // Link to Instagram
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security best practice
                    className="relative px-12 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg rounded-2xl hover:from-primary/90 hover:to-primary flex items-center gap-3 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 hover:scale-105 border-2 border-primary/30 hover:border-primary/60"
                  >
                    <Send className="h-6 w-6 group-hover/button:rotate-12 group-hover/button:scale-110 transition-transform duration-300" />
                    <span>Send Message</span>
                    {/* Button Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                  </a>
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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
