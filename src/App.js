import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import GraphPage from "./pages/GraphPage";
import UpdatePage from "./pages/UpdatePage";
import { ToastContainer } from "react-toastify";
import Toastmsg from "./components/Toastmsg";
import LoginPage from "./pages/LoginPage";
import Notfound from "./components/Notfound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute element={HomePage} />} />
        <Route path="/add" element={<ProtectedRoute element={AddPage} />} />
        <Route path="/graph" element={<ProtectedRoute element={GraphPage} />} />
        <Route
          path="/update"
          element={<ProtectedRoute element={UpdatePage} />}
        />
        <Route path="/toast" element={<ProtectedRoute element={Toastmsg} />} />

        {/* 404 Page */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
