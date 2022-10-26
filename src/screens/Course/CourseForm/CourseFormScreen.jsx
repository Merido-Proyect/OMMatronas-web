import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../../../services/CourseServices";

const CourseFormScreen = () => {
  const [course, setCourse] = useState({
    name: "",
    typeOfCourse: "",
    schedule: "",
    hours: "",
    price: "",
    description: "",
    image: "",
  });
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    createCourse(course).then((course) => {
      console.log("entrada de course creada...........", course);
      navigate("/courses");
    });
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Nuevo curso
                      </p>

                      <form
                        onSubmit={(event) => onSubmit(event)}
                        className="mx-1 mx-md-4"
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="name"
                              placeholder="Nombre del curso"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              value={course.name}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="file"
                              name="image"
                              placeholder="Imagen del curso"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              value={course.image}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <p>Tipo de actividad</p>
                            <select onChange={(event) => handleOnChange(event)} name="typeOfCourse">
                              <option value='Activity'>Clases</option>
                              <option value='Presencial-Course'>Curso Presencial</option>
                              <option value='On-line-Course'>Curso on-line</option>

                            </select>
                           
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="description"
                              placeholder="Descripción"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              value={course.description}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="date"
                              name="schedule"
                              placeholder="Entra el texto del post"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              value={course.schedule}
                              style={{ heigth: "5rem" }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="hours"
                              placeholder="Hora de la actividad"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              value={course.hours}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="price"
                              placeholder="Precio del curso"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              value={course.price}
                            />
                          </div>
                        </div>
                        <div
                          className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                          style={{ width: "20rem" }}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Crear curso
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseFormScreen;
