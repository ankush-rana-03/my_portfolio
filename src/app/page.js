"use client"
import Head from 'next/head';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload, FaCode, FaDatabase, FaReact } from "react-icons/fa";
import { useEffect, useState, useRef, memo } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X, ExternalLink } from "lucide-react";

// Water Ripple Effect Component - Memoized for performance
const WaterRipple = memo(() => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const ripplesRef = useRef([]);
  const animationIdRef = useRef(null);
  const lastMouseMoveRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    contextRef.current = context;
    
    // Throttled mouse move handler for better performance
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMouseMoveRef.current < 50) return; // Throttle to 20fps
      lastMouseMoveRef.current = now;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Limit number of ripples for performance
      if (ripplesRef.current.length < 10) {
        ripplesRef.current.push({
          x,
          y,
          radius: 0,
          maxRadius: Math.random() * 80 + 40,
          speed: Math.random() * 1.5 + 0.5,
          opacity: 1,
          color: `hsl(${200 + Math.random() * 40}, 70%, 60%)`
        });
      }
    };
    
    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Animation loop with performance optimization
    const animate = () => {
      const context = contextRef.current;
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.radius += ripple.speed;
        ripple.opacity -= 0.015; // Slower fade for smoother effect
        
        if (ripple.opacity > 0) {
          context.beginPath();
          context.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
          context.strokeStyle = `rgba(14, 165, 233, ${ripple.opacity * 0.25})`;
          context.lineWidth = 1.5;
          context.stroke();
          
          // Inner ripple
          if (ripple.radius > 10) {
            context.beginPath();
            context.arc(ripple.x, ripple.y, ripple.radius * 0.6, 0, 2 * Math.PI);
            context.strokeStyle = `rgba(56, 189, 248, ${ripple.opacity * 0.15})`;
            context.lineWidth = 1;
            context.stroke();
          }
          
          return true;
        }
        return false;
      });
      
      animationIdRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: 0 }}
    />
  );
});

WaterRipple.displayName = 'WaterRipple';

