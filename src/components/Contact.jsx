import { EMAIL, PHONE, PHONE_TEL, RESUME_URL, RESUME_FILENAME, GITHUB_URL } from '../constants'

function Contact() {
  return (
    <section id="contact" className="text-center py-20 px-6">
      <h2 className="text-3xl font-bold mb-2">
        Let&apos;s Connect
      </h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Interested in my work? Download my resume or reach out—I would love
        to hear about opportunities where I can contribute and grow.
      </p>

      <div className="space-y-2 text-gray-300">
        <p>
          Email:{' '}
          <a
            href={`mailto:${EMAIL}`}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            {EMAIL}
          </a>
        </p>
        <p>
          Phone:{' '}
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            {PHONE}
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            TheUltimeBigbert
          </a>
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <a
          href={RESUME_URL}
          download={RESUME_FILENAME}
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Download Resume
        </a>
        <a
          href={`mailto:${EMAIL}?subject=Portfolio%20Inquiry`}
          className="border border-slate-500 hover:border-blue-400 hover:text-blue-300 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

export default Contact
