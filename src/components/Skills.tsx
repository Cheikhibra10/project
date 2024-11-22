import { Smartphone, Globe2, Code2, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe2,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: Code2,
      skills: ['Node.js', 'Express', 'NestJs', 'Spring Boot', 'MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: ['Flutter', 'iOS', 'Android']
    },
    {
      title: 'Outils',
      icon: Code2,
      skills: ['Git', 'Docker', 'CI/CD', 'Trello', 'Firebase', 'Jenkins', 'Ansible', 'Anglais']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideDown">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            Compétences & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Technologies avec lesquelles je travaille
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                transform hover:scale-105 transition-all duration-300
                dark:bg-gray-800 animate-slideUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4 group">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 
                  transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <category.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3 
                  transform group-hover:translate-x-1 transition-transform duration-300">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-center text-gray-600 dark:text-gray-300
                      transform hover:translate-x-2 transition-transform duration-300
                      hover:text-indigo-600 dark:hover:text-indigo-400"
                    style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                  >
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2 
                      transform transition-all duration-300 group-hover:scale-150"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;