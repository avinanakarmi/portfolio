const published = [
	{
		authors: [
			{ name: "Nakarmi, A.", me: true },
			{ name: "Sen, S." },
			{ name: "Song, X." },
			{ name: "Samaddar, S." },
			{ name: "Dasgupta, A." },
		],
		year: "2026",
		title:
			"A Multimodal Reasoning Typology for Grounding Chart-Image Coherence in Science Communication",
		venue: "IEEE Visualization Conference (VIS) 2026 — Short Papers",
		note: "arXiv preprint arXiv:2607.05222",
		link: "https://arxiv.org/abs/2607.05222",
	},
	// {
	// 	authors: [
	// 		{ name: "Nakarmi, A.", me: true },
	// 		{ name: "Ghosh, S." },
	// 		{ name: "Diaz, A." },
	// 		{ name: "Maher, N." },
	// 		{ name: "Pradhan, A." },
	// 		{ name: "Dasgupta, A." },
	// 	],
	// 	year: "2026",
	// 	title:
	// 		"AI as a Caring Neighbor: Shaping Collective Environmental Health Intelligence through Community Knowledge Ecosystems",
	// 	venue: "Collective Intelligence (CI) 2026 · Talks",
	// 	note: "Accepted · non-archival",
	// 	link: "",
	// },
	{
		authors: [
			{ name: "Sen, S." },
			{ name: "Nakarmi, A.", me: true },
			{ name: "Song, X." },
			{ name: "Dasgupta, A." },
		],
		year: "2026",
		title:
			"POINTERS at UZH Shared Task 2026: Reasoning Probes for Argumentation Mining in UN Resolutions",
		venue:
			"Proceedings of the 13th Workshop on Argument Mining and Reasoning, pp. 125–130",
		note: "",
		link: "https://aclanthology.org/2026.argmining-1.16.pdf",
	},
];

// Flip to true to show the "Under Review" block again.
const showUnderReview = false;

const underReview = [
	{
		title:
			"Relevance Is Enough: A Communication-Oriented Retrieval System for Consequential Scientific Question Answering",
		authors:
			"Avina Nakarmi, Naga Datha Saikiran Battula, Anthony Diaz, Aritra Dasgupta",
		venue: "EMNLP 2026 Industry Track",
		status: "Submitted 2026",
		summary:
			"Designed a persona-adaptive, reasoning-guided RAG system for scientific risk communication (water-quality domain) that cuts context use 10× while optimizing for human-centered “completeness,” a dimension standard relevance metrics fail to capture.",
	},
];

const Publications = () => {
	return (
		<section id="publications" className="py-20 px-4 bg-white">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-textPrimary mb-8">Publications</h2>

				<div className="space-y-5">
					{published.map((pub, idx) => (
						<div
							key={idx}
							className="bg-white rounded-lg shadow-soft p-5 border-l-4 border-accentTeal"
						>
							<p className="text-sm text-textSecondary">
								{pub.authors.map((a, i) => (
									<span key={i}>
										<span className={a.me ? "font-semibold text-textPrimary" : ""}>
											{a.name}
										</span>
										{i < pub.authors.length - 1 ? ", " : ""}
									</span>
								))}
								{" "}({pub.year}).
							</p>
							<h3 className="text-base font-semibold text-textPrimary mt-1 leading-snug">
								{pub.link ? (
									<a
										href={pub.link}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-accentTeal transition"
									>
										{pub.title}
									</a>
								) : (
									pub.title
								)}
							</h3>
							<p className="text-sm text-accentTeal font-medium mt-1">{pub.venue}</p>
							{pub.note && (
								<p className="text-xs text-textSecondary italic mt-1">{pub.note}</p>
							)}
						</div>
					))}
				</div>

				{showUnderReview && (
				<>
				<h3 className="text-xl font-bold text-textPrimary mt-12 mb-5">Under Review</h3>
				<div className="space-y-5">
					{underReview.map((pub, idx) => (
						<div
							key={idx}
							className="bg-white rounded-lg shadow-soft p-5 border-l-4 border-accentLavender"
						>
							<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
								<h4 className="text-base font-semibold text-textPrimary leading-snug">
									{pub.title}
								</h4>
								<span className="text-xs text-textSecondary italic shrink-0 sm:ml-4 sm:mt-1">
									{pub.status}
								</span>
							</div>
							<p className="text-sm text-textSecondary mt-1">{pub.authors}</p>
							<p className="text-sm text-accentTeal font-medium mt-1">{pub.venue}</p>
							<p className="text-sm text-textSecondary mt-2 leading-relaxed">
								{pub.summary}
							</p>
						</div>
					))}
				</div>
				</>
				)}
			</div>
		</section>
	);
};

export default Publications;
