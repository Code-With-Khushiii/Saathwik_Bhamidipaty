import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Github, Lightbulb, ExternalLink, X, Cpu, Terminal } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Computer Science student at the University of Illinois Chicago focused on AI and backend development in C++, Java, and Python. Building a C++ cricket analytics engine exposed to a FastAPI backend through pybind11, with an Anthropic-powered natural-language query layer. Experienced in teaching and tutoring, supporting 50+ undergraduate students weekly at UIC's Math & Science Learning Center with a 4.9/5.0 satisfaction rating.";

  const experience = [
    {
      company: "University of Illinois Chicago",
      role: "Peer Learning Assistant",
      location: "Chicago, IL",
      dates: "Sept. 2026 - Present",
      highlights: [
        "Provide mathematics and STEM instruction to 50+ undergraduate students weekly through individual and group learning sessions at UIC's Math & Science Learning Center.",
        "Deliver targeted support across quantitative coursework, breaking complex mathematical concepts into structured problem-solving steps and helping students strengthen analytical reasoning.",
        "Maintain a 4.9/5.0 student satisfaction rating while adapting explanations to different learning styles, academic levels, and problem-solving approaches.",
        "Collaborate with students and academic staff to identify recurring learning gaps and reinforce foundational concepts required for advanced STEM coursework."
      ]
    },
    {
      company: "Code Ninjas",
      role: "STEM Coding Instructor",
      location: "Long Grove, IL",
      dates: "May 2026 - Aug. 2026",
      highlights: [
        "Taught Java programming fundamentals, computational thinking, and block-based coding through structured exercises and hands-on projects.",
        "Guided students through variables, conditional logic, loops, functions, debugging, and program execution while strengthening independent problem-solving skills.",
        "Diagnosed coding errors and explained corrective approaches while supporting classroom operations and maintaining an organized technical learning environment."
      ]
    },
    {
      company: "Mathnasium",
      role: "Math Tutor",
      location: "Buffalo Grove, IL",
      dates: "Sept. 2023 - Mar. 2026",
      highlights: [
        "Tutored 10+ students across algebra, geometry, calculus, and related mathematics topics over 2+ years, strengthening quantitative reasoning and problem-solving skills.",
        "Reduced students' reliance on prompted assistance by an estimated 50% through progressive exercises and individualized instruction.",
        "Identified reasoning errors and knowledge gaps, then provided structured, step-by-step guidance to strengthen independent analysis and academic performance."
      ]
    }
  ];

  const projects = [
    {
      title: "Cricket Analytics & AI Matchup Engine",
      subtitle: "C++, Python, FastAPI, pybind11, pandas, REST APIs, Anthropic API",
      category: "AI / Backend Development",
      introduction: "Developing a C++ analytics engine to process ball-by-ball cricket data and evaluate batting patterns, bowler-batter matchups, dismissal trends, and player performance metrics.",
      problem: "Ball-by-ball cricket data is large and unstructured, making it hard to quickly analyze matchups, spot player weaknesses, or answer analytical questions in plain language.",
      objective: "Build a performance-focused analytics engine, exposed through a Python backend, that turns raw match data into fast matchup insights and natural-language answers.",
      methodology: [
        "Developing a C++ analytics engine for batting patterns, bowler-batter matchups, dismissal trends, and player performance metrics.",
        "Building a Python data pipeline with pandas to clean and transform Cricsheet match data into structured inputs for statistical analysis.",
        "Integrating C++ with Python through pybind11 to expose performance-focused analytics functions to a Python backend.",
        "Designing FastAPI REST endpoints for player analysis, weakness identification, and head-to-head matchup comparison.",
        "Developing an AI-assisted query layer using the Anthropic API to translate natural-language cricket questions into relevant statistical analysis."
      ],
      results: [
        "In progress: C++ core, pandas pipeline, and pybind11 bridge connect raw Cricsheet data to a Python backend.",
        "REST endpoints cover player analysis, weakness identification, and head-to-head comparison.",
        "Natural-language queries are translated into the relevant statistical analysis via the Anthropic API."
      ],
      conclusion: "Combines low-level performance in C++ with a Python API and an AI query layer to make cricket analytics fast and accessible.",
      link: ""
    },
    {
      title: "Cricket Workload Tracker & Player Management System",
      subtitle: "C++, OOP, Bcrypt, nlohmann/json, JSON, Git",
      category: "Software Engineering / OOP",
      introduction: "Developed an end-to-end C++ application enabling coaches to manage player rosters and training plans while players record sessions, injuries, and workload data.",
      problem: "Coaches and players need a single system to manage rosters, training plans, and workload and injury records, with secure accounts and data that persists across sessions.",
      objective: "Design a role-based, object-oriented C++ application with secure authentication and persistent storage for coach and player workflows.",
      methodology: [
        "Architected a multi-class object-oriented system using 3+ core classes, inheritance, enumerations, and role-specific subclasses for coach and player workflows.",
        "Integrated Bcrypt authentication and nlohmann/json persistence to secure credentials and reconstruct account and training data across sessions.",
        "Implemented input validation, file handling, role-based logic, error handling, debugging, and testing across core application workflows."
      ],
      results: [
        "Delivered an end-to-end application for roster management, training plans, and session, injury, and workload tracking.",
        "Secured credentials with Bcrypt and restored account and training data across sessions through JSON persistence."
      ],
      conclusion: "Demonstrates object-oriented design, authentication, data persistence, and thorough validation and testing in C++.",
      link: "https://github.com/BhamSaath/cricket-workload-tracker"
    }
  ];

  const skillCategories = [
    {
      icon: TrendingUp,
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'Python', 'C', 'Swift']
    },
    {
      icon: Target,
      title: 'Software Engineering',
      skills: ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Software Design', 'Inheritance', 'Encapsulation', 'Debugging', 'Error Handling', 'File I/O', 'Authentication', 'Data Persistence']
    },
    {
      icon: Cpu,
      title: 'AI & Backend',
      skills: ['FastAPI', 'REST APIs', 'pybind11', 'pandas', 'JSON', 'Anthropic API', 'API Integration', 'CI/CD']
    },
    {
      icon: Terminal,
      title: 'Developer Tools & Technologies',
      skills: ['Git', 'GitHub', 'Linux', 'YAML', 'Bcrypt', 'nlohmann/json', 'Command Line']
    }
  ];

  const education = [
    {
      school: "University of Illinois Chicago",
      degree: "Bachelor of Science, Computer Science, Minor in Physics",
      location: "Chicago, IL",
      dates: "Expected 2028",
      details: "Relevant coursework: C Programming and Software Tools, Discrete Mathematics for Computer Science, Engineering Probability and Statistics, Multivariable and Vector Calculus."
    }
  ];

  const certifications = ["GitHub Agentic AI Certification", "Walmart Advanced Software Engineering"];

  const papers: { title: string; publication: string; year: string; link: string }[] = [];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="relative flex items-center justify-center">

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="image/image.png"
                alt="Saathwik Bhamidipaty"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              SAATHWIK BHAMIDIPATY
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Software Engineering | AI &amp; Backend Development | C++, Java, Python
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              CHICAGO, IL, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'STUDENTS SUPPORTED WEEKLY', value: '50+', detail: 'UIC Math & Science Learning Center' },
              { label: 'STUDENT SATISFACTION RATING', value: '4.9/5.0', detail: 'Peer Learning Assistant' },
              { label: 'REDUCED PROMPTED ASSISTANCE', value: '~50%', detail: 'Individualized Tutoring' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Computer Science student building AI-assisted analytics and backend systems in C++, Python, and Java.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: TrendingUp,
                title: 'C++ Analytics & APIs',
                detail: 'Building a C++ cricket analytics engine exposed to a Python FastAPI backend through pybind11, with REST endpoints for player analysis and matchup comparison.'
              },
              {
                icon: Target,
                title: 'Object-Oriented Systems',
                detail: 'Architected a role-based C++ workload tracker with inheritance, Bcrypt authentication, and JSON persistence across sessions.'
              },
              {
                icon: Lightbulb,
                title: 'AI & Teaching',
                detail: 'Developing an Anthropic-powered natural-language query layer, and teaching math and coding to 50+ students weekly with a 4.9/5.0 rating.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Teaching, tutoring, and STEM instruction experience in mathematics and programming.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              AI, backend, and object-oriented software projects in C++ and Python.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or project documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>

              {projects[selectedProject].link && (
                <div>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">LINK</h3>
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Software engineering, AI, and backend development skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location}{edu.dates ? ` · ${edu.dates}` : ''}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-display text-black mb-4 tracking-wide">CERTIFICATIONS</h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-brown font-light">{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in accounting, finance, and taxation.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss software engineering, AI, or backend development opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+18724000243"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (872) 400-0243
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/saathwikbhamidipaty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Github className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://github.com/BhamSaath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:b15saathwik@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                b15saathwik@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2026 Saathwik Bhamidipaty · Software Engineering.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
