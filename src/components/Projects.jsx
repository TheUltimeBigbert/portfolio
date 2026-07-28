import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Cyber Threat Detection Using Machine Learning',
    role: 'Frontend Developer & Data Gathering',
    description:
      'Team capstone project that applies supervised learning to identify and classify network-based cyber threats. I built the web interface and collected data used by the system.',
    highlights: [
      'Developed the React frontend for monitoring and analysis dashboards',
      'Gathered and organized datasets used for the ML threat detection system',
      'Collaborated with teammates on ML integration and system workflow',
    ],
    tech: 'React • JavaScript • Data Gathering • Machine Learning (Team Project)',
  },
  {
    title: 'Cordillera',
    role: 'Frontend Developer',
    description:
      'A web platform that showcases Cordillera weaving traditions and helps preserve cultural heritage through digital storytelling.',
    highlights: [
      'Designed a web platform connecting weaving culture with modern users',
      'Built interactive UI focused on cultural preservation and engagement',
      'Collaborated on platform features for showcasing weaving traditions',
    ],
    tech: 'React • Web Development',
  },
  {
    title: 'MediCore HMS',
    role: 'Frontend Developer',
    description:
      'Developed a responsive hospital management system interface with interactive dashboards, patient records, appointments, and billing views.',
    highlights: [
      'Created user-friendly pages for patients, doctors, laboratory, pharmacy, and settings modules',
      'Improved UI/UX and feature integration to make the platform feel functional and modern',
      'Assisted in testing, debugging, and refining the app for usability and responsiveness',
    ],
    tech: 'Next.js • React • TypeScript • Tailwind CSS • HTML5 • CSS3 • Supabase',
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-slate-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Projects
        </h2>
        <p className="text-gray-400 mb-8">
          Selected work that shows how I build interfaces and contribute to team projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
