import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Company from '../src/pages/Company';
import Home from '../src/pages/Home';
import Silkscreen from '../src/pages/Silkscreen';
import Silicone from '../src/pages/Silicone';
import Machines from '../src/pages/Machines';
import Dtf from '../src/pages/Dtf';
import Laser from '../src/pages/Laser';
import OffsetPhotoprint from '../src/pages/OffsetPhotoprint';

{/*
import Dtf from '../src/pages/Dtf';
import Machines from '../src/pages/Machines' */}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/silkscreen" element={<Silkscreen />} />
        <Route path="/silicone" element={<Silicone />} />
        <Route path="/dtf" element={<Dtf />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/lasercut" element={<Laser />} />
        <Route path="/offset-photoprint" element={<OffsetPhotoprint />} />        

      </Routes>
      
    </Router>
  );
}

export default App;
