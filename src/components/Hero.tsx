import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';

const Hero = () => {
  const [animate, setAnimate] = useState(true);

  // Function to handle animation reset
  const resetAnimation = () => {
    setAnimate(false);
    // Force a reflow before re-enabling animations
    setTimeout(() => setAnimate(true), 50);
  };

  // Listen for custom event from Navbar
  useEffect(() => {
    const handleHomeClick = () => resetAnimation();
    window.addEventListener('navigateToHome', handleHomeClick);
    
    return () => {
      window.removeEventListener('navigateToHome', handleHomeClick);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 ${animate ? 'animate-blob' : ''}`}></div>
        <div className={`absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 ${animate ? 'animate-blob animation-delay-2000' : ''}`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 ${animate ? 'animate-blob animation-delay-4000' : ''}`}></div>
      </div>

      <div className={`max-w-full mx-auto justify-around items-center my-14 px-4 sm:px-6 lg:px-8 py-20 flex ${animate ? 'animate-fadeIn' : ''}`}>
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-6 md:space-y-0 md:space-x-10">
          {/* Picture Section */}
          <div className={`relative max-w-full ${animate ? 'animate-slideInLeft' : ''}`}>
            <img
              src="/profile.png?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Profile"
              className="rounded-full w-40 h-40 sm:w-96 sm:h-96 object-cover border-4 border-white shadow-lg transform hover:scale-110 transition-all duration-500 ease-in-out"
            />
            {/* Dev Icon Badge - enhanced animation */}
            <div className="absolute md:mr-16 md:mb-4 mr-4 mt-4 -bottom-2 -right-2 bg-blue-600 rounded-full p-2 border-4 border-white shadow-lg animate-bounce hover:bg-indigo-600 transition-colors duration-300">
              <Code2 className="md:h-8 md:w-8 text-white" />
            </div>
          </div>

          {/* Description Section */}
          <div className={`${animate ? 'animate-slideInRight' : ''}`}>
            {/* Title and Description */}
            <div className="space-y-4 mb-8">
              <h2 className="text-lg text-indigo-600 font-semibold mb-2 tracking-wide uppercase">
                Bonjour, Je suis
              </h2>
              <h1 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 to-purple-600 bg-clip-text text-transparent typewriter-effect font-poppins">
                Cheikh Ibra Mbengue
              </h1>
              <h2 className="text-3xl font-bold text-gray-700 mb-6">
                Full-Stack Developer
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Développeur spécialisé dans la création d’expériences web et mobiles modernes et évolutives.
                Passionné par l’innovation, je travaille efficacement en équipe et m’adapte rapidement aux nouvelles technologies pour relever tous les défis techniques.
                Ensemble, créons des solutions qui marquent !
              </p>
            </div>

            {/* Social Links - enhanced animation */}
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              <a
                href="https://github.com/Cheikhibra10"
                className="p-3 bg-white rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-125 hover:shadow-lg hover:rotate-6"
              >
                <Github className="h-6 w-6 text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/cheikh-ibra-mbengue-b8968b236/"
                className="p-3 bg-white rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-125 hover:shadow-lg hover:rotate-6"
              >
                <Linkedin className="h-6 w-6 text-gray-700" />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-125 hover:shadow-lg hover:rotate-6"
              >
                <Twitter className="h-6 w-6 text-gray-700" />
              </a>
            </div>

            {/* Buttons - enhanced animation */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects">
                <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:translate-y-[-4px] active:scale-95">
                  <span className="flex items-center justify-center">
                    Voir Projets
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </a>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('navigateToSection', { 
                  detail: { section: 'contact' } 
                }));
              }}>
                <button className="px-8 py-3 bg-white text-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:translate-y-[-4px] active:scale-95 border border-gray-200">
                  Contactez-moi
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${animate ? 'animate-bounce' : ''}`}>
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
