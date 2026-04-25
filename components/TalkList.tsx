import TalkItem from './TalkItem';
import data from './data/talks.json';

const TalkList = (): JSX.Element => {
  return (
    <section className="grid w-full" id="talks">
      <h2 className="mt-12 text-2xl font-serif font-semibold tracking-tight text-slate-900 dark:text-white">Talks</h2>
      <div className="mt-6 space-y-5">
        {data.map((talk, index) => (
          <TalkItem talk={talk} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default TalkList;
