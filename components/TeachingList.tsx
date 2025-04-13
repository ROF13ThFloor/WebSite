import {KTHTeachingItem} from './TeachingItem';
import { SharifTeachingItem } from './TeachingItem';
import KTHTAs from './data/kth-teachings.json';
import SharifTAs from './data/sharif-teachings.json';   
const TeachingList = (): JSX.Element => {
    return (
        <section className="w-full" id="publications">
            <div className="flex items-center mt-10 mb-4">
                <h2 className="text-xl font-bold text-center mr-2">KTH Royal Institute of Technology</h2>
                <img src="/images/kth.png" alt="" className="h-8 w-8 rounded-full" />
            </div>
            <ul className="list-disc pl-5">
                {KTHTAs.map((course, index) => (
                    <li key={index}>
                        <KTHTeachingItem course={course} />
                    </li>
                ))}
            </ul>
            <div className="flex items-center mt-10 mb-4">
                <h2 className="text-xl font-bold text-center mr-2">Sharif University of Technology</h2>
                <img src="/images/sharif.png" alt="" className="h-8 w-8 rounded-full" />
            </div>
            
            <ul className="list-disc pl-5">
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
