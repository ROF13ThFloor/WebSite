import { motion } from "framer-motion";
import ExtLink from './ExtLink';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    link: string;
  };
}

const ProjectItem = ({ project }: ProjectProps): JSX.Element => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="group rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition hover:border-black/20 hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5"
    >
      <div className="flex items-start justify-between gap-4">
        <ExtLink href={project.link}>
          <span className="text-lg font-semibold text-slate-900 transition group-hover:text-black dark:text-white">
            {project.title}
          </span>
        </ExtLink>
        <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
          Project
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {project.description}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <ExtLink href={project.link}>Source Code</ExtLink>
        <span className="text-xs text-slate-400">Open source</span>
      </div>
    </motion.article>
  );
};

export default ProjectItem;
