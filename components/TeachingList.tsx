import TeachingItem from './TeachingItem';
import KTHTAs from './data/kth-teachings.json';
import SharifTAs from './data/sharif-teachings.json';   
const TeachingList = (): JSX.Element => {
    return (
        <section className="w-full" id="publications">
            <h2 className="text-xl font-bold mt-12 mb-4">KTH Royal institute of Technology</h2>
            <ul className="list-disc pl-5">
                {KTHTAs.map((course, index) => (
                    <li key={index}>
                        <TeachingItem course={course} />
                    </li>
                ))}
            </ul>
            <h2 className="text-xl font-bold mt-12 mb-4">Sharif University of Technology</h2>
        </section>
    );
};

export default TeachingList;
