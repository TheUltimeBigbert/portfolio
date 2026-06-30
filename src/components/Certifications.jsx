const examCertifications = [
  'Google Analytics Certification',
  'Google AI-Powered Performance Ads Certification',
]

const digitalBadges = [
  'Cisco Networking Academy – Endpoint Security (Digital Badge)',
  'Cisco Networking Academy – Python Essentials 1 (Digital Badge)',
]

function CredentialGroup({ title, items }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item} className="bg-slate-700 p-5 rounded-lg">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="bg-slate-800 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <CredentialGroup
          title="Certifications (Professional, Exam-Proctored)"
          items={examCertifications}
        />

        <CredentialGroup
          title="Professional Development & Coursework (Verified Digital Badges)"
          items={digitalBadges}
        />
      </div>
    </section>
  )
}

export default Certifications
