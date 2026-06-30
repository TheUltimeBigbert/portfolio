function ProjectCard({ title, role, description, highlights, tech, videoSrc, videoLabel }) {
  return (
    <article className="bg-slate-700 rounded-lg overflow-hidden">
      <video
        src={videoSrc}
        controls
        muted
        playsInline
        preload="metadata"
        className="w-full aspect-video object-cover bg-black"
        aria-label={videoLabel}
      >
        Your browser does not support the video tag.
      </video>

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
