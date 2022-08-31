import Login from "../pages/Login.js";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Todolist from "../pages/Todolist";
import { Route, Routes, Navigate } from "react-router-dom";
import auth from "./Authentication";
export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/todolist"
          element={<PrivateRoute component={Todolist} />}
        />
      </Routes>
    </div>
  );
}
const PrivateRoute = ({ component: RouteComponent }) => {
  if (auth.isAuthenticated()) {
    return <RouteComponent />;
  } else {
    return <Navigate to="/" />;
  }
};