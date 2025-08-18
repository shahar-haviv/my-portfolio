import ScrollAnimation from "../components/ScrollAnimation";

const SkillsSection = () => {
	return (
		<ScrollAnimation id="skills" className="min-h-screen flex items-center justify-center px-8 py-20">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-6xl font-bold text-white mb-16 font-heebo">Skills & Technologies</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{ title: "Backend Development", skills: ["Node.js", "Python", "Java", "Clojure"], color: "from-blue-500 to-cyan-500" },
						{ title: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"], color: "from-green-500 to-emerald-500" },
						{ title: "Cloud & DevOps", skills: ["AWS", "AZURE", "Kubernetes", "CI/CD"], color: "from-purple-500 to-pink-500" },
						{ title: "Architecture", skills: ["Microservices", "REST APIs", "Video Streaming", "Event-Driven"], color: "from-orange-500 to-red-500" },
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
	);
};

export default SkillsSection;


