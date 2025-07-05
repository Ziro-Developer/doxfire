import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import CreateFile from './components/CreateFile';
import BrowseFiles from './components/BrowseFiles';
import FileView from './components/FileView';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateFile />} />
            <Route path="/browse" element={<BrowseFiles />} />
            <Route path="/file/:id" element={<FileView />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;