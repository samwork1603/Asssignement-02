import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import TabsForm from "./components/TabsForm";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-details" element={<TabsForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
