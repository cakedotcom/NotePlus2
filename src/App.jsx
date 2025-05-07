import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import NewNote from "./pages/NewNote.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/NewNote" element={<NewNote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App