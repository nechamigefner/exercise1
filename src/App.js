import './App.css';
import Triangle from './Components/TriangleTower';
import Rectangle from './Components/RectangleTower';
import Exit from './Components/Exit';
import About from './Components/About';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
  function App() {
    return (
      <div className="App">
        <header className="App-header">

          <BrowserRouter>
            <div class="Nav">
              <button class="button">
                <Link to="/About" >אודות</Link>
              </button>
              <button class="button">
                <Link to="/Rectangle" >מלבן</Link>
              </button>
              <button class="button">
                <Link to="/Triangle" >משולש</Link>
              </button>
              <button class="button">
                <Link to="/Exit" >ליציאה</Link>
              </button>
            </div>

              <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/Rectangle" element={<Rectangle />} />
                <Route path="/Triangle" element={<Triangle />} />
                <Route path="/Exit" element={<Exit />} />
              </Routes>
          </BrowserRouter>

        </header>
      </div>
    );
  }
export default App;

