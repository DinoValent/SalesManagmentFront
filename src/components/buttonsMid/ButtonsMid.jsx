import { useNavigate } from "react-router-dom";

export const ButtonsMid = () => {
  const navigate = useNavigate();
  const navInv = () => {
    navigate("/invoice");
  };
  const navProd = () => {
    navigate("/product");
  };
  const navCust = () => {
    navigate("/customer");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 ">
      <button className="btn btn-primary btn-lg m-2 p-5" onClick={navInv}>
        Facturas
      </button>
      <button className="btn btn-info btn-lg m-2 p-5" onClick={navProd}>
        Productos
      </button>
      <button className="btn btn-success btn-lg m-2 p-5" onClick={navCust}>
        Clientes
      </button>
    </div>
  );
};
