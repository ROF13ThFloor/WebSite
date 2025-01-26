import ExtLink from './ExtLink'
import data from './data/personalInfo.json'

const Education = (): JSX.Element => {
    return (
        <section className="grid" id="education">
            <h2 className="text-xl font-bold mt-12 mb-4">Education</h2>
            <p className = "text-lg text-gray-700 ml-6 list-disc space-y-2">

                {
                    data.education.map((education, index) => (
                        <li key={index} className="hover:text-blue-600 transition-all duration-300">
                            
                           <ExtLink href={education.link} className="font-semibold"> {education.title} - {education.university} </ExtLink>
                        </li>
                    ))
                }
            </p>
        </section>
    );
};



export default Education;
