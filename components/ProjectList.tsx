import ProjectItem from './ProjectItem'
import data from './data/projects.json'

const ProjectList = (): JSX.Element => {
    return (
        <section className="grid" id="publications">
            <h2 className="mt-12 text-2xl font-serif font-semibold tracking-tight text-slate-900 dark:text-white">Projects</h2>
            <div className="mt-6 space-y-6">
                {data.map((project, index) => (
                    <ProjectItem project={project} key={index}/>
                ))}
            </div>  
        </section>
        
    );
};



export default ProjectList;
