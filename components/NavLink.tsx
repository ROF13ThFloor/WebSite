import {useRouter} from 'next/router';
import Link from 'next/link';

interface Props {
	title: string;
	href: string;
}

const NavLink = ({title, href}: Props): JSX.Element => {
	const router = useRouter();

	return (
		<Link href={href}>
			<button
				type="button"
				className={`flex h-9 items-center rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.12em] transition 
					${router.asPath === href ? 'border-transparent bg-black text-white shadow-[0_6px_16px_rgba(0,0,0,0.18)] dark:bg-white dark:text-black' : 'border-black/10 text-slate-700 hover:border-black/30 hover:bg-black/5 dark:border-white/10 dark:text-slate-300 dark:hover:border-white/30 dark:hover:bg-white/10'}`}>
				{title}
			</button>
		</Link>
	);
};

export default NavLink;
