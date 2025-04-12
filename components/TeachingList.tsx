import TeachingItem from './TeachingItem';
import TAs from './data/teachings.json';

const TeachingList = (): JSX.Element => {
    return (
        <section className="w-full" id="publications">
            <h2 className="text-xl font-bold mt-12 mb-4">Teachings</h2>
            <ul className="list-disc pl-5">
                {TAs.map((course, index) => (
                    <li key={index}>
                        <TeachingItem course={course} index={index} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TeachingList;
