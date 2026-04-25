import PublicationItem from './PublicationItem'
import data from './data/publications.json'

const PublicationList = (): JSX.Element => {
    return (
        <section className="grid w-full gap-6 pt-12" id="publications">
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-slate-900 dark:text-white">Publications</h2>
            <div className="space-y-4">
              {data.map((publication, index) => (
                <PublicationItem publication={publication} index={index} key={index}/>
              ))}
            </div>
            

        </section>
    );
};



export default PublicationList;
