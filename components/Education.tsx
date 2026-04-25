import ExtLink from './ExtLink'
import data from './data/personalInfo.json'

const Education = (): JSX.Element => {
    return (
        <section className="grid gap-6 pt-16" id="education">
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-slate-900 dark:text-white">Education</h2>
            <ul className="space-y-4">

                {
                    data.education.map((education, index) => (
                        <li key={index} className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-slate-700 shadow-[0_14px_34px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                            <ExtLink href={education.link}>
                                <span className="font-semibold">
                                    {education.title} - {education.university}
                                </span>
                            </ExtLink>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};



export default Education;
