import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import Layout from "./layout.jsx";
import Main from './pages/main.jsx';
import About from './pages/about.jsx';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={ <Navigate to="/" /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;