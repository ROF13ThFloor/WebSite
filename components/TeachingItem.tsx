import React from 'react';

interface TeachingItemProps {
    course:any;
}

const KTHTeachingItem = ({ course }: TeachingItemProps): JSX.Element => {
    return (
        <div className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap items-center gap-2 text-base font-semibold text-slate-800 dark:text-slate-100">
                <a
                    href={course.course.courselink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 transition hover:text-black dark:text-white dark:hover:text-white"
                >
                    {course.course.name} ({course.courseID})
                </a>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-300">
                    by{" "}
                    <a
                        href={course.course.teacherlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-700 transition hover:text-black dark:text-slate-100 dark:hover:text-white"
                    >
                        {course.course.teachername}
                    </a>
                    {" "}-
                </span>
                <span className="text-xs font-medium text-slate-400 dark:text-slate-400">
                    {course.date}
                </span>
            </div>
        </div>
    );
};

const SharifTeachingItem = ({ course }: TeachingItemProps): JSX.Element => {
    return (
        <div className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap items-center gap-2 text-base font-semibold text-slate-800 dark:text-slate-100">
                <a
                    href={course.course.courselink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 transition hover:text-black dark:text-white dark:hover:text-white"
                >
                    {course.course.name}
                </a>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-300">
                    by{" "}
                    <a
                        href={course.course.teacherlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-700 transition hover:text-black dark:text-slate-100 dark:hover:text-white"
                    >
                        {course.course.teachername}
                    </a>
                    {" "}-
                </span>
                <span className="text-xs font-medium text-slate-400 dark:text-slate-400">
                    {course.date}
                </span>
            </div>
        </div>
    );
};
export { KTHTeachingItem, SharifTeachingItem };