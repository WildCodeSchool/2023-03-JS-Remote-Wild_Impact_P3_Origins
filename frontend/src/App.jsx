import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";
import Homepage from "./pages/Homepage";
import Games from "./pages/admin/Games";
import OneGames from "./pages/admin/OneGames";
import Gamespage from "./pages/Gamespage";
import Videospage from "./pages/Videospage";
import ProfilPage from "./pages/user/ProfilPage";
import "./scss/App.scss";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Profils from "./pages/admin/Profils";
import Teams from "./pages/admin/Teams";
import Profil from "./pages/admin/Profil";
import Signup from "./pages/user/Signup";
import Signin from "./pages/user/Signin";
import FormAddVideo from "./pages/admin/FormAddVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Homepage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="games" element={<Gamespage />} />
          <Route path="videos" element={<Videospage />} />
          <Route path="profil" element={<ProfilPage />} />
        </Route>

        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="" element={<AdminDashboard />} />

          <Route path="games" element={<Games />} />
          <Route path="games/:id" element={<OneGames />} />
          <Route path="games/add" element={<AdminDashboard />} />

          <Route path="videos" element={<AdminDashboard />} />
          <Route path="videos/:id" element={<AdminDashboard />} />
          <Route path="videos/add" element={<FormAddVideo />} />

          <Route path="sliders" element={<AdminDashboard />} />
          <Route path="grilles" element={<AdminDashboard />} />

          <Route path="profils" element={<Profils />} />
          <Route path="profils/:id" element={<Profil />} />

          <Route path="teams" element={<Teams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
