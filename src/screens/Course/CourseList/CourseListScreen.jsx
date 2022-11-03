import React, { useState, useEffect, useCallback } from 'react';
import { getCourses, deleteCourse } from './../../../services/CourseServices';
import { Link } from "react-router-dom";
import { useAuthContext } from "./../../../context/AuthContext";
import CourseCard from '../../../components/CourseCard/CourseCard';


const CourseListScreen = () => {
      const [courses, setCourses] = useState([]);
      const { user } = useAuthContext();
    
      const fetchCourses = useCallback(() => {
        getCourses().then((course) => {
          setCourses(course);
        });
      }, []);

    
      const handleDelete = (id) => {
        deleteCourse(id).
        then((deletedCourse) => {
          fetchCourses()
        });
      };
      
      useEffect(() => {
        fetchCourses()
      }, [])

    return (
        <div>
            
        {courses.map((course) => (
          <div key={course.id}>
            <CourseCard 
              name={course.name}
              typeOfCourse={course.typeOfCourse}
              image={course.image}
              description={course.description}
              schedule={course.schedule}
              hours={course.hours}
              price={course.price}
            />
          
          
            {/* <Link to={`/course/${course.id}`}>Ver detalles</Link>

            <p>{course.name}</p>
            <p>{course.typeOfCourse}</p>
            <p>{course.description}</p>
            <p>{course.price}</p>
            {user.isAdmin ? (
              <div>
                <Link
                  className="link-unstyled me-3"
                  to={`/course/${course.id}/update`}
                >
                  <span className="badge badge-primary bg-primary badge-pill">
                    Editar
                  </span>
                </Link>
                <i
                  onClick={() => handleDelete(course.id)}
                  className="btn badge badge-danger text-light bg-danger badge-pill"
                  type={"btn"}
                >
                  Borrar
                </i>
              </div>
            ) : null}
            </li> */}
          </div>
        ))}
        </div>
      
    );
};

export default CourseListScreen;