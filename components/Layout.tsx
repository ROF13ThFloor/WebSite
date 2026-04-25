import {useState, useEffect} from 'react';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {useTheme} from 'next-themes';

import Header from './Header';
import Footer from './Footer';

interface Props {
	children: React.ReactNode;
}

const Layout = ({children}: Props): JSX.Element => {
	const [mounted, setMounted] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const {resolvedTheme, setTheme} = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	useScrollPosition(({currPos}) => {
		if (currPos.y <= -20) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}, [scrolled]);

	return (
		<div className="relative min-h-screen overflow-hidden">
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-40 left-[-10%] h-[460px] w-[560px] rounded-full bg-[radial-gradient(circle_at_top_left,rgba(242,213,175,0.75),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(60,40,20,0.55),transparent_65%)]" />
				<div className="absolute top-24 right-[-10%] h-[380px] w-[520px] rounded-full bg-[radial-gradient(circle_at_top_right,rgba(199,220,255,0.6),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(25,35,70,0.6),transparent_65%)]" />
				<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0))] dark:bg-[linear-gradient(135deg,rgba(20,20,20,0.6),rgba(10,10,10,0))]" />
			</div>
			<Header mounted={mounted} resolvedTheme={resolvedTheme} setTheme={setTheme} scrolled={scrolled}/>
			<div className="relative z-10">{children}</div>
			<Footer/>
		</div>
	);
};

export default Layout;
