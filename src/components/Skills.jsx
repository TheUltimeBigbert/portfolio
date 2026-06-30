const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'JavaScript', 'SQL', 'Java'],
  },
  {
    title: 'Web Development',
    items: ['React', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Database & Tools',
    items: ['MySQL', 'Git', 'GitHub', 'VS Code'],
  },
]

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map(({ title, items }) => (
          <div key={title} className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-bold mb-3">{title}</h3>
            <ul className="space-y-1 text-gray-300">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
