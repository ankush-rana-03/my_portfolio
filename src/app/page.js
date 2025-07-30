"use client"
import Head from 'next/head';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload, FaCode, FaDatabase, FaReact } from "react-icons/fa";
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X, ExternalLink } from "lucide-react";

export default function Home() {

  const navItems = [
    { to: "hero", label: "Home", scroll: true },
    { to: "about", label: "About", scroll: true },
    { to: "skills", label: "Skills", scroll: true },
    { to: "projects", label: "Projects", scroll: true },
    { href: "https://www.linkedin.com/in/ankush-rana-bb8b3a19a/", label: "LinkedIn" },
    { href: "https://github.com/ankush-rana-03", label: "GitHub" },
  ];
  const [navOpen, setNavOpen] = useState(false);

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    
    // Reset scroll position to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Disable browser's scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  },[])

  return (
    <>
      <Head>
        <title>Ankush Rana - MERN Stack Developer | Portfolio</title>
        <meta name="description" content="Professional MERN Stack Developer Portfolio - React, Next.js, Node.js, MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <header data-aos="zoom-in" className="fixed inset-x-0 top-0 z-50 backdrop-blur-glass border-b border-ocean-bright/20 shadow-lg">
  <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
    {/* logo */}
    <ScrollLink
      to="hero"
      smooth
      duration={400}
      className="cursor-pointer text-xl sm:text-2xl font-bold font-poppins text-ocean-pale hover:text-gradient transition-all duration-300 transform hover:scale-105"
      onClick={() => setNavOpen(false)}
    >
      Ankush Rana
    </ScrollLink>

    {/* hamburger (shows ≤ md) */}
    <button
  onClick={() => setNavOpen(!navOpen)}
  className={`md:hidden flex flex-col justify-center items-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg focus:outline-none transition-all duration-300 z-50 ${navOpen ? "bg-ocean-bright text-ocean-deep shadow-glow" : "bg-transparent text-ocean-pale hover:bg-ocean-medium/20"}`}
  aria-label="Toggle navigation"
>
   {navOpen ? (
        <X size={24} className="sm:w-7 sm:h-7" />
          ) : (
              <Menu size={24} className="sm:w-7 sm:h-7" />
                )}
</button>

    {/* desktop menu (hidden on mobile) */}
    <nav className="hidden md:block">
      <ul className="flex gap-6 lg:gap-8 text-ocean-pale font-medium font-inter">
        {navItems.map((item) =>
          item.scroll ? (
            <li key={item.label}>
              <ScrollLink
                to={item.to}
                smooth
                duration={400}
                className="hover:text-ocean-bright cursor-pointer transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full py-2 px-1 text-sm lg:text-base"
                onClick={() => setNavOpen(false)} 
              >
                {item.label}
              </ScrollLink>
            </li>
          ) : (
            <li key={item.label}>
              <Link
                href={item.href}
                target="_blank"
                className="hover:text-ocean-bright transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full py-2 px-1 inline-flex items-center gap-1 text-sm lg:text-base"
                onClick={() => setNavOpen(false)}
              >
                {item.label}
                <ExternalLink size={12} className="lg:w-3.5 lg:h-3.5" />
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  </div>

  {/* mobile slide‑over */}
  {navOpen && (
  <>
    {/* Overlay background */}
    <div 
      className="md:hidden fixed inset-0 bg-ocean-deep/80 backdrop-blur-sm z-30"
      onClick={() => setNavOpen(false)}
    ></div>
    
    {/* Mobile navigation menu */}
    <nav
      className="md:hidden fixed inset-y-0 right-0 w-72 sm:w-80 backdrop-blur-glass text-ocean-pale transition-transform duration-300 ease-in-out z-40 shadow-glass"
    >
      <ul className="mt-20 sm:mt-24 flex flex-col gap-2 sm:gap-4 px-6 sm:px-8 text-base sm:text-lg font-medium font-inter">
        {navItems.map((item) =>
          item.scroll ? (
            <li key={item.label}>
              <ScrollLink
                to={item.to}
                smooth
                duration={400}
                onClick={() => setNavOpen(false)}
                className="block hover:text-ocean-bright cursor-pointer transition-all duration-300 py-3 px-4 rounded-xl hover:bg-ocean-medium/20 hover:shadow-glow-hover"
              >
                {item.label}
              </ScrollLink>
            </li>
          ) : (
            <li key={item.label}>
              <Link
                href={item.href}
                target="_blank"
                onClick={() => setNavOpen(false)}
                className="block hover:text-ocean-bright transition-all duration-300 py-3 px-4 rounded-xl hover:bg-ocean-medium/20 hover:shadow-glow-hover inline-flex items-center gap-2"
              >
                {item.label}
                <ExternalLink size={16} />
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  </>
)}
</header>
       
      <main className="bg-transparent text-ocean-pale w-full">
        {/*hero section */}
        <section id="hero" className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 pt-24 sm:pt-28 lg:pt-32">
          <div className='text-left w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:pr-8'>
          <div data-aos="fade-right" data-aos-duration="800">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-ocean-pale/80 font-inter">Hello, I'm</h2>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-poppins text-gradient leading-tight">
              Ankush Rana
            </h1>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="500">
          <div className="space-y-4">
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
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
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

          <div data-aos="fade-left" className='w-full lg:w-1/2 flex justify-center mt-8 sm:mt-12 lg:mt-0'>
            <div className="relative">
              <img 
                src='/computer1.jpg' 
                alt="Ankush Rana - MERN Stack Developer" 
                className='w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-2xl shadow-glass border border-ocean-bright/30 hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105' 
              />
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-30 animate-glow"></div>
            </div>
          </div>
        </section>

        {/*About*/}
        <section data-aos="fade-down" id="about" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <h1 data-aos="zoom-out" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold mb-12 sm:mb-16 text-gradient font-poppins">
              About Me
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
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

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
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
              
              <div className="space-y-4 sm:space-y-6">
                <div className="card-glass p-4 sm:p-6 rounded-2xl">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <FaReact className="text-white text-lg sm:text-xl" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-ocean-bright font-poppins">Frontend Excellence</h3>
                  </div>
                  <p className="text-sm sm:text-base text-ocean-pale/80 font-inter">
                    Creating responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS frameworks.
                  </p>
                </div>
                
                <div className="card-glass p-4 sm:p-6 rounded-2xl">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                      <FaDatabase className="text-white text-lg sm:text-xl" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-ocean-bright font-poppins">Backend Mastery</h3>
                  </div>
                  <p className="text-sm sm:text-base text-ocean-pale/80 font-inter">
                    Building scalable APIs, managing databases, and implementing secure authentication systems with Node.js and MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/*Skills*/} 
        <section id="skills" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <h3 data-aos="zoom-out" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold mb-12 sm:mb-16 text-gradient font-poppins">
              Skills & Expertise
            </h3>
            <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Frontend Skills */}
              <div className="card-glass p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-glow group">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-glow">
                    <FaReact className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient font-poppins">Frontend Development</h4>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-ocean-pale/90 font-inter">
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
              <div className="card-glass p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-glow group">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:animate-glow">
                    <FaDatabase className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient font-poppins">Backend Development</h4>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-ocean-pale/90 font-inter">
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

        {/*Projects*/}
        <section id="projects" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <h3 data-aos="zoom-out" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold mb-12 sm:mb-16 text-gradient font-poppins">
              Featured Projects
            </h3>
            <div data-aos="flip-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  img: '/computer1.jpg', 
                  link: 'https://blogcms.example.com',
                  description: 'A full-featured Content Management System for blogs with rich text editor, user authentication, and SEO optimization.'
                }
              ].map((project, index) => (
                <div key={index} className="card-glass p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-glow group flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gradient mb-2 sm:mb-3 font-poppins">{project.title}</h4>
                    <p className="text-sm sm:text-base text-ocean-pale/80 mb-4 sm:mb-6 font-inter leading-relaxed flex-grow">{project.description}</p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center gap-2 w-full text-center mt-auto"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ocean-gradient-dark text-ocean-pale border-t border-ocean-bright/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            <div className="flex justify-center space-x-6 sm:space-x-8">
              <a 
                data-aos="fade-up" 
                data-aos-duration="700" 
                data-aos-delay="300" 
                href="https://wa.me/8264987650" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-400 text-3xl sm:text-4xl hover:text-green-300 hover:scale-110 transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-green-400/10"
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
                className="text-ocean-pale text-3xl sm:text-4xl hover:text-ocean-bright hover:scale-110 transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-ocean-bright/10"
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
                className="text-ocean-bright text-3xl sm:text-4xl hover:text-ocean-light hover:scale-110 transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-ocean-bright/10"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                data-aos="fade-up" 
                data-aos-duration="700" 
                data-aos-delay="600" 
                href="mailto:ankushrana30@gmail.com" 
                className="text-red-400 text-3xl sm:text-4xl hover:text-red-300 hover:scale-110 transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-red-400/10" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-ocean-pale/80 font-inter text-sm sm:text-base">
                &copy; 2025 Made with ♥️ by <span className="text-gradient font-semibold">Ankush Rana</span>
              </p>
              <p className="text-ocean-pale/60 text-xs sm:text-sm font-inter">
                All rights reserved. Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
