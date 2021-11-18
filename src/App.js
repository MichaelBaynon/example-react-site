import "./App.css";
import Navbar from "./components/navBar";
import HomeContent from "./components/homeContent";

import BuildPizza from "./pages/buildPizza";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Navbar />
    

        <Routes>
          
          <Route path="/buildpizza" element={<BuildPizza/>} />
          <Route exact path='/' element={<HomeContent/>}    />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
