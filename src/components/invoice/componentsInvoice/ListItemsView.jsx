import { RowItemView } from "./RowItemView";
import PropTypes from "prop-types";

/* eslint-disable react/prop-types */
export const ListItemsView = ({ title, items, handlerDeleteItem }) => {
  return (
    <>
      <h4>{title}</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => {
            return (
              <RowItemView
                key={id} //El id es para renderizar cada elemento por separado
                id={id}
                product={product}
                price={price}
                quantity={quantity}
                handlerDeleteItem={(id) => handlerDeleteItem(id)}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

ListItemsView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
