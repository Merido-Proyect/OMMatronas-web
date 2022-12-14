import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import { login } from "./../../services/AuthService";
import { useAuthContext } from "./../../context/AuthContext";



const LoginScreen = () => {
  const { login: loginContext } = useAuthContext();
  const [user, setUser] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({email: "", password: "" })

  const navigate = useNavigate();

  const validateUser = () => {
    const isValid = true;
    if (!user.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "* El email es necesario",
      }));
      isValid = false;
    }
    if (!user.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "* La contraseña debe tener al menos: una mayúscula, una minúscula, un número y una longitud de 8 caracteres",
      }));
      isValid = false;
    }
    return isValid;
  };
  
  
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
    
  const onSubmit = (event) => {
    event.preventDefault();
    setErrors({email: "", password: "" })

    const isUserValid = validateUser();
    if (isUserValid) {
    login(user).then((response) => {
        loginContext(response.accessToken, () => {
        navigate("/profile");
      });
    });
  };
}

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
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
                        Iniciar sesión
                      </p>

                      <form
                        onSubmit={(event) => onSubmit(event)}
                        className="mx-1 mx-md-4"
                      >
                        <div className="d-flex flex-column align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              placeholder="e-mail"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              style={{width:'308px'}}
                            />
                          </div>
                          {`${errors.email}` ? (
                            <span
                              className="my-alert"
                              role="alert"
                            >{`${errors.email}`}</span>
                          ) : null}
                        </div>

                        <div className="d-flex flex-column align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <div className='password-row'>
                            <input
                              type={passwordShown ? "text" : "password"}
                              name="password"
                              placeholder="Contraseña"
                              className="form-control-password"
                              onChange={(event) => handleOnChange(event)}
                             />
                            <button onClick={togglePassword} type='button' className="btn-eye">
                              <img src='https://res.cloudinary.com/merjur/image/upload/v1667324728/matronas/password-eye-icon_vc2r0z.png' alt='ver contraseña' className='eye'/>
                            </button>
                            </div>
                            <div className="flex-row">
                             {`${errors.password}` ? (
                              <span
                                className="my-alert "
                                role="alert"
                              >{`${errors.password}`}</span>
                            ) : null}
                            </div>
                          
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-form"
                            style={{ width: '130px' }}
                          >
                            Entrar
                          </button>
                        </div>
                      </form>
                      <p>¿No tienes cuenta? pincha {<Link to='/register'><strong>aquí</strong></Link>}</p>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://res.cloudinary.com/merjur/image/upload/v1667907714/matronas/6333043_vm3mz0.jpg"
                        className="img-fluid"
                        alt="Register img"
                      />
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

export default LoginScreen;
