import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages";
import { NavigationBar } from "./layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route path="/" exact element={<Landing />} />
            <Route path="/about" element={<Landing />} />
            <Route path="/contact" element={<Landing />} />
          </Route>
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