export default function Home() {

  const navItems = [
    { to: "hero", label: "Home", scroll: true },
    { to: "about", label: "About", scroll: true },
    { to: "skills", label: "Skills", scroll: true },
    { to: "projects", label: "Projects", scroll: true },
  ];

  const socialItems = [
    { href: "https://www.linkedin.com/in/ankush-rana-bb8b3a19a/", label: "LinkedIn", icon: FaLinkedin },
    { href: "https://github.com/ankush-rana-03", label: "GitHub", icon: FaGithub },
  ];

  const [navOpen, setNavOpen] = useState(false);

  useEffect(()=>{
    // Lazy initialize AOS for better performance
    const initAOS = () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        disable: window.innerWidth < 768, // Disable on mobile for better performance
      });
    };

    // Initialize AOS after a small delay to prioritize critical content
    const timer = setTimeout(initAOS, 100);
    
    // Reset scroll position to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Disable browser's scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    return () => clearTimeout(timer);
  },[])

  return (
    <>
      <Head>
        <title>Ankush Rana - MERN Stack Developer | Portfolio</title>
        <meta name="description" content="Professional MERN Stack Developer Portfolio - React, Next.js, Node.js, MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Water Ripple Effect */}
      <WaterRipple />

      {/* Professional Header with Improved Mobile Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-glass border-b border-ocean-bright/20 shadow-lg w-full bg-ocean-deep/95">
        <div className="w-full max-w-7xl mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <ScrollLink
            to="hero"
            smooth
            duration={400}
            className="cursor-pointer text-xl sm:text-2xl font-bold font-poppins text-ocean-pale hover:text-gradient transition-all duration-300 transform hover:scale-105"
            onClick={() => setNavOpen(false)}
          >
            Ankush Rana
          </ScrollLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6 xl:gap-8 text-ocean-pale font-medium font-inter items-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  <ScrollLink
                    to={item.to}
                    smooth
                    duration={400}
                    className="hover:text-ocean-bright cursor-pointer transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full py-2 px-1 text-sm xl:text-base"
                    onClick={() => setNavOpen(false)} 
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
              
              {/* Social buttons aligned with nav items */}
              {socialItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ocean-bright transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full py-2 px-1 inline-flex items-center gap-1 text-sm xl:text-base"
                    onClick={() => setNavOpen(false)}
                  >
                    <item.icon size={16} className="xl:w-4 xl:h-4" />
                    {item.label}
                    <ExternalLink size={12} className="xl:w-3.5 xl:h-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg focus:outline-none transition-all duration-300 z-50 ${navOpen ? "bg-ocean-bright text-ocean-deep shadow-glow" : "bg-transparent text-ocean-pale hover:bg-ocean-medium/20"}`}
            aria-label="Toggle navigation"
          >
            {navOpen ? (
              <X size={24} className="sm:w-7 sm:h-7" />
            ) : (
              <Menu size={24} className="sm:w-7 sm:h-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {navOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-ocean-deep/90 backdrop-blur-sm z-40"
              onClick={() => setNavOpen(false)}
            />
            
            {/* Mobile Navigation Menu */}
            <nav className="lg:hidden fixed inset-y-0 right-0 w-80 sm:w-96 backdrop-blur-glass text-ocean-pale transition-transform duration-300 ease-in-out z-50 shadow-glass border-l border-ocean-bright/20 bg-ocean-deep/95">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-ocean-bright/20">
                  <h3 className="text-lg font-semibold text-gradient font-poppins">Menu</h3>
                  <button
                    onClick={() => setNavOpen(false)}
                    className="p-2 rounded-lg hover:bg-ocean-medium/20 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-6 py-8">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        <ScrollLink
                          to={item.to}
                          smooth
                          duration={400}
                          onClick={() => setNavOpen(false)}
                          className="block hover:text-ocean-bright cursor-pointer transition-all duration-300 py-4 px-4 rounded-xl hover:bg-ocean-medium/20 hover:shadow-glow-hover text-lg font-medium"
                        >
                          {item.label}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>

                  {/* Social Links Section */}
                  <div className="mt-8 pt-8 border-t border-ocean-bright/20">
                    <h4 className="text-sm font-semibold text-ocean-bright mb-4 uppercase tracking-wider">Connect</h4>
                    <ul className="space-y-3">
                      {socialItems.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setNavOpen(false)}
                            className="block hover:text-ocean-bright transition-all duration-300 py-3 px-4 rounded-xl hover:bg-ocean-medium/20 hover:shadow-glow-hover inline-flex items-center gap-3 text-base"
                          >
                            <item.icon size={18} />
                            {item.label}
                            <ExternalLink size={14} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-ocean-bright/20">
                  <p className="text-sm text-ocean-pale/60 text-center">
                    © 2025 Ankush Rana
                  </p>
                </div>
              </div>
            </nav>
          </>
        )}
      </header>
       
      <main className="bg-transparent text-ocean-pale w-full">
        {/* Hero Section with Improved Layout */}
        <section id="hero" className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 pt-24 sm:pt-28 lg:pt-32">
          <div className='text-left w-full lg:w-1/2 space-y-6 sm:space-y-8 lg:pr-8'>
            <div data-aos="fade-right" data-aos-duration="800">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-ocean-pale/80 font-inter">Hello, I'm</h2>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-poppins text-gradient leading-tight">
                Ankush Rana
              </h1>
            </div>
            <div data-aos="zoom-in-right" data-aos-duration="500">
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-ocean-pale font-poppins">
                   I'm a <span className="text-gradient-reverse font-bold">
                   <Typewriter
                      words={['MERN Stack Developer', 'React Specialist', 'Full-Stack Engineer', 'Problem Solver']}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                      />
                       </span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl font-light text-ocean-pale/90 leading-relaxed max-w-2xl font-inter">
                  Crafting scalable and efficient web applications with modern technologies. 
                  Specializing in <span className="text-ocean-bright font-semibold">React</span>, 
                  <span className="text-ocean-bright font-semibold"> Next.js</span>, 
                  <span className="text-ocean-bright font-semibold"> Node.js</span>, and 
                  <span className="text-ocean-bright font-semibold"> MongoDB</span>.
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-6 sm:pt-8">
                  <ScrollLink
                    to="projects"
                    smooth
                    duration={400}
                    className="btn-primary cursor-pointer inline-flex items-center justify-center gap-2 text-center w-full sm:w-auto"
                  >
                    <FaCode />
                    View Projects
                  </ScrollLink>
                  <ScrollLink
                    to="about"
                    smooth
                    duration={400}
                    className="btn-secondary cursor-pointer text-center w-full sm:w-auto inline-flex items-center justify-center"
                  >
                    Learn More
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className='w-full lg:w-1/2 flex justify-center mt-12 sm:mt-16 lg:mt-0'>
            <div className="relative">
              {/* Professional 3D-style developer illustration */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl shadow-glass border border-ocean-bright/30 hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105 overflow-hidden bg-gradient-to-br from-ocean-bright/20 to-ocean-accent/20 backdrop-blur-sm">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-glow">
                      <FaCode className="text-white text-3xl sm:text-4xl" />
                    </div>
                    <div className="space-y-3">
                      <div className="w-32 h-2 bg-gradient-primary rounded-full mx-auto animate-pulse"></div>
                      <div className="w-24 h-2 bg-gradient-accent rounded-full mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-28 h-2 bg-gradient-primary rounded-full mx-auto animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <div className="flex justify-center space-x-3">
                      <FaReact className="text-ocean-bright text-xl animate-spin" style={{ animationDuration: '3s' }} />
                      <FaDatabase className="text-ocean-accent text-xl animate-bounce" style={{ animationDelay: '0.5s' }} />
                      <FaCode className="text-ocean-light text-xl animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-30 animate-glow"></div>
            </div>
          </div>
        </section>

        {/* About Section with Enhanced Professional Layout */}
        <section data-aos="fade-down" id="about" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <h1 data-aos="zoom-out" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold mb-16 sm:mb-20 text-gradient font-poppins">
              About Me
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-pale font-poppins leading-tight">
                   Hey, I'm <span className="text-gradient">Ankush Rana</span><br/>
                   <span className="text-gradient-reverse block mt-2">MERN Stack Developer</span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-ocean-pale/90 font-inter">
                I'm passionate about building high-performance, scalable, and user-centric applications that solve real-world problems. 
                With expertise in the <span className="text-ocean-bright font-semibold">MERN stack</span>, I create seamless digital experiences 
                from concept to deployment.
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-ocean-pale/90 font-inter">
                I specialize in crafting <span className="text-ocean-light font-semibold">blazing-fast web applications</span> with 
                clean code, intuitive UI, and robust backend architecture. My mission is to transform ideas into 
                <span className="text-ocean-bright font-semibold"> impactful digital solutions</span> 🚀.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-6 sm:pt-8">
                  <a 
                    href='/RESUME ANKUSH RANA.pdf' 
                    download 
                    className='btn-primary inline-flex items-center justify-center gap-2 text-center w-full sm:w-auto'
                  >
                    <FaDownload />
                    Download Resume
                  </a>
                  <ScrollLink
                    to="skills"
                    smooth
                    duration={400}
                    className="btn-secondary cursor-pointer text-center w-full sm:w-auto inline-flex items-center justify-center"
                  >
                    My Skills
                  </ScrollLink>
                </div>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="card-glass p-6 sm:p-8 rounded-2xl">
                  <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <FaReact className="text-white text-xl sm:text-2xl" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-ocean-bright font-poppins">Frontend Excellence</h3>
                  </div>
                  <p className="text-base sm:text-lg text-ocean-pale/80 font-inter">
                    Creating responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS frameworks.
                  </p>
                </div>
                
                <div className="card-glass p-6 sm:p-8 rounded-2xl">
                  <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-xl flex items-center justify-center">
                      <FaDatabase className="text-white text-xl sm:text-2xl" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-ocean-bright font-poppins">Backend Mastery</h3>
                  </div>
                  <p className="text-base sm:text-lg text-ocean-pale/80 font-inter">
                    Building scalable APIs, managing databases, and implementing secure authentication systems with Node.js and MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section with Professional Layout */}
        <section id="skills" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <h3 data-aos="zoom-out" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold mb-16 sm:mb-20 text-gradient font-poppins">
              Skills & Expertise
            </h3>
            <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Frontend Skills */}
              <div className="card-glass p-8 sm:p-10 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-glow group">
                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-glow">
                    <FaReact className="text-white text-2xl sm:text-3xl" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient font-poppins">Frontend Development</h4>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-ocean-pale/90 font-inter">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-bright rounded-full flex-shrink-0"></div>
                    HTML5 & CSS3
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-bright rounded-full flex-shrink-0"></div>
                    JavaScript (ES6+)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-bright rounded-full flex-shrink-0"></div>
                    React.js & Next.js
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-bright rounded-full flex-shrink-0"></div>
                    Tailwind CSS & Bootstrap
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-bright rounded-full flex-shrink-0"></div>
                    Redux & Context API
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-bright rounded-full flex-shrink-0"></div>
                    Responsive Design
                  </li>
                </ul>
              </div>
              
              {/* Backend Skills */}
              <div className="card-glass p-8 sm:p-10 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-glow group">
                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:animate-glow">
                    <FaDatabase className="text-white text-2xl sm:text-3xl" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient font-poppins">Backend Development</h4>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-ocean-pale/90 font-inter">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-accent rounded-full flex-shrink-0"></div>
                    Node.js & Express.js
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-accent rounded-full flex-shrink-0"></div>
                    MongoDB & Mongoose
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-accent rounded-full flex-shrink-0"></div>
                    RESTful APIs & GraphQL
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-accent rounded-full flex-shrink-0"></div>
                    JWT Authentication
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-accent rounded-full flex-shrink-0"></div>
                    WebSockets & Real-time
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-accent rounded-full flex-shrink-0"></div>
                    Cloud Services (AWS)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section with Enhanced Layout */}
        <section id="projects" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <h3 data-aos="zoom-out" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold mb-16 sm:mb-20 text-gradient font-poppins">
              Featured Projects
            </h3>
            <div data-aos="flip-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {[
                { 
                  title: 'HRMS Management', 
                  img: '/HRMS.png', 
                  link: 'https://hrms-management.vercel.app/',
                  description: 'A comprehensive Human Resource Management System built with MERN stack, featuring employee management, attendance tracking, and reporting.'
                }, 
                { 
                  title: 'Social Echo', 
                  img: '/social-echo.png', 
                  link: 'https://social-echo-seven.vercel.app/',
                  description: 'A modern social media platform with real-time messaging, post sharing, and user interaction features built with React and Node.js.'
                },
                { 
                  title: 'Blog CMS', 
                  img: '/HRMS view.png', 
                  link: 'https://blogcms.example.com',
                  description: 'A full-featured Content Management System for blogs with rich text editor, user authentication, and SEO optimization.'
                }
              ].map((project, index) => (
                <div key={index} className="card-glass p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-glow group flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-xl mb-6 sm:mb-8">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110" 
                      onLoad={(e) => {
                        e.target.style.opacity = '1';
                      }}
                      style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient mb-3 sm:mb-4 font-poppins">{project.title}</h4>
                    <p className="text-base sm:text-lg text-ocean-pale/80 mb-6 sm:mb-8 font-inter leading-relaxed flex-grow">{project.description}</p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center gap-2 w-full text-center mt-auto"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Professional Footer */}
      <footer className="bg-ocean-gradient-dark text-ocean-pale border-t border-ocean-bright/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col items-center space-y-8 sm:space-y-10">
            <div className="flex justify-center space-x-8 sm:space-x-10">
              <a 
                data-aos="fade-up" 
                data-aos-duration="700" 
                data-aos-delay="300" 
                href="https://wa.me/8264987650" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-400 text-3xl sm:text-4xl hover:text-green-300 hover:scale-110 transition-all duration-300 p-3 sm:p-4 rounded-full hover:bg-green-400/10"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                data-aos="fade-up" 
                data-aos-duration="700" 
                data-aos-delay="400" 
                href="https://github.com/ankush-rana-03" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-ocean-pale text-3xl sm:text-4xl hover:text-ocean-bright hover:scale-110 transition-all duration-300 p-3 sm:p-4 rounded-full hover:bg-ocean-bright/10"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                data-aos="fade-up" 
                data-aos-duration="700" 
                data-aos-delay="500" 
                href="https://www.linkedin.com/in/ankush-rana-bb8b3a19a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-ocean-bright text-3xl sm:text-4xl hover:text-ocean-light hover:scale-110 transition-all duration-300 p-3 sm:p-4 rounded-full hover:bg-ocean-bright/10"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                data-aos="fade-up" 
                data-aos-duration="700" 
                data-aos-delay="600" 
                href="mailto:ankushrana30@gmail.com" 
                className="text-red-400 text-3xl sm:text-4xl hover:text-red-300 hover:scale-110 transition-all duration-300 p-3 sm:p-4 rounded-full hover:bg-red-400/10" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            
            <div className="text-center space-y-3">
              <p className="text-ocean-pale/80 font-inter text-base sm:text-lg">
                &copy; 2025 Made with ♥️ by <span className="text-gradient font-semibold">Ankush Rana</span>
              </p>
              <p className="text-ocean-pale/60 text-sm sm:text-base font-inter">
                All rights reserved. Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
