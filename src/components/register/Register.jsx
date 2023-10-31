import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const onRegister = () => {
    navigate("/login");
  };
  return (
    <div className="container">
      <h3>Login</h3>
      <button className="btn btn-success" onClick={onRegister}>
        Register
      </button>
    </div>
  );
};
