import { useEffect, useState } from "react";
import { calculateTotal, getInvoice } from "./servicesInvoice/getInvoice";
import { InvoiceView } from "./componentsInvoice/InvoiceView";
import { ClientView } from "./componentsInvoice/ClientView";
import { ListItemsView } from "./componentsInvoice/ListItemsView";
import { CompanyView } from "./componentsInvoice/CompanyView";
import { TotalView } from "./componentsInvoice/TotalView";
import { FormItemsView } from "./componentsInvoice/FormItemsView";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastname: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};

export const Invoice = () => {
  const [activeForm, setActiveForm] = useState(false);
  const [total, setTotal] = useState(0);
  const [invoice, setInvoice] = useState(invoiceInitial);
  const [items, setItems] = useState([]);

  const [counter, setCounter] = useState(4);

  const { id, name, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items); //Pasamos los items al estado
  }, []);

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const handlerAddItems = ({ product, price, quantity }) => {
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);

    setCounter(counter + 1);
  };

  const handlerDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  };

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Ejemplo Factura</div>
          <div className="card-body">
            <InvoiceView id={id} name={name} />
            <div className="row my-3">
              <div className="col">
                <ClientView title="Datos del cliente" client={client} />
              </div>
              <div className="col">
                <CompanyView title="Datos de la empresa" company={company} />
              </div>
            </div>
            <ListItemsView
              title="Productos de la factura"
              items={items}
              handlerDeleteItem={(id) => handlerDeleteItem(id)}
            />
            <TotalView total={total} />
            <button className="btn btn-secondary" onClick={onActiveForm}>
              {!activeForm ? "Agregar Item" : "Ocultar Form"}
            </button>
            {!activeForm || (
              <FormItemsView handler={(newItem) => handlerAddItems(newItem)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
