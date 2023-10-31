import { useNavigate } from "react-router-dom";

export const Customer = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/home");
  };
  return (
    <>
      <h1>Cliente</h1>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary m-2" onClick={back}>
          Volver
        </button>
      </div>
    </>
  );
};
