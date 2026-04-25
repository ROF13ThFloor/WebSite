import {KTHTeachingItem} from './TeachingItem';
import { SharifTeachingItem } from './TeachingItem';
import KTHTAs from './data/kth-teachings.json';
import SharifTAs from './data/sharif-teachings.json';   
const TeachingList = (): JSX.Element => {
    return (
        <section className="grid w-full gap-6 pt-12" id="publications">
            <div className="flex items-center gap-3">
                <h2 className="text-2xl font-serif font-semibold tracking-tight text-slate-900 dark:text-white">KTH Royal Institute of Technology</h2>
                <img src="/images/kth.png" alt="" className="h-8 w-8 rounded-full border border-black/10 dark:border-white/10" />
            </div>
            <ul className="space-y-4">
                {KTHTAs.map((course, index) => (
                    <li key={index}>
                        <KTHTeachingItem course={course} />
                    </li>
                ))}
            </ul>
            <div className="pt-4 flex items-center gap-3">
                <h2 className="text-2xl font-serif font-semibold tracking-tight text-slate-900 dark:text-white">Sharif University of Technology</h2>
                <img src="/images/sharif.png" alt="" className="h-8 w-8 rounded-full border border-black/10 dark:border-white/10" />
            </div>
            
            <ul className="space-y-4">
                {SharifTAs.map((course, index) => (
                    <li key={index}>
                        <SharifTeachingItem course={course} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TeachingList;
