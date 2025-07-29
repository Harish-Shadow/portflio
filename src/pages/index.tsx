import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Mail, Phone, MapPin, Award, BookOpen, Users, Calendar, Download, ExternalLink } from 'lucide-react';

const achievements = [
  "/1.jpeg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
  "/11.jpg",
  "/12.jpg",
  "/13.jpg",
  "/14.jpg",
  "/15.jpg",
];

export default function ModernKarthikeyanPortfolio() {
  const isVisible = true;
  const extendedImages = [
    ...achievements.slice(-2),
    ...achievements,
    ...achievements.slice(0, 2)
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  useEffect(() => {
    if (currentIndex >= achievements.length + 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(2);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else if (currentIndex <= 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(achievements.length + 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentIndex, achievements.length]);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 2);
  };

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

  // Function to handle navigation to form page
  const handleScheduleMeeting = () => {
    window.location.href = '/form';
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans overflow-x-hidden">
      {/* Enhanced Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-2 sm:gap-3 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                K
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                  Dr. A. Karthikeyan
                </h1>
                <p className="text-xs sm:text-sm text-gray-600">Placement Coordinator</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-gray-900 ${activeSection === item.href.slice(1) ? 'text-gray-900' : 'text-gray-600'
                    } transform hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full"></div>
                  )}
                </a>
              ))}
              <button
                onClick={handleScheduleMeeting}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium cursor-pointer"
              >
                Schedule Meeting
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div className={`w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'}`}></div>
                <div className={`w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></div>
                <div className={`w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className={`lg:hidden mt-4 pb-4 border-t border-gray-200 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleScheduleMeeting}
              className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium cursor-pointer"
            >
              Schedule Meeting
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Hero Section */}
      <section id="home" className="pt-20 sm:pt-32 min-h-screen flex items-center bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 relative z-10">
          {/* Mobile-Optimized Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute rounded-2xl blur opacity-10"></div>
              <img
                src="him.png"
                alt="Dr. A. Karthikeyan - Placement Coordinator"
                className="w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-2xl shadow-2xl relative object-cover"
              />
            </div>
          </div>

          {/* Mobile-Optimized Text */}
          <div className={`lg:w-1/2 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="inline-block px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white/20">
              👨‍🏫 Placement Coordinator Excellence
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              Hello, I'm <span className="text-white">Dr. A. Karthikeyan</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              Associate Professor & Placement Coordinator at SNS College of Technology. Specializing in academic research, mentoring, and building industry-academia collaborations.
            </p>

            {/* Mobile-Optimized Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10">
              <button className="group bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 justify-center text-sm sm:text-base">
                <BookOpen size={18} className="sm:w-5 sm:h-5" />
                View Publications
              </button>
              <button onClick={handleScheduleMeeting} className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center gap-3 justify-center text-sm sm:text-base">
                <Calendar size={18} className="sm:w-5 sm:h-5" />
                Invite for Speech
                <ChevronDown size={14} className="sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Mobile-Optimized Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 text-center">
              <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">12+</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">Years Teaching</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">₹494L</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">Research Grants</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">25+</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">Publications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-Optimized Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Dr. Karthikeyan A is an Associate Professor at SNS College of Technology with over 15 years of combined academic and industry experience. Holding a Ph.D. in Wireless Sensor Networks, he is a recognized Anna University supervisor currently mentoring 4 doctoral scholars. His primary research interests include WSN, VLSI Design, Computer Networking, and Renewable Energy.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                His contributions are highlighted by a ₹4.94 Crores MeitY research grant and the prestigious "Confederation-of-Elite-Academician" award. A prolific author with over 35 journal publications, his expertise is sought for peer review by publishers like Springer and Elsevier. He holds life memberships in several professional bodies, including IEEE Collabratec and MIAENG.
              </p>
            </div>

            <div className="space-y-4 mt-8 lg:mt-0">
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Education</h4>
                <p className="text-gray-700 text-sm sm:text-base">Ph.D. in Information and Communication Engineering</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Current Position</h4>
                <p className="text-gray-700 text-sm sm:text-base">Associate Professor & Placement Coordinator<br />SNS College of Technology</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Specialization</h4>
                <p className="text-gray-700 text-sm sm:text-base">Electronics & Communication Engineering, Career Development, Industry Relations</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 mx-auto mb-2" />
                <div className="font-semibold text-gray-800 text-sm sm:text-base">Student Mentoring</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 mx-auto mb-2" />
                <div className="font-semibold text-gray-800 text-sm sm:text-base">Research Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Slider */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Achievements Gallery
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gray-900">
              <div
                className={`flex transition-transform duration-500 ease-in-out`}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {extendedImages.map((img, index) => (
                  <div
                    key={`${index}-${img}`}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3"
                  >
                    <img
                      src={img}
                      alt={`Achievement ${(index % achievements.length) + 1}`}
                      className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl sm:rounded-2xl"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={handlePrevious}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 sm:p-3 shadow-xl transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 sm:p-3 shadow-xl transition-all duration-200 hover:scale-110"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline container with proper height */}
            <div className="space-y-8 sm:space-y-12 relative">
              {/* Timeline line - positioned properly */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-white rounded-full transform -translate-x-1/2 z-0"></div>

              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 relative">
                <div className="w-full lg:w-1/2 lg:text-right">
                  <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 border-l-4 border-l-gray-900">
                    <div className="text-gray-700 font-semibold text-sm mb-2">2012 – Present</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Associate Professor & Placement Coordinator</h3>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">SNS College of Technology</p>
                    <p className="text-gray-600 text-sm sm:text-base">Leading placement activities, industry partnerships, and academic excellence in ECE department.</p>
                  </div>
                </div>
                <div className="hidden lg:flex w-12 h-12 bg-white rounded-full items-center justify-center z-10 shadow-lg relative">
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 relative">
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 border-l-4 border-l-gray-700">
                    <div className="text-gray-700 font-semibold text-sm mb-2">2008 – 2010</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">IT Networking Engineer</h3>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">Suntronix & Mirthikka Computers, Chennai</p>
                    <p className="text-gray-600 text-sm sm:text-base">Gained valuable industry experience in networking and IT infrastructure management.</p>
                  </div>
                </div>
                <div className="hidden lg:flex w-12 h-12 bg-white rounded-full items-center justify-center z-10 shadow-lg relative">
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Awards & Grants
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transform hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Awards & Recognition</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gray-100 p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-l-gray-700">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Iconic Academician Award</div>
                  <div className="text-xs sm:text-sm text-gray-600">Scientific Laurels, 2025</div>
                </div>
                <div className="bg-gray-100 p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-l-gray-600">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Motivational Grid Award</div>
                  <div className="text-xs sm:text-sm text-gray-600">SNS College - ₹21,000 Prize (2022)</div>
                </div>
                <div className="bg-gray-100 p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-l-gray-800">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Best Paper Award</div>
                  <div className="text-xs sm:text-sm text-gray-600">Novel Research Academy, 2019</div>
                </div>
                <div className="bg-gray-100 p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-l-gray-900">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">I2OR Bright Researcher Award</div>
                  <div className="text-xs sm:text-sm text-gray-600">I2OR India, 2018</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transform hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Research Grants</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gray-100 p-4 sm:p-6 rounded-lg sm:rounded-xl border-l-4 border-l-gray-700">
                  <div className="font-semibold text-gray-900 text-base sm:text-lg">MeitY C2S Program</div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 my-2">₹494 Lakhs</div>
                  <div className="text-xs sm:text-sm text-gray-600">2023 - Major funding achievement</div>
                </div>
                <div className="bg-gray-100 p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-l-gray-600">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Anna University FDP</div>
                  <div className="text-base sm:text-lg font-bold text-gray-700">₹30,000</div>
                  <div className="text-xs sm:text-sm text-gray-600">2022</div>
                </div>
                <div className="bg-gray-100 p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-l-gray-800">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">DST–NIMAT Entrepreneurship Camps</div>
                  <div className="text-base sm:text-lg font-bold text-gray-700">₹1.2 Lakhs</div>
                  <div className="text-xs sm:text-sm text-gray-600">2016–2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 sm:py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Recent Publications
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
              <div className="text-gray-700 font-semibold text-xs sm:text-sm mb-2">Elsevier, 2024</div>
              <h3 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">ScAlN/GaN HEMTs Analysis</h3>
              <p className="text-gray-600 text-sm mb-4">Advanced semiconductor device analysis and optimization techniques.</p>
              <div className="flex items-center text-gray-800 text-sm font-semibold hover:text-gray-900 cursor-pointer">
                <ExternalLink size={14} className="mr-1 sm:w-4 sm:h-4" />
                View Publication
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
              <div className="text-gray-700 font-semibold text-xs sm:text-sm mb-2">Taylor & Francis, 2024</div>
              <h3 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">TEE-AODV for MANET</h3>
              <p className="text-gray-600 text-sm mb-4">Trusted execution environment for mobile ad-hoc networks.</p>
              <div className="flex items-center text-gray-800 text-sm font-semibold hover:text-gray-900 cursor-pointer">
                <ExternalLink size={14} className="mr-1 sm:w-4 sm:h-4" />
                View Publication
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
              <div className="text-gray-700 font-semibold text-xs sm:text-sm mb-2">Wiley, 2024</div>
              <h3 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Weighted Clustering in MANETs</h3>
              <p className="text-gray-600 text-sm mb-4">Innovative clustering algorithms for network optimization.</p>
              <div className="flex items-center text-gray-800 text-sm font-semibold hover:text-gray-900 cursor-pointer">
                <ExternalLink size={14} className="mr-1 sm:w-4 sm:h-4" />
                View Publication
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-gray-300">Ready to discuss placement opportunities or academic collaboration?</p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-900">Let's Connect</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">

              {/* Email */}
              <div className="p-4 sm:p-6 bg-gray-100 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Email</h4>
                <a href="mailto:karthikeyan@snsct.org" className="text-gray-700 text-sm sm:text-base break-all hover:underline">
                  karthikeyan@snsct.org
                </a>
              </div>

              {/* Phone */}
              <div className="p-4 sm:p-6 bg-gray-100 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Phone</h4>
                <a href="tel:+919876543210" className="text-gray-700 text-sm sm:text-base hover:underline">
                  +91 9876543210
                </a>
              </div>

              {/* Location */}
              <div className="p-4 sm:p-6 bg-gray-100 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Location</h4>
                <a
                  href="https://www.google.com/maps/place/SNS+College+of+Technology/@11.1270286,76.9965404,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-sm sm:text-base hover:underline"
                >
                  SNS College of Technology<br />
                  Coimbatore, Tamil Nadu
                </a>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <button
                onClick={handleScheduleMeeting}
                className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base cursor-pointer"
              >
                Schedule a Meeting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white pt-6 sm:pt-8 border-t-2 border-white">
        <div className="px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-base sm:text-lg font-semibold">Dr. A. Karthikeyan</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center w-full px-0 sm:px-4 py-2 gap-2 sm:gap-0">
            <p className="text-sm sm:text-base mb-2 sm:mb-4">Associate Professor & Placement Coordinator</p>
            <p className="text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Dr. A. Karthikeyan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}