import Link from 'next/link';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import NavLink from './NavLink';
import {Sun, Moon, Menu, X} from 'react-feather';

interface HeaderProps{
    mounted: any,
    resolvedTheme: any,
    setTheme: any,
    scrolled: any
}

const Header = ({mounted, resolvedTheme, setTheme, scrolled}: HeaderProps): JSX.Element => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        {title: 'About', href: '/#story'},
        {title: 'Projects', href: '/projects'},
        {title: 'Publications', href: '/publications'},
        {title: 'Teaching', href: '/teachings'}
    ];

    useEffect(() => {
        setMenuOpen(false);
    }, [router.asPath]);

    return (
        <header className={`sticky top-0 z-20 w-full border-b transition ${scrolled ? 'border-black/10 bg-[#f7f3ec]/85 shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#0b0b0b]/80' : 'border-transparent bg-transparent'} backdrop-blur-md`}>
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10">
                <Link href="/" className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-black/30 hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/10">
                    Home
                </Link>

                <nav className="hidden items-center justify-between gap-2 md:flex">
                    {navItems.map((item) => (
                        <NavLink key={item.href} title={item.title} href={item.href}/>
                    ))}

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

                <div className="flex items-center gap-2 md:hidden">
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
                                    <Moon size={20} aria-label="Moon" />
                                ) : (
                                    <Sun size={20} aria-label="Sun" />
                                )}
                            </abbr>
                        )}
                    </button>

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        className="rounded-full border border-black/10 p-2 text-slate-700 transition hover:bg-black/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
                        onClick={() => setMenuOpen((prev) => !prev)}>
                        {menuOpen ? <X size={20}/> : <Menu size={20}/>}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="border-t border-black/10 bg-[#f7f3ec]/95 px-6 pb-5 pt-3 shadow-[0_14px_34px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#0b0b0b]/95 md:hidden">
                    <nav className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className={`rounded-xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition ${router.asPath === item.href ? 'border-transparent bg-black text-white dark:bg-white dark:text-black' : 'border-black/10 text-slate-700 hover:border-black/30 hover:bg-black/5 dark:border-white/10 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/15'}`}>
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
        
    );
};



export default Header;
