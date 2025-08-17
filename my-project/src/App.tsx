
import './App.css'
import AboutButton from "./components/AboutButton";
import ScrollAnimation from "./components/ScrollAnimation";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="min-h-screen bg-[url('/src/assets/bg16.svg')] bg-cover bg-fixed">
      {/* Top-left About Me button */}
      <AboutButton />

      {/* Right-side Navigation */}
      <Navigation />

      {/* Hero Section */}
      <ScrollAnimation id="hero" className="h-screen flex items-center justify-center relative">
        <div className="text-center -translate-y-14">
          <h1 className="font-heebo">
            <span className="block text-5xl text-white">Hi, I am</span>
            <span className="block text-9xl font-bold name-glow">Shahar</span>
            <span className="block text-5xl text-white">Backend Engineer</span>
          </h1>
          <div className="mt-8">
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto relative">
              <div className="w-1.5 h-3 bg-white rounded-full mx-auto mt-2 animate-bounce"></div>
            </div>
            <p className="text-white mt-2 text-sm">Scroll to explore</p>
          </div>
        </div>
      </ScrollAnimation>

      {/* About Me Section */}
      <ScrollAnimation id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-12 font-heebo">About Me</h2>
          <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              I'm a passionate Backend Engineer with expertise in building scalable, high-performance systems. 
              I love solving complex problems and creating robust solutions that power modern applications.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Skills Section */}
      <ScrollAnimation id="skills" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-16 font-heebo">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Backend Development", skills: ["Node.js", "Python", "Java", "Go"], color: "from-blue-500 to-cyan-500" },
              { title: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"], color: "from-green-500 to-emerald-500" },
              { title: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD"], color: "from-purple-500 to-pink-500" },
              { title: "Architecture", skills: ["Microservices", "REST APIs", "GraphQL", "Event-Driven"], color: "from-orange-500 to-red-500" },
              { title: "Testing", skills: ["Jest", "PyTest", "Unit Testing", "Integration"], color: "from-yellow-500 to-orange-500" },
              { title: "Tools", skills: ["Git", "VS Code", "Postman", "Swagger"], color: "from-indigo-500 to-blue-500" }
            ].map((category, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300 hover-lift">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-white/80 text-lg">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Experience Section */}
      <ScrollAnimation id="experience" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-16 font-heebo">Experience</h2>
          <div className="space-y-12">
            {[
              {
                role: "Senior Backend Engineer",
                company: "Tech Company",
                period: "2022 - Present",
                description: "Leading backend development for high-traffic applications, mentoring junior developers, and implementing best practices."
              },
              {
                role: "Backend Developer",
                company: "Startup",
                period: "2020 - 2022",
                description: "Built scalable microservices architecture and RESTful APIs for mobile and web applications."
              },
              {
                role: "Software Engineer",
                company: "Enterprise",
                period: "2018 - 2020",
                description: "Developed and maintained critical business applications with focus on performance and reliability."
              }
            ].map((job, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-left hover-lift">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                  <span className="text-white/70 text-lg">{job.period}</span>
                </div>
                <div className="text-white/80 text-lg mb-3">{job.company}</div>
                <p className="text-white/90 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Contact Section */}
      <ScrollAnimation id="contact" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-16 font-heebo">Let's Connect</h2>
          <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <p className="text-xl text-white/90 mb-8">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together or just want to chat about technology!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Email", value: "shahar@example.com", icon: "📧" },
                { name: "LinkedIn", value: "linkedin.com/in/shahar", icon: "💼" },
                { name: "GitHub", value: "github.com/shahar", icon: "🐙" },
                { name: "Twitter", value: "@shahar_dev", icon: "🐦" }
              ].map((contact, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300 hover-lift">
                  <div className="text-4xl mb-2">{contact.icon}</div>
                  <div className="text-white font-semibold">{contact.name}</div>
                  <div className="text-white/80">{contact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default App
