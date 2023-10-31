import { useNavigate } from "react-router-dom";

export const ButtonsTop = () => {
  const navigate = useNavigate();
  const navProf = () => {
    navigate("/profile");
  };
  const navSett = () => {
    navigate("/setings");
  };
  const navLog = () => {
    navigate("/login");
  };
  return (
    <div className="d-flex justify-content-end">
      <button className="btn btn-primary m-2" onClick={navProf}>
        Perfil
      </button>
      <button className="btn btn-secondary m-2" onClick={navSett}>
        Ajustes
      </button>
      <button className="btn btn-info m-2" onClick={navLog}>
        Login
      </button>
      <h2 className="m-2">04:20</h2>
    </div>
  );
};
