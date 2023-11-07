/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const FormItemsView = ({ handler }) => {
  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState;

  useEffect(() => {
    // console.log("el precio cambio");
  }, [price]);

  useEffect(() => {
    // console.log("algo a cambiado!!");
  }, [formItemsState]);

  const onInputChange = ({ target: { name, value } }) => {
    // console.log(name);
    // console.log(value);
    setFormItemsState({
      ...formItemsState,
      [name]: value, //variable computada para poder diferenciarlas entre si por el tipo de nombre
    });
  };
  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) return;
    if (price.trim().length <= 1) return;
    if (isNaN(price.trim())) {
      alert("Error!!! El precio no es un numero");
      return;
    }
    if (quantity.trim().length < 1) return;

    if (isNaN(quantity.trim())) {
      alert("Error!!! La cantidad no es un numero");
      return;
    }
    handler(formItemsState);
    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
      <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
        <input
          type="text"
          name="product"
          value={product}
          placeholder="Producto"
          className="form-control m-3"
          onChange={onInputChange}
        ></input>
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Precio"
          className="form-control m-3"
          onChange={onInputChange}
        ></input>
        <input
          type="text"
          name="quantity"
          value={quantity}
          placeholder="Cantidad"
          className="form-control m-3"
          onChange={(event) => onInputChange(event)} //Metodo de referencia
        ></input>
        <button type="submit" className="btn btn-primary m-3">
          Nuevo Item
        </button>
      </form>
    </>
  );
};
