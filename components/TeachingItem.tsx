import React from 'react';

interface TeachingItemProps {
    course: any;
    index: any;
}

const TeachingItem: React.FC<TeachingItemProps> = ({ course, index }) => {
    return (
        <div className="teaching-item">
        <p><a 
            href={course.course.courselink} 
            target="" 
            rel="" 
            style={{ color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}
        >
            {course.course.name} ({course.courseID}) 
        </a> by 
        <a 
            href={course.course.teacherlink} 
            target="" 
            rel="" 
            style={{ color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}
        >
            {course.course.teachername}  
        </a>    </p>
        

            
            
        </div>
    );
};

export default TeachingItem;