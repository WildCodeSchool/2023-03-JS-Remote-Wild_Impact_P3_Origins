import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";
import FormulaireExample from "./pages/admin/FormulaireExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<FormulaireExample />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
