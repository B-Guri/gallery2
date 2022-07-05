import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PhotoList from "./pages/PhotoListPage/PhotoListPage";
import SinglePhotoPage from "./pages/SinglePhotoPage/SinglePhotoPage";
import "./styles/App.css"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/photo/:id" element={<SinglePhotoPage />}/>
          <Route path="*" element={<PhotoList />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
