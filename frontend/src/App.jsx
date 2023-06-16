import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";
import Homepage from "./pages/Homepage";
import Games from "./pages/admin/Games";
import Navbar from "./components/Navbar";
import "./scss/App.scss";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Profils from "./pages/admin/Profils";
import Teams from "./pages/admin/Teams";
import Profil from "./pages/admin/Profil";
import Signup from "./pages/user/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Homepage />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="" element={<AdminDashboard />} />

          <Route path="games" element={<Games />} />
          <Route path="games/:id" element={<AdminDashboard />} />
          <Route path="games/add" element={<AdminDashboard />} />

          <Route path="videos" element={<AdminDashboard />} />
          <Route path="videos/:id" element={<AdminDashboard />} />
          <Route path="videos/add" element={<AdminDashboard />} />

          <Route path="sliders" element={<AdminDashboard />} />
          <Route path="grilles" element={<AdminDashboard />} />

          <Route path="profils" element={<Profils />} />
          <Route path="profils/:id" element={<Profil />} />
          <Route path="profils/add" element={<AdminDashboard />} />

          <Route path="teams" element={<Teams />} />
          <Route path="teams/:id" element={<AdminDashboard />} />
          <Route path="teams/add" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
