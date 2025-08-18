import ScrollAnimation from "../components/ScrollAnimation";

const ExperienceSection = () => {
	return (
		<ScrollAnimation id="experience" className="min-h-screen flex items-center justify-center px-8 py-20">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-6xl font-bold text-white mb-16 font-heebo">Experience</h2>
				<div className="space-y-12">
					{[
						{
							role: "Backend Engineer",
							company: "Reserve-8200",
							period: "March 2025- Present",
							period2: "October 2023-January 2024",
							description: "Built and maintained a cloud backend from scratch, processing millions of files daily with high efficiency. Led key technical decisions on architecture and infrastructure, ensuring optimal performance, scalability, and reliability. Mentored and guided a team of developers, fostering best practices in coding, testing, and deployment. Coordinated cross-functional efforts to meet tight deadlines, implemented robust monitoring and alerting systems, and continuously optimized workflows to reduce latency and resource usage."
						},
						{
							role: "Backend Engineer",
							company: "Sproutt",
							period: "February 2023 - October 2023",
							description: "Built and optimized a high-traffic AWS platform using TypeScript, Python, and Clojure, handling complex workloads with efficiency and scalability. Designed and implemented robust backend services, improving system performance and reliability. Collaborated with cross-functional teams to accelerate post-investment growth, enhanced monitoring and alerting systems, automated deployment pipelines, and contributed to architectural improvements that ensured speed, stability, and maintainability."
						},
						{
							role: "Backend Engineer",
							company: "8200",
							period: "March 2021-January 2023",
							description: "Developed high-scale microservices in TypeScript (NestJS) with PostgreSQL and RabbitMQ, building multiple services from scratch to support complex workflows. Designed and implemented the entire DevOps environment, including end-to-end CI/CD pipelines, automated deployments, and infrastructure provisioning. Led technical direction for the team, making key architectural decisions, mentoring developers, and ensuring best practices for performance, scalability, and reliability across all services."
						},
						{
							role: "Backend Engineer",
							company: "Hoodie",
							period: "December 2021-August 2022",
							description: "Co-developed Hoodie, a prop-tech app, using TypeScript (NestJS) and MongoDB, supported by Azure for Startups. As the company's first developer, I architected and built core backend services from scratch, implemented critical workflows, and helped secure $25K in Azure support. This experience demonstrates my ability to take an idea from zero to a fully functioning, scalable product in an early-stage startup environment."
						},
						{
							role: "Commander",
							company: "IDF-bsmch",
							period: "November 2019-March  2021",
							description: "Served as a commander overseeing 100+ cadets, leading projects, training teams, and fostering personal and professional growth. This role was highly impactful, strengthening my leadership skills, public speaking abilities, and overall character, and shaping me into a more confident and resilient individual."
						}
					].map((job, index) => (
						<div key={index} className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-left hover-lift">
							<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
								<h3 className="text-2xl font-bold text-white">{job.role}</h3>
								<div className="flex flex-col text-right">
									<span className="text-white/70 text-lg">{job.period}</span>
									{job.period2 && <span className="text-white/70 text-lg">{job.period2}</span>}
								</div>
							</div>
							<div className="text-white/80 text-lg mb-3">{job.company}</div>
							<p className="text-white/90 leading-relaxed">{job.description}</p>
						</div>
					))}
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default ExperienceSection;


