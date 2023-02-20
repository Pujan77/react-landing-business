import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavigationBar } from "./layout";
import { routingItems } from "./content";
import "./assets/styles/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            {routingItems.map((nav) => (
              <Route
                key={nav.title}
                path={nav.to}
                exact={nav.exact}
                element={nav.component}
              />
            ))}
          </Route>
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
