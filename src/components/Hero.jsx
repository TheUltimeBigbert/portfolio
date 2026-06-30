import profilePhoto from '../assets/profile.png'
import { RESUME_URL, RESUME_FILENAME } from '../constants'

function Hero() {
  return (
    <section id="home" className="text-center py-20 px-4">
      <span className="inline-block bg-blue-600/20 text-blue-300 text-sm font-medium px-4 py-1 rounded-full border border-blue-500/30">
        Open to Frontend Development & IT Opportunities
      </span>

      <img
        src={profilePhoto}
        alt="John Robert R. Rogel"
        className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 object-cover object-top mt-8"
      />

      <h1 className="text-5xl font-bold mt-6">
        John Robert R. Rogel
      </h1>

      <p className="text-xl text-gray-300 mt-3">
        Computer Science Graduate · Frontend Developer
      </p>

      <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-relaxed">
        I build clean, responsive web interfaces and contribute to
        real-world systems—from thesis projects to internship IT work.
        I focus on frontend development, user experience, and turning
        requirements into working UI.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          View My Work
        </a>
        <a
          href={RESUME_URL}
          download={RESUME_FILENAME}
          className="border border-slate-500 hover:border-blue-400 hover:text-blue-300 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default Hero
