import ProjectItem from './ProjectItem'
import data from './data/projects.json'

const ProjectList = (): JSX.Element => {
    return (
        <section className="grid gap-6 pt-12" id="publications">
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-slate-900 dark:text-white">Projects</h2>
            <div className="space-y-4">
                {data.map((project, index) => (
                    <ProjectItem project={project} key={index}/>
                ))}
            </div>  
        </section>
        
    );
};



export default ProjectList;
