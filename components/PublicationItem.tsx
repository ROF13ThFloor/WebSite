import ExtLink from './ExtLink';

interface Props {
    publication: any;
    index: number;
}

const PublicationItem = ({publication, index}: Props): JSX.Element => {
    return (
        <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Publication {index + 1}
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                {publication.author} <span className="font-semibold italic text-slate-900 dark:text-white">{publication.title}</span>
            </p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-300">{publication.conference}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
                {publication.links.map((linkItem: any, idx: any) => (
                    <ExtLink href={linkItem.url} key={idx}>{linkItem.name}</ExtLink>
                ))}
            </div>
        </div>

    );
};

export default PublicationItem;
