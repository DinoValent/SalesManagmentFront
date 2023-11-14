import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialLoginForm = {
  email: "",
  password: "",
};

export const Login = () => {
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const navigate = useNavigate();

  const { email, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Debe completar los campos del formulario!!!");
      return;
    }

    // Aquí iría la lógica para enviar los datos al back-end
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error en el inicio de sesión");

      const { token } = await response.json();

      // Guardar el token en algún lugar (por ejemplo, localStorage)
      localStorage.setItem("token", token);

      // Redirigir al usuario a la página principal
      navigate("/home");
    } catch (error) {
      alert("Las credenciales son incorrectas o hubo un error");
    }
  };

  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="my-5 form-group justify-content-center align-items-center">
            <h3>Iniciar Sesión</h3>
            <form onSubmit={onSubmit}>
              <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                type="email"
                onChange={onInputChange}
                value={email}
              />
              <input
                className="form-control my-3 w-75"
                placeholder="Contraseña"
                type="password"
                name="password"
                onChange={onInputChange}
                value={password}
              />

              <button className="btn btn-primary" type="submit">
                Iniciar Sesión
              </button>
              <button onClick={() => navigate("/register")}>
                {" "}
                Registrarse{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const initialUserForm = {
//   username: "",
//   email: "",
//   password: "",
// };

// export const Login = () => {
//   const [userForm, setUserForm] = useState(initialUserForm);

//   const { username, password, email } = userForm;

//   const onInputChange = ({ target }) => {
//     const { name, value } = target;
//     setUserForm({
//       ...userForm,
//       [name]: value,
//     });
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (!username || !password || !email) {
//       alert("Debe completar los cambios del formulario!!!");
//       return;
//     }
//   };

//   const navigate = useNavigate();
//   const onLogin = () => {
//     navigate("/home");
//   };
//   return (
//     <div className="container my-5 ">
//       <div className="row justify-content-center">
//         <div className="col-md-7">
//           <div className="my-5 form-group  justify-content-center align-items-center">
//             <h3>Login</h3>
//             <form onSubmit={onSubmit}>
//               <input
//                 className="form-control my-3 w-75"
//                 placeholder="Username"
//                 name="username"
//                 onChange={onInputChange}
//                 value={username}
//               />
//               <input
//                 className="form-control my-3 w-75"
//                 placeholder="Email"
//                 name="email"
//                 onChange={onInputChange}
//               />
//               <input
//                 className="form-control my-3 w-75"
//                 placeholder="Password"
//                 type="password"
//                 name="password"
//                 onChange={onInputChange}
//               />

//               <button
//                 className="btn btn-primary"
//                 type="submit"
//                 onClick={onLogin}
//               >
//                 Crear
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
