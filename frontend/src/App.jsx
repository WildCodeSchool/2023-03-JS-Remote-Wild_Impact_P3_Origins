import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";
import Homepage from "./pages/Homepage";
import Games from "./pages/admin/Games";
import Navbar from "./components/Navbar";
import "./scss/App.scss";
import FormulaireExample from "./pages/admin/FormulaireExample";
import Profils from "./pages/admin/Profils";
import Teams from "./pages/admin/Teams";
import Profil from "./pages/admin/Profil";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Homepage />} />
        </Route>

        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="" element={<FormulaireExample />} />
          <Route path="games" element={<Games />} />
          <Route path="profils" element={<Profils />} />
          <Route path="profils/:id" element={<Profil />} />
          <Route path="teams" element={<Teams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
