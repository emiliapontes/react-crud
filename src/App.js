import logo from './logo.svg';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Routes>
            <Route exact path="/create" element={<Create />} />
          </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes>
            <Route exact path="/read" element={<Read />} />
          </Routes>
        </div>
          <Routes>
            <Route exact path="/update" element={<Update />} />
          </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
