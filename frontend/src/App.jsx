import {BrowserRouter, Routes, Route  } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout";
import Login from "./pages/general/login";
import LoginAdmin from "./pages/admin/loginAdmin";
import ConfirmAccount from "./pages/admin/confirm";
import Register from "./pages/admin/register";
import ForgotPassword from "./pages/admin/forgotPassword";



function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
              <Route index element={ < Login /> } />
          </Route>
          <Route path="/admin" element={< AdminLayout />}>
              <Route index element={<LoginAdmin/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="forgot-password" element={<ForgotPassword/>}/>
              <Route path="confirm-account/:id" element={<ConfirmAccount/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
