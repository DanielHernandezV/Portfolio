import "./App.css";
import Navbar from "./routes/navbar/navbar.component";
import Proyects from "./routes/proyects/proyects.component";
import Directory from "./routes/directory/directory.component";
import { Route, Routes } from "react-router-dom";
import MyJourney from "./routes/my-journey/my-journey.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Directory />} />
          <Route path="proyects" element={<Proyects />} />
          <Route path="myjourney" element={<MyJourney />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
