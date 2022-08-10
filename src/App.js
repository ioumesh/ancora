import "./App.css";
import Home from "./pages/Home";
import Topbar from "./components/Topbar/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer";
import Group from "./pages/Group";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="customer" element={<Customer />} />
            <Route path="group" element={<Group />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
