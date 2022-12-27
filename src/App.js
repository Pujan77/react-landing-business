import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages";
import { NavigationBar } from "./layout";
import Contact from "./pages/Contact";
import './assets/styles/style.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route path="/" exact element={<Landing />} />
            <Route path="/about" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
