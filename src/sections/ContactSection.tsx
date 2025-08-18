import ScrollAnimation from "../components/ScrollAnimation";

const ContactSection = () => {
	return (
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
							{ name: "Email", value: "shahar.haviv125@gmail.com", icon: "📧", link: "mailto:shahar.haviv125@gmail.com" },
							{ name: "LinkedIn", value: "https://www.linkedin.com/in/shahar-haviv-960760255/", icon: "💼", link: "https://www.linkedin.com/in/shahar-haviv-960760255/" },
							{ name: "GitHub", value: "https://github.com/shahar-haviv", icon: "🐙", link: "https://github.com/shahar-haviv" },
							// { name: "Twitter", value: "@shahar_dev", icon: "🐦" }
						].map((contact, index) => (
							<a
								key={index}
								href={contact.link}
								target={contact.link?.startsWith('http') ? "_blank" : undefined}
								rel={contact.link?.startsWith('http') ? "noopener noreferrer" : undefined}
								className="bg-black/20 backdrop-blur-sm rounded-xl p-6 hover:bg:white/20 transition-colors duration-300 hover-lift cursor-pointer"
							>
								<div className="text-4xl mb-2">{contact.icon}</div>
								<div className="text-white font-semibold">{contact.name}</div>
								<div className="text-white/80">{contact.value}</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default ContactSection;


