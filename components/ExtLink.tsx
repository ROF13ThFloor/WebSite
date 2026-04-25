interface Props {
	href: string;
	children: React.ReactNode;
}

const ExtLink = ({href, children}: Props) => (
	<a
		href={href}
		className="border-b border-black/30 font-semibold text-slate-900 transition hover:border-black hover:bg-black/5 dark:border-white/40 dark:text-slate-100 dark:hover:border-white dark:hover:bg-white/10"
		target="_blank"
		rel="noopener noreferrer">
		{children}
	</a>
);

export default ExtLink;
