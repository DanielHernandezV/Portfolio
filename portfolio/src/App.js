import "./App.css";
import Navbar from "./routes/navbar/navbar.component";
import Proyects from "./routes/proyects/proyects.component";
import Directory from "./routes/directory/directory.component";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Directory />} />
          <Route path="proyects" element={<Proyects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
