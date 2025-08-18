"use client";

import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
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
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
          {/* Email Card */}
        <div className="gradient-border p-6 card-hover max-w-sm">
          <div className="flex items-center gap-4">
            {/* Icon di kiri */}
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            {/* Teks rata kiri di sebelah icon */}
            <div className="text-left">
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">dimasmg2017@gmail.com</p>
            </div>
          </div>
        </div>


            {/* Location Card */}
          <div className="gradient-border p-6 card-hover max-w-sm">
            <div className="flex items-center gap-4">
              {/* Icon di kiri */}
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              {/* Teks rata kiri di sebelah icon */}
              <div className="text-left">
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Purworejo, Central Java</p>
              </div>
            </div>
          </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-semibold mb-4 text-center">Connect With Me</h3>
              <div className="flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/pratamadimaas/" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a href="https://www.instagram.com/pratama_dimaas/" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="gradient-border p-8 card-hover">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Send Me a <span className="text-primary">Message</span>
              </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      onClick={handleSubmit}
                      className="cosmic-button w-full md:w-auto px-8 py-3 font-semibold flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};