import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CertificateList from './CertificateList';
import SelectedCertificates from './SelectedCertificates';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CertificateList />} />
        <Route path="/selected" element={<SelectedCertificates />} />
      </Routes>
    </Router>
  );
}

export default App;
