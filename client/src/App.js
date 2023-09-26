import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Maps from "./pages/maps";
import Contacts from "./pages/contact";
import Error404 from "./pages/error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
