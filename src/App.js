import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register'; // Import Register component
import Login from './Login'; // Import the Login component
import Dashboard from './Dashboard';
import Form from "./scenes/form";
import Line from "./scenes/line";

import Geography from "./scenes/geography";
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';
const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
      
              <Route path="/line" element={<Line />} />
           
              <Route path="/geography" element={<Geography />} />
      </Routes>
    </Router>
  );
};

export default App;
