import { motion } from "framer-motion";
import ExtLink from './ExtLink';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    link: string;
  };
  index: number;
}

const ProjectItem = ({ project, index }: ProjectProps): JSX.Element => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.05, ease: "easeInOut" }}
        className="mt-4 mb-8 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform 
        bg-white dark:bg-gray-900 cursor-pointer"
      >
        <div className="w-full bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
          {/* Clickable & formatted title */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 font-semibold  font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {project.title}
          </a>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            {project.description}
          </p>
          <p className = "text-gray-500 flex justify-end text-sm bold">
                
                    <ExtLink href={project.link}>[Source Code] &nbsp;</ExtLink>
                              
            </p>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectItem;
