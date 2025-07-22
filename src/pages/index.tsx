import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Award, BookOpen, Users, Calendar, Download, ExternalLink } from 'lucide-react';

export default function ModernKarthikeyanPortfolio() {
  const isVisible = true;


  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);





  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#research', label: 'Research' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-40  font-sans overflow-x-hidden">
      {/* Modern Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <div>
                <h1 className="text-xl font-bold text-orange-600">
                  Dr. A. Karthikeyan
                </h1>
                <p className="text-sm text-gray-600">Placement Coordinator</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-orange-600 ${activeSection === item.href.slice(1) ? 'text-orange-600' : 'text-gray-700'
                    } transform hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 animate-pulse"></div>
                  )}
                </a>
              ))}
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Schedule Meeting
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div className={`w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'}`}></div>
                <div className={`w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></div>
                <div className={`w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden mt-4 pb-4 border-t border-gray-200 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 px-4 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Banner */}
      <section id="home" className="pt-32 min-h-screen flex items-center bg-white text-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 relative z-10">

          {/* Profile Image */}
          {/* Profile Image with Slide-in Animation */}
          <div className={`lg:w-1/2 `}>

            <img
              src="/him.png" // <-- replace this with actual path to your PNG photo
              alt="Dr. A. Karthikeyan - Placement Coordinator"
              className="w-72  shadow-2xl"
            />

          </div>


          {/* Text */}
          <div className={`lg:w-1/2 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              👨‍🏫 Placement Coordinator Excellence
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Hello, I’m <span className="text-orange-600">Dr. A. Karthikeyan</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              Associate Professor & Placement Coordinator at SNS College of Technology. I specialize in academic research, mentoring, and building strong industry-academia collaborations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2">
                <BookOpen size={20} />
                View Publications
              </button>
              <button className="group border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2">
                <Calendar size={20} />
                Book a Talk
                <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">12+</div>
                <div className="text-sm text-gray-500">Years Teaching</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">₹494L</div>
                <div className="text-sm text-gray-500">Research Grants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">25+</div>
                <div className="text-sm text-gray-500">Publications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-orange-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-orange-600">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 transform hover:scale-105 transition-all duration-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                With a Ph.D. in Information and Communication Engineering and over a decade of experience in academia and industry, I specialize in bridging the gap between theoretical knowledge and practical industry requirements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As Placement Coordinator at SNS College of Technology, I am committed to fostering career development, mentoring students, and building strong industry partnerships that create meaningful opportunities for our graduates.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl transform hover:scale-105 transition-all duration-300">
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Student Mentoring</div>
                </div>
                <div className="text-center p-6 bg-blue-100 rounded-xl transform hover:scale-105 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Research Excellence</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                <p className="text-gray-600">Ph.D. in Information and Communication Engineering</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Current Position</h4>
                <p className="text-gray-600">Associate Professor & Placement Coordinator<br />SNS College of Technology</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Specialization</h4>
                <p className="text-gray-600">Electronics & Communication Engineering, Career Development, Industry Relations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-orange-600">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 rounded-full"></div>

            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:text-right">
                  <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 border-l-4 border-blue-500">
                    <div className="text-blue-500 font-semibold text-sm mb-2">2012 – Present</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Associate Professor & Placement Coordinator</h3>
                    <p className="text-gray-600 mb-4">SNS College of Technology</p>
                    <p className="text-gray-700">Leading placement activities, industry partnerships, and academic excellence in ECE department.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="lg:w-1/2"></div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 border-l-4 border-blue-600">
                    <div className="text-orange-600 font-semibold text-sm mb-2">2008 – 2010</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">IT Networking Engineer</h3>
                    <p className="text-gray-600 mb-4">Suntronix & Mirthikka Computers, Chennai</p>
                    <p className="text-gray-700">Gained valuable industry experience in networking and IT infrastructure management.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="lg:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-orange-600">
              Awards & Grants
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Awards */}
            <div className="bg-blue-50 p-8 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Awards & Recognition</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                  <div className="font-semibold text-gray-800">Iconic Academician Award</div>
                  <div className="text-sm text-gray-600">Scientific Laurels, 2025</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <div className="font-semibold text-gray-800">Motivational Grid Award</div>
                  <div className="text-sm text-gray-600">SNS College - ₹21,000 Prize (2022)</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <div className="font-semibold text-gray-800">Best Paper Award</div>
                  <div className="text-sm text-gray-600">Novel Research Academy, 2019</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-700">
                  <div className="font-semibold text-gray-800">I2OR Bright Researcher Award</div>
                  <div className="text-sm text-gray-600">I2OR India, 2018</div>
                </div>
              </div>
            </div>

            {/* Grants */}
            <div className="bg-blue-100 p-8 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Research Grants</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <div className="font-semibold text-gray-800 text-lg">MeitY C2S Program</div>
                  <div className="text-2xl font-bold text-orange-600 my-2">₹494 Lakhs</div>
                  <div className="text-sm text-gray-600">2023 - Major funding achievement</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <div className="font-semibold text-gray-800">Anna University FDP</div>
                  <div className="text-lg font-bold text-orange-600">₹30,000</div>
                  <div className="text-sm text-gray-600">2022</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-700">
                  <div className="font-semibold text-gray-800">DST–NIMAT Entrepreneurship Camps</div>
                  <div className="text-lg font-bold text-orange-600">₹1.2 Lakhs</div>
                  <div className="text-sm text-gray-600">2016–2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Research Section */}
      <section id="research" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recent Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 border-t-4 border-blue-600">
              <div className="text-orange-600 font-semibold text-sm mb-2">Elsevier, 2024</div>
              <h3 className="font-bold text-gray-800 mb-3">ScAlN/GaN HEMTs Analysis</h3>
              <p className="text-gray-600 text-sm mb-4">Advanced semiconductor device analysis and optimization techniques.</p>
              <div className="flex items-center text-orange-600 text-sm font-semibold">
                <ExternalLink size={16} className="mr-1" />
                View Publication
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 border-t-4 border-purple-600">
              <div className="text-purple-600 font-semibold text-sm mb-2">Taylor & Francis, 2024</div>
              <h3 className="font-bold text-gray-800 mb-3">TEE-AODV for MANET</h3>
              <p className="text-gray-600 text-sm mb-4">Trusted execution environment for mobile ad-hoc networks.</p>
              <div className="flex items-center text-purple-600 text-sm font-semibold">
                <ExternalLink size={16} className="mr-1" />
                View Publication
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 border-t-4 border-green-600">
              <div className="text-green-600 font-semibold text-sm mb-2">Wiley, 2024</div>
              <h3 className="font-bold text-gray-800 mb-3">Weighted Clustering in MANETs</h3>
              <p className="text-gray-600 text-sm mb-4">Innovative clustering algorithms for network optimization.</p>
              <div className="flex items-center text-green-600 text-sm font-semibold">
                <ExternalLink size={16} className="mr-1" />
                View Publication
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24  text-dark relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96  rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to discuss placement opportunities or academic collaboration?</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className=" gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className=" text-2xl font-bold mb-6">Let's Connect</h3>
              <div className="grid grid-cols-3 gap-4">

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">karthikeyan@sns.edu.in</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+91-xxx-xxx-xxxx</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-300">SNS College of Technology<br />Coimbatore, Tamil Nadu</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              K
            </div>
            <span className="text-lg font-semibold">Dr. A. Karthikeyan</span>
          </div>
          <p className="text-gray-400 mb-4">Associate Professor & Placement Coordinator</p>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Dr. A. Karthikeyan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}