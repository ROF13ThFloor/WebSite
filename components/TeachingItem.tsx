import React from 'react';

interface TeachingItemProps {
    course:any;
}

const KTHTeachingItem = ({ course }: TeachingItemProps): JSX.Element => {
    return (
        <div className="teaching-item bg-white dark:bg-gray-800" style={styles.container}>
            <div style={styles.header}>
                <a
                    href={course.course.courselink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.courseLink}
                >
                    {course.course.name} ({course.courseID})
                </a>
                <span style={styles.details}>
                    {" "}by{" "}
                    <a
                        href={course.course.teacherlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.teacherLink}
                    >
                        {course.course.teachername}
                    </a>
                    {" "} - {course.date}
                </span>
            </div>
        </div>
    );
};

const SharifTeachingItem = ({ course }: TeachingItemProps): JSX.Element => {
    return (
        <div className="teaching-item bg-white dark:bg-gray-800" style={styles.container}>
            <div style={styles.header}>
                <a
                    href={course.course.courselink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.courseLink}
                >
                    {course.course.name}
                </a>
                <span style={styles.details}>
                    {" "}by{" "}
                    <a
                        href={course.course.teacherlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.teacherLink}
                    >
                        {course.course.teachername}
                    </a>
                    {" "} - {course.date}
                </span>
            </div>
            {/* <div style={styles.details}><p>{course.course.description}</p>
                </div> */}
        </div>
    );
};




const styles = {
    container: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform-transform',
    },
    header: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '8px',
    },
    courseLink: {
        color: '#0070f3',
        textDecoration: 'none',
    },
    teacherLink: {
        color: '#0070f3',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    details: {
        fontSize: '14px',
        
    },
};

export { KTHTeachingItem, SharifTeachingItem };