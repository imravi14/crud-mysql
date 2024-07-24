import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UpdatePerson from "./components/UpdatePerson";
import PersonList from "./components/PersonList";
import CreatePerson from "./components/CreatePerson";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PersonList />} />
        <Route path="/create" element={<CreatePerson />} />
        <Route path="/update/:id" element={<UpdatePerson />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
