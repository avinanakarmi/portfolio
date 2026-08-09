import React from "react";

const experiencesData = [
	{
		year: "Jan 2022 – Jan 2024",
		role: "Software Engineer",
		company: "Deerhold Pvt. Ltd. (Sibel Health)",
		details:
			"Built FastAPI/PostgreSQL backend deployed via microservices on AWS (Pydantic, SQLAlchemy); developed real-time patient vitals UI in React using WebSockets and contributed to a Next.js 13 vitals monitoring system with React Query; wrote behavior-driven tests using Behave.",
	},
	{
		year: "Jul 2020 – Jan 2022",
		role: "Associate Software Engineer",
		company: "Deerhold Pvt. Ltd. (gWell Health)",
		details:
			"Implemented telehealth, biometrics login, file upload/download, and a background audio player in React Native for a DNA-powered wellness app; set up Jest with React Native Testing Library for unit tests and integrated ESLint for code quality.",
	},
	{
		year: "Aug 2018 – May 2019",
		role: "Software Developer Intern",
		company: "Digital Media Team · Deerwalk Institute of Technology, Kathmandu",
		description:
			"Built a React Native learning app (DLC Mobile, 10K+ downloads) and a Laravel news portal (DWIT News) with MVC architecture and Blade templating; designed the database architecture and implemented user, role, and content management."
	},
];

const Experiences = () => {
	return (
		<section
			id="experiences"
			className="py-20 px-4 bg-white"
		>
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-textPrimary mb-8">Industry Experience</h2>
				<div className="space-y-6">
					{experiencesData.map((exp, idx) => (
						<div key={idx} className="border-l-4 border-accentLavender pl-5">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
								<h3 className="text-lg font-semibold text-textPrimary">
									{exp.role}
								</h3>
								<span className="text-sm text-textSecondary italic shrink-0">
									{exp.year}
								</span>
							</div>
							<p className="text-sm text-accentTeal font-medium mt-0.5">{exp.company}</p>
							{exp.details && (
								<p className="text-sm text-textSecondary mt-2 leading-relaxed">
									{exp.details}
								</p>
							)}
							{exp.description && (
								<p className="text-sm text-textSecondary mt-2 leading-relaxed">
									{exp.description}
								</p>
							)}
							{exp.bullets && (
								<ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-sm text-textSecondary leading-relaxed">
									{exp.bullets.map((b, i) => (
										<li key={i}>{b}</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experiences;