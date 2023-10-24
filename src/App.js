import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SharedLayout from "./pages/SharedLayout";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
