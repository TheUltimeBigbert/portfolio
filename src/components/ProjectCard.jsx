function ProjectCard({ title, role, description, highlights, tech }) {
  return (
    <article className="bg-slate-700 rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>

        {role && (
          <p className="mt-2 text-sm text-blue-300 font-medium">
            My Role: {role}
          </p>
        )}

        <p className="mt-3 text-gray-300">{description}</p>

        {highlights?.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-blue-400 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-4 text-sm text-blue-300">{tech}</p>
      </div>
    </article>
  )
}

export default ProjectCard
