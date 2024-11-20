import { Smartphone, Globe2, ChevronDown, Code2, Server, Terminal } from 'lucide-react';

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
      skills: ['Git', 'Docker', 'CI/CD', 'Trello', 'Firebase', 'Jenkins', 'Ansible']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compétences & Expertise</h2>
          <p className="text-lg text-gray-600">Technologies avec lesquelles je travaille</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
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