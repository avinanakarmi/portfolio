const badgeStyles = {
	Award: "bg-accentYellow text-textPrimary",
	Talk: "bg-accentTeal text-textPrimary",
	Poster: "bg-accentLavender text-textPrimary",
	Paper: "bg-accentTeal text-textPrimary",
	Milestone: "bg-accentTeal text-textPrimary",
};

const statusStyles = {
	Accepted: "border border-accentTeal text-textSecondary",
	Published: "border border-accentLavender text-textSecondary",
};

const highlightsData = [
	{
		date: "2026",
		type: "Paper",
		status: "Accepted",
		title:
			"A Multimodal Reasoning Typology for Grounding Chart-Image Coherence in Science Communication",
		venue: "IEEE Visualization Conference (VIS) 2026 · Short Papers",
		note:
			"Accepted and final submission uploaded — a typology for reasoning about whether a chart and its surrounding text actually cohere in science communication.",
	},
	{
		date: "2026",
		type: "Paper",
		status: "Accepted",
		title:
			"AI as a Caring Neighbor: Shaping Collective Environmental Health Intelligence through Community Knowledge Ecosystems",
		venue: "Collective Intelligence (CI) 2026 · Talks",
		note:
			"Accepted for a talk — framing AI as a participant in a community knowledge ecosystem, where environmental health intelligence is built collectively rather than delivered top-down.",
	},
	{
		date: "Jul 2026",
		type: "Talk",
		status: "Published",
		title:
			"POINTERS at UZH Shared Task 2026: Reasoning Probes for Argumentation Mining in UN Resolutions",
		venue:
			"Workshop on Argument Mining and Reasoning, ACL 2026 · San Diego, CA",
		note:
			"My first major conference, presenting a staged pipeline that treats reconstructing UN resolutions as reasoning rather than classification — the week left me with a notebook full of challenged assumptions about how AI reasoning and visualization research are chasing the same questions from different angles.",
	},
	{
		date: "2026",
		type: "Poster",
		title:
			"From Individual Expertise to Distributed Cognition: Towards Community-Centered Agentic AI for Environmental Sensemaking",
		venue: "NEAgents Day 2026",
		note:
			"An agentic-AI information gatekeeping dashboard exploring how community leaders verify AI-generated claims about issues like lead in drinking water, using distributed cognition to grow the community's collective intelligence from their lived experiences.",
	},
	{
		date: "Jun 2026",
		type: "Poster",
		title:
			"Leap of fAIth: Operationalizing Equitable Information Sensemaking via Community-Centered and Participatory AI-driven Science",
		venue: "NJIT Science Symposium · Jun 4",
		note:
			"A symposium built around communities collaborating with academia — seeing our work through that lens showed me how much research changes when it is measured by real-world impact rather than in-lab experiments.",
	},
	{
		date: "Jun 2026",
		type: "Award",
		title: "Excellence in Teaching by a TA",
		venue: "Ying Wu College of Computing, NJIT",
		note:
			"Being a TA pushed me to explore new directions and deepened my own understanding in ways I didn't anticipate.",
	},
	{
		date: "Dec 2025",
		type: "Milestone",
		title:
			"VisClaimer: Semantic Abstractions for Multimodal Information Communication",
		venue: "PhD Qualifying Exam · NJIT",
		note:
			"Presented a Claim–Evidence–Reasoning framework where a generator/validator pipeline of multimodal LLMs turns scientific chart captions and context into validated claims, supporting evidence, and reasoning strategies — motivated by the gap between what a chart shows and what its caption tells.",
	},
	{
		date: "2025",
		type: "Award",
		title:
			"Leap of fAIth: Operationalizing Equitable Information Sensemaking via Community-Centered and Participatory AI-driven Science",
		venue: "GSA Research Day · 2nd Place",
		note:
			"A participatory, community-centered AI framework using a two-LLM pipeline to turn water-quality data into empathetic, trustworthy messaging for residents.",
	},
	{
		date: "Spring 2025",
		type: "Poster",
		title: "Leap of fAIth — Equitable, Community-Centered AI-driven Science",
		venue: "AI Exploration Day Student Showcase · NJIT",
		note:
			"An early showcase of the Leap of fAIth work on community-centered AI for science communication.",
	},
	{
		date: "Apr 2025",
		type: "Poster",
		title:
			"Towards a Systematic Understanding of Visualization-enabled Multimodal Interpretability",
		venue: "Dana Knox Student Showcase · Apr 22",
		note:
			"Studies how caption content and design features affect the interpretability of scientific charts, proposing a framework for clearer, more effective chart–caption pairs.",
	},
];

const Highlights = () => {
	return (
		<section id="highlights" className="py-20 px-4 bg-background">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-textPrimary mb-2">Recent Highlights</h2>
				<p className="text-sm text-textSecondary mb-8">
					Talks, posters, and awards from the last year and a half.
				</p>

				<ol className="relative border-l border-gray-200 ml-2">
					{highlightsData.map((item, idx) => (
						<li key={idx} className="ml-6 pb-8 last:pb-0">
							<span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-accentTeal ring-4 ring-white" />
							<div className="flex flex-wrap items-center gap-2 mb-1">
								<span className="text-xs text-textSecondary italic">{item.date}</span>
								<span
									className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${badgeStyles[item.type]}`}
								>
									{item.type}
								</span>
								{item.status && (
									<span
										className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${statusStyles[item.status]}`}
									>
										{item.status}
									</span>
								)}
							</div>
							<h3 className="text-base font-semibold text-textPrimary leading-snug">
								{item.title}
							</h3>
							<p className="text-sm text-accentTeal font-medium mt-0.5">
								{item.venue}
							</p>
							<p className="text-sm text-textSecondary mt-2 leading-relaxed">
								{item.note}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
};

export default Highlights;
