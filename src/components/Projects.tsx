import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Gestion des Dettes',
      description: 'Une solution pour gestion des dettes avec React, Node.js, NestJs et MongoDB',
      image: '/secondProject.png?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Node.js', 'NestJs', 'Docker', 'MongoDB', 'Twilio'],
      github: 'https://github.com/Cheikhibra10/JS.git',
      demo: '#'
    },
    {
      title: 'Site de Fast-Food',
      description: 'Une solution pour faire une commande sans se déplacer',
      image: '/firstProject.png?auto=format&fit=crop&q=80&w=800',
      tech: ['Html', 'Css'],
      github: 'https://github.com/Cheikhibra10/cours-html-css.git',
      demo: '#'
    },
    {
      title: 'Gestion de Scolarité Api',
      description: 'Une solution pour la gestion des établissements',
      image: '/thirdProject.png?auto=format&fit=crop&q=80&w=800',
      tech: ['Spring Boot', 'Postman'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mes Projets</h2>
          <p className="text-lg text-gray-600">Quelques-unes de mes réalisations récentes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4">
                    <a href={project.github} className="p-2 bg-white rounded-full hover:bg-gray-100">
                      <Github className="h-5 w-5 text-gray-900" />
                    </a>
                    <a href={project.demo} className="p-2 bg-white rounded-full hover:bg-gray-100">
                      <ExternalLink className="h-5 w-5 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;