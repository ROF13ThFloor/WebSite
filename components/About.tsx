import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'

const About = (): JSX.Element => {
	return (
		<section className="grid gap-8" id="about">
			<div className="grid gap-8 md:grid-cols-[auto,1fr] md:items-center">
				<div className="hidden md:block rounded-full border border-black/10 bg-white/70 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col gap-5">
					<div className="flex flex-wrap items-center gap-3">
						<span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
							PhD Researcher
						</span>
						<span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
							Software Security
						</span>
					</div>
					<h1 className="text-5xl font-serif font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl">
						{personalInfo.name}
					</h1>
					<p className="max-w-[64ch] text-base leading-8 text-slate-700 dark:text-slate-200 md:text-[1.05rem]">
						PhD student at <ExtLink href={personalInfo.about.university.link}>{personalInfo.about.university.name}</ExtLink>,
						 focused on software automation and the software supply chain.
					</p>
					<div className="flex flex-wrap items-center gap-3 pt-1">
						<span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-1 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
							Email: {personalInfo.about.email}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
