import ExtLink from './ExtLink';

interface TalkLink {
  name: string;
  url: string;
}

interface Talk {
  title: string;
  event: string;
  date: string;
  location: string;
  links?: TalkLink[];
}

interface Props {
  talk: Talk;
  index: number;
}

const TalkItem = ({talk, index}: Props): JSX.Element => {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition hover:border-black/20 hover:shadow-[0_20px_42px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Talk {index + 1}
      </p>
      <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
        <span className="font-semibold italic text-slate-900 dark:text-white">{talk.title}</span>
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
        {talk.event} · {talk.date} · {talk.location}
      </p>
      {talk.links && talk.links.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {talk.links.map((linkItem, idx) => (
            <ExtLink href={linkItem.url} key={idx}>
              {linkItem.name}
            </ExtLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default TalkItem;
