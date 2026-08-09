const teachingData = [
	{
		course: "DS-752: Human-AI Sensemaking",
		term: "Spring 2026",
		bullets: [
			"Facilitated and helped organize weekly discussions for six PhD students, contributing observations and surfacing potential research directions.",
			"Supported students through a collaborative research project; resulting workshop paper accepted at the ACM CHI 2026 BiAlign Workshop.",
			"Actively engaged in ongoing projects on track for upcoming conference submissions.",
		],
	},
	{
		course: "DS-650: Data Visualization",
		term: "Spring 2025 & Fall 2025",
		bullets: [
			"Designed and delivered Tableau lectures for a graduate-level course, emphasizing not just tool usage but the reasoning behind when and why to use specific visualizations and how to draw meaningful conclusions from them.",
			"Mentored students on independent research projects (2 undergraduate, 3 graduate, 3 doctoral across both semesters), guiding them from implementation through analytical interpretation and broader research impact.",
			"Shifted students from reporting outputs to actively analyzing results; mentorship contributed to paper submissions to ACM FAccT 2026, IEEE VIS 2026, and other venues.",
		],
	},
];

const Teaching = () => {
	return (
		<section id="teaching" className="py-20 px-4 bg-background">
			<div className="max-w-4xl mx-auto">
				<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-8">
					<h2 className="text-3xl font-bold text-textPrimary">Teaching</h2>
					<span className="text-sm text-textSecondary italic">
						Spring 2025 – Present
					</span>
				</div>
				<div className="space-y-6">
					{teachingData.map((item, idx) => (
						<div key={idx} className="border-l-4 border-accentTeal pl-5">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
								<h3 className="text-lg font-semibold text-textPrimary">
									{item.course}
								</h3>
								<span className="text-sm text-textSecondary italic shrink-0">
									{item.term}
								</span>
							</div>
							<ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-sm text-textSecondary leading-relaxed">
								{item.bullets.map((b, i) => (
									<li key={i}>{b}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Teaching;
