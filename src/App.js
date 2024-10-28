// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './FormContext';
import Identification from './components/identification';
import Application from './components/application';
import Preview from './components/preview';
import Payment from './components/payment';

function App() {
  return (
      <FormProvider>
          <Router>
              <Routes>
                  <Route path="/" element={<Identification />} />
                  <Route path="/application" element={<Application />} />
                  <Route path="/preview" element={<Preview />} />
                  <Route path="/payment" element={<Payment />} />
              </Routes>
          </Router>
      </FormProvider>
  );
}

export default App;
