import SupportingBox from './SupportingBox';


const Footer = (): JSX.Element => {
    return (
        <footer className="mt-16 border-t border-black/10 dark:border-white/10">
            <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:px-10">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Let's connect</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">

                    </p>
                </div>
                <SupportingBox></SupportingBox>
            </div>
            
            {/* <p className="text-center text-sm opacity-40 dark:opacity-50 pb-4 pt-4">
                Built with <i>Next.js, TailwindCSS</i> and <a href = {personalInfo.love}>💛</a>
                . {' '}
            </p> */}
        </footer>
    );
};

export default Footer;
