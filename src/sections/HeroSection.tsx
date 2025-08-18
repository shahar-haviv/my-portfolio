import ScrollAnimation from "../components/ScrollAnimation";

const HeroSection = () => {
	return (
		<ScrollAnimation id="hero" className="h-screen flex items-center justify-center relative">
			<div className="text-center -translate-y-14">
				<h1 className="font-heebo">
					<span className="block text-3xl md:text-5xl text-white">Hi, I am</span>
					<span className="block text-6xl md:text-9xl font-bold name-glow">Shahar</span>
					<span className="block text-3xl md:text-5xl text-white">Backend Engineer</span>
				</h1>
				<div className="mt-8">
					<div className="w-6 h-10 border-2 border-white rounded-full mx-auto relative">
						<div className="w-1.5 h-3 bg-white rounded-full mx-auto mt-2 animate-bounce"></div>
					</div>
					<p className="text-white mt-2 text-sm">Scroll to explore</p>
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default HeroSection;


