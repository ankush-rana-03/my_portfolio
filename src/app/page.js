"use client"
import Head from 'next/head';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X } from "lucide-react";

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
        <title>Portfolio | MERN Developer</title>
        <meta name="description" content="MERN Stack Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <header data-aos="zoom-in" className="fixed inset-x-0 top-0 z-50 bg-ocean-deep/95 backdrop-blur border-b-2 border-ocean-bright shadow-lg shadow-ocean-medium/20">
  <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
    {/* logo */}
    <ScrollLink
      to="hero"
      smooth
      duration={400}
      className="cursor-pointer text-2xl font-bold text-ocean-pale hover:text-ocean-light transition-colors duration-300"
      onClick={() => setNavOpen(false)}
    >
      Ankush Rana

    </ScrollLink>

    {/* hamburger (shows ≤ md) */}
    <button
  onClick={() => setNavOpen(!navOpen)}
  className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none transition duration-300 z-50 ${navOpen ? "bg-ocean-bright text-ocean-deep" : "bg-transparent text-ocean-pale"}`}
  aria-label="Toggle navigation"
>
   {navOpen ? (
        <X size={28} /> // Show cross icon when open
          ) : (
              <Menu size={28} /> // Show hamburger icon when closed
                )}
   
  {/*<div
    className={`w-6 h-0.5 mb-1 bg-current transition-all duration-300 ${
      navOpen ? "transform rotate-45 translate-y-2" : ""
    }`}
  ></div>
  <div
    className={`w-6 h-0.5 mb-1 bg-current transition-all duration-300 ${
      navOpen ? "opacity-0" : ""
    }`}
  ></div>
  <div
    className={`w-6 h-0.5 bg-current transition-all duration-300 ${
      navOpen ? "transform -rotate-45 -translate-y-2" : ""
    }`}
  ></div>*/}
</button>

    {/* desktop menu (hidden on mobile) */}
    <nav className="hidden md:block">
      <ul className="flex gap-8 text-ocean-pale font-medium">
        {navItems.map((item) =>
          item.scroll ? (
            <li key={item.label}>
              <ScrollLink
                to={item.to}
                smooth
                duration={400}
                className="hover:text-ocean-bright cursor-pointer transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ocean-bright after:transition-all after:duration-300 hover:after:w-full"
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
                className="hover:text-ocean-bright transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ocean-bright after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => setNavOpen(false)}
              >
                {item.label}
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
      className="md:hidden fixed inset-0 bg-ocean-deep/70 backdrop-blur-sm z-30"
      onClick={() => setNavOpen(false)}
    ></div>
    
    {/* Mobile navigation menu */}
    <nav
      className="md:hidden fixed inset-y-0 right-0 w-64 bg-ocean-gradient-dark backdrop-blur text-ocean-pale transition-transform duration-300 ease-in-out z-40 shadow-2xl shadow-ocean-deep/50"
    >
      <ul className="mt-20 flex flex-col gap-6 px-6 text-lg font-medium">
        {navItems.map((item) =>
          item.scroll ? (
            <li key={item.label}>
              <ScrollLink
                to={item.to}
                smooth
                duration={400}
                onClick={() => setNavOpen(false)}
                className="block hover:text-ocean-bright cursor-pointer transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-ocean-medium/30"
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
                className="block hover:text-ocean-bright transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-ocean-medium/30"
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  </>
)}
</header>
       
      <main className="bg-transparent text-ocean-pale w-full py-10 pt-10">
        {/*hero section */}
        <section id="hero" className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-10 py-10 mt-10">
          <div className='text-left w-full md:w-1/2'>
          <h2 data-aos="fade-right" data-aos-duration="800" className="text-5xl font-extrabold text-ocean-pale">Hi, I am </h2>
          <h1 data-aos="fade-right" data-aos-duration="1000" className="text-6xl font-extrabold bg-gradient-to-r from-ocean-bright to-ocean-light bg-clip-text text-transparent">Ankush Rana,</h1>
          <div data-aos="zoom-in-right" data-aos-duration="500">
          <h2 className="mt-3 text-3xl font-bold text-ocean-pale">
             I'm a <span className="bg-gradient-to-r from-ocean-light to-ocean-bright bg-clip-text text-transparent">
             <Typewriter
                words={['MERN Stack Developer', 'React Developer', 'Node.js Developer']}
                loop={0} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={2000}
                />
                 </span>
          </h2>
          
          <h2 className="text-2xl font-bold text-ocean-pale/90">Building scalable and efficient web applications using <br/> <span className="text-ocean-bright">ReactJs, NextJs, NodeJs, Express</span> and <span className="text-ocean-bright">MongoDb</span>.</h2>
          </div>
          </div>

          <div data-aos="fade-left" className='w-full md:w-1/2 flex justify-center m-10'>
            <img src='/computer1.jpg' alt="profile" className='w-50 h-50 shadow-2xl shadow-ocean-medium/30 rounded-lg border-2 border-ocean-bright/30 hover:shadow-ocean-bright/20 transition-all duration-300' />
          </div>
        </section>

        {/*About*/}
        <section data-aos="fade-down" id="about" className="text-left mx-10 py-20 mt-20">
          <h1 data-aos="zoom-out" className="text-6xl text-center font-bold mb-8 bg-gradient-to-r from-ocean-bright to-ocean-light bg-clip-text text-transparent">About Me</h1>
          <h2 className="text-4xl font-bold text-ocean-pale">
             Hey, I'm <span className="bg-gradient-to-r from-ocean-bright to-ocean-light bg-clip-text text-transparent">Ankush Rana</span><br/>
             <span className="bg-gradient-to-r from-ocean-light to-ocean-bright bg-clip-text text-transparent"> MERN Stack Developer</span><br/> 
             who thrives on building high-performance,<br/> scalable, and user-centric applications.
          </h2>
  
          <p className="mt-5 text-xl leading-relaxed text-ocean-pale/90">
          I specialize in crafting blazing-fast web applications with <span className="text-ocean-bright font-semibold">React, Next.js, Node.js, Express, and MongoDB</span>.  
          My mission? To solve <span className="text-ocean-light font-semibold">real-world problems</span> through <span className="text-ocean-light font-semibold">clean code, intuitive UI, and robust backend architecture</span>.
          I don't just build websites—I create <span className="text-ocean-bright font-semibold">experiences that drive impact</span> 🚀.
          </p>

          <p className="mt-5 text-xl leading-relaxed text-ocean-pale/90">
          I thrive in fast-paced environments, love debugging the impossible, and constantly push myself to learn, adapt, and innovate. 
          Whether it's optimizing APIs for speed, architecting scalable databases, or designing pixel-perfect frontends,  
          I bring a <span className="text-ocean-bright font-semibold">problem-solving mindset</span> and a <span className="text-ocean-bright font-semibold">get-it-done attitude</span>.
          </p>

          <p className="mt-5 text-xl font-bold text-ocean-light">
          Let's connect and build something extraordinary together! 💡
          </p>

          <div data-aos="zoom-out" className='mt-8'>
           <a href='/RESUME ANKUSH RANA.pdf' download className='bg-gradient-to-r from-ocean-bright to-ocean-light text-ocean-deep px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-ocean-bright/30 hover:scale-105 transition-all duration-300 border border-ocean-bright/30'>
           📄 Download CV
           </a>
          </div>
        </section>
        
        {/*Skills*/} 
        
        <section id="skills" className="mx-10 py-20 mt-10">                                                
          <h3 data-aos="zoom-out" className="text-6xl text-center font-bold mb-12 bg-gradient-to-r from-ocean-bright to-ocean-light bg-clip-text text-transparent">Skills</h3>
          <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
            {/* Frontend Skills */}
            <div className="p-6 border border-ocean-medium/30 rounded-lg shadow-lg bg-ocean-deep/20 backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-xl hover:shadow-ocean-bright/20 hover:border-ocean-bright hover:bg-ocean-medium/10 duration-300">
              <h4 className="text-3xl font-semibold text-ocean-bright mb-4">Frontend Development</h4>
              <ul className="list-disc list-inside text-xl text-ocean-pale/90">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React.js & Next.js</li>
                <li>Tailwind CSS & Bootstrap</li>
                <li>Redux & Context API</li>
                <li>Responsive & Mobile-first Design</li>
              </ul>
            </div>
            {/* Backend Skills */}
            <div className="p-6 border border-ocean-medium/30 rounded-lg shadow-lg bg-ocean-deep/20 backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-xl hover:shadow-ocean-bright/20 hover:border-ocean-bright hover:bg-ocean-medium/10 duration-300">
              <h4 className="text-3xl font-semibold text-ocean-bright mb-4">Backend Development</h4>
              <ul className="list-disc list-inside text-xl text-ocean-pale/90">
                <li>Node.js & Express.js</li>
                <li>MongoDB & Mongoose</li>
                <li>RESTful APIs & GraphQL</li>
                <li>JWT Authentication & OAuth</li>
                <li>WebSockets & Real-time Data</li>
                <li>Cloud Storage (AWS, Firebase)</li>
              </ul>
            </div>
          </div>
        </section>

        {/*Projects*/}
        <section id="projects" className="py-10 px-10">
          <h3 data-aos="zoom-out" className="text-6xl text-center font-bold mb-8 bg-gradient-to-r from-ocean-bright to-ocean-light bg-clip-text text-transparent">Projects</h3>
          <div data-aos="flip-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'HRMS Management', img: '/HRMS.png', link: 'https://hrms-management.vercel.app/' }, 
              { title: 'Social Echo ', img: '/social-echo.png', link: 'https://social-echo-seven.vercel.app/' },
              { title: 'Blog CMS', img: '/computer1.jpg', link: 'https://blogcms.example.com' }
            ].map((project, index) => (
              <div key={index} className="p-4 border border-ocean-medium/30 rounded-lg shadow-lg bg-ocean-deep/20 backdrop-blur-sm transition transform hover:scale-105 hover:shadow-2xl hover:shadow-ocean-bright/20 hover:border-ocean-bright hover:bg-ocean-medium/10 duration-300">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4 border border-ocean-bright/20" />
                <h4 className="text-xl font-semibold text-ocean-bright">{project.title}</h4>
                <p className="mt-2 text-ocean-pale/80">A full-stack application built using the MERN stack.</p>
                <a href={project.link} target="_blank" className="mt-4 inline-block bg-gradient-to-r from-ocean-bright to-ocean-light text-ocean-deep px-4 py-2 rounded-lg font-semibold hover:shadow-ocean-bright/30 hover:scale-105 transition-all duration-300 border border-ocean-bright/30">Live Demo</a>
              </div>
            ))}
          </div>
  
        </section>
      </main>

      <footer className="bg-ocean-gradient-dark text-ocean-pale text-center p-4 border-t border-ocean-bright/30">
      <div className="flex justify-center space-x-6 mb-3">
    <a data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700" data-aos-delay="300" href="https://wa.me/8264987650" target="_blank" rel="noopener noreferrer" className="text-green-400 text-4xl hover:text-green-300 hover:scale-110 transition-all duration-300 aos-init aos-animate">
      <FaWhatsapp />
    </a>
    <a data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700" data-aos-delay="400" href="https://github.com/ankush-rana-03" target="_blank" rel="noopener noreferrer" className="text-ocean-pale text-4xl hover:text-ocean-bright hover:scale-110 transition-all duration-300">
      <FaGithub />
    </a>
    <a data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700" data-aos-delay="500" href="https://www.linkedin.com/in/ankush-rana-bb8b3a19a/" target="_blank" rel="noopener noreferrer" className="text-ocean-bright text-4xl hover:text-ocean-light hover:scale-110 transition-all duration-300">
      <FaLinkedin />
    </a>
    <a data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700" data-aos-delay="600" href="mailto:ankushrana30@gmail.com" className="text-red-400 text-4xl hover:text-red-300 hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer">
      <FaEnvelope />
    </a>
  </div>
        <p className="text-ocean-pale/80">&copy; 2025 Made with ♥️ by <span className="text-ocean-bright">Ankush Rana</span>. All rights reserved.</p>

      </footer>
    </>
  );
}
