const highlights = [
  {
    label: 'Education',
    value: 'BS Computer Science Graduate',
  },
  {
    label: 'Focus Areas',
    value: 'Frontend Development, UI & Data Gathering',
  },
  {
    label: 'Experience',
    value: 'IT Intern — Laguna Water Corporation',
  },
  {
    label: 'Credentials',
    value: 'Google Certifications & Cisco Digital Badges',
  },
]

function Highlights() {
  return (
    <section className="border-y border-slate-700 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ label, value }) => (
            <div key={label} className="text-center sm:text-left">
              <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                {label}
              </p>
              <p className="mt-1 text-sm text-gray-200">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
