import ScrollAnimation from "../components/ScrollAnimation";

const AboutSection = () => {
	return (
		<ScrollAnimation id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-12 md:py-20">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-4xl md:text-6xl font-bold text-white mb-8 md:mb-12 font-heebo">About Me</h2>
				<div className="bg-black/20 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/20">
					<p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 md:mb-8">
						Backend Engineer with over 4 years of experience designing, building, and optimizing large-scale cloud systems.
						Skilled in TypeScript, Clojure, and Python, with hands-on expertise in both AWS and Azure environments.
						Proven track record of developing scalable backend services, improving system performance, and supporting high-traffic platforms.
						Experienced working in fast-paced settings, mentoring developers, and contributing to architectural decisions that enhance reliability and speed.
					</p>
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default AboutSection;


