import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialUserForm = {
  username: "",
  email: "",
  password: "",
};

export const Login = () => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { username, password, email } = userForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !email) {
      alert("Debe completar los cambios del formulario!!!");
      return;
    }
  };

  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/home");
  };
  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="my-5 form-group  justify-content-center align-items-center">
            <h3>Login</h3>
            <form onSubmit={onSubmit}>
              <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                onChange={onInputChange}
                value={username}
              />
              <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                onChange={onInputChange}
              />
              <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                onChange={onInputChange}
              />

              <button
                className="btn btn-primary"
                type="submit"
                onClick={onLogin}
              >
                Crear
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
