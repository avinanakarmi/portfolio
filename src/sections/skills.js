const skillCategories = [
	{
		category: "AI System Design & Evaluation",
		skills:
			"Reasoning-guided AI pipeline design, Evidence-grounded response generation, LLM evaluation and benchmarking, Evaluation harness development, RAG, Chain-of-Verification, Prompt engineering",
		color: "border-accentTeal",
	},
	{
		category: "Multimodal AI & Human-AI Interaction",
		skills:
			"Information visualization, Multimodal reasoning (text and visualization), Human-centered AI research methods, Multimodal LLMs (GPT, Gemini, Claude)",
		color: "border-accentLavender",
	},
	{
		category: "Research Methods & Data Analysis",
		skills:
			"Human-subject studies, Community-based participatory research, Qualitative thematic analysis, Statistical evaluation, Participatory design",
		color: "border-accentYellow",
	},
	{
		category: "Programming, Data & Visualization",
		skills:
			"Python, JavaScript, D3.js, Tableau, Matplotlib, Seaborn, SQL, Pandas, NumPy, scikit-learn, React / Next.js, React Native, FastAPI, PostgreSQL, Docker, Git",
		color: "border-accentTeal",
	},
];

const Skills = () => {
	return (
		<section id="skills" className="py-20 px-4 bg-background">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-textPrimary mb-8">Technical Skills</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{skillCategories.map((cat, idx) => (
						<div
							key={idx}
							className={`bg-white rounded-lg shadow-soft p-5 border-l-4 ${cat.color}`}
						>
							<h3 className="text-base font-semibold text-textPrimary mb-2">
								{cat.category}
							</h3>
							<p className="text-sm text-textSecondary leading-relaxed">
								{cat.skills}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
