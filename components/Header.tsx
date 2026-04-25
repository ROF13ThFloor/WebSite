import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import {Sun, Moon} from 'react-feather';

interface HeaderProps{
    mounted: any,
    resolvedTheme: any,
    setTheme: any,
    scrolled: any
}
const Header = ({mounted, resolvedTheme, setTheme, scrolled}: HeaderProps): JSX.Element => {
    return (
        <header className={`sticky top-0 z-20 w-full border-b transition ${scrolled ? 'border-black/10 bg-[#f7f3ec]/85 shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#0b0b0b]/80' : 'border-transparent bg-transparent'} backdrop-blur-md`}>
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10">
                <Link href="/">
                    {/* <Image className="cursor-pointer transition-colors flex !p-1 rounded-md mr-8 hover:bg-gray-300 text-lg dark:filter dark:invert"
                        src="/images/wall-e.png"
                        width={45}
                        height={45}
                        alt="favicon"/> */}
                </Link>
                <nav className="flex items-center justify-between gap-2">
                    <NavLink title="About" href="/#story"/>
                    <NavLink title="Projects" href="/projects"/>
                    <NavLink title="Publications" href="/publications"/>
                    <NavLink title="Teaching" href="/teachings"/>

                    <button
                        type="button"
                        aria-label="Change theme"
                        className="cursor-pointer rounded-full border border-black/10 p-2 text-slate-700 transition hover:bg-black/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
                        disabled={!mounted}
                        onClick={() => {
                            setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
                        }}>
                        {mounted && (
                        <abbr title="Switch theme">
                            {resolvedTheme === 'light' ? (
                                <Moon size={22} aria-label="Moon" />
                            ) : (
                                <Sun size={22} aria-label="Sun" />
                            )}
                        </abbr>
                                )}
                    </button>
                </nav>
            </div>
        </header>
        
    );
};



export default Header;
