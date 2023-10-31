import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import { Home } from "../home/home";
import { Invoice } from "../invoice/Invoice";
import { Product } from "../product/Product";
import { Customer } from "../customer/Customer";
import { Profile } from "../profile/profile";
import { Setings } from "../settings/Setings";

export const SalesRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="home" element={<Home />} />
      <Route path="invoice" element={<Invoice />} />
      <Route path="product" element={<Product />} />
      <Route path="customer" element={<Customer />} />
      <Route path="profile" element={<Profile />} />
      <Route path="setings" element={<Setings />} />
      <Route path="/" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};
