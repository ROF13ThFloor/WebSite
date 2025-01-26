
import ExtLink from './ExtLink';
import personalInfo from './data/personalInfo.json'

const Story = (): JSX.Element =>{
return(

    <section className="grid" id="story">
            <h2 className="text-xl font-bold mt-12 mb-4">About</h2>
            <div className="text-base ml-1 text-gray-700">
            <p className = "text-sm text-gray-400">
            Hi! I'm Mojtaba, a PhD student specializing in software security at KTH Royal Institute of Technology in Sweden, within the Division of Theoretical Computer Science. I am conducting my research under the supervision of <ExtLink href= {personalInfo.about.PhdSupervisor1.link}>{personalInfo.about.PhdSupervisor1.name} </ExtLink>
            , with <ExtLink href= {personalInfo.about.PhdSupervisor2.link}>{personalInfo.about.PhdSupervisor2.name} </ExtLink> as my co-supervisor.

            Before joining KTH, I earned my master’s degree in information technology from Sharif University of Technology, where I was supervised by <ExtLink href= {personalInfo.about.MasterSupervisor1.link}>{personalInfo.about.MasterSupervisor1.name} </ExtLink>. My master’s thesis focused on detecting repackaged Android applications. Since then, I have been actively engaged in research on software security and software supply chains.
            </p>
            </div>

        </section>



    
);
};

export default Story; 