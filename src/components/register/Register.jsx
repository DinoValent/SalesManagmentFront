import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  name: "",
  email: "",
  password: "",
};

export const Register = () => {
  const [form, setForm] = useState(initialFormState);
  const navigate = useNavigate();

  const onInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!form.email || !form.password || !form.name) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Usuario registrado:", data);

      // Después de registrar, redirigir al login
      navigate("/login");
    } catch (error) {
      console.error("Hubo un problema con la petición Fetch:", error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={onInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={onInputChange}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

// import { useNavigate } from "react-router-dom";

// export const Register = () => {
//   const navigate = useNavigate();
//   const onRegister = () => {
//     navigate("/login");
//   };
//   return (
//     <div className="container">
//       <h3>Login</h3>
//       <button className="btn btn-success" onClick={onRegister}>
//         Register
//       </button>
//     </div>
//   );
// };
